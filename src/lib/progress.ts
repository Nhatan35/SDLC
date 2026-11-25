export interface QuizRecord {
  bestScore: number;
  lastScore: number;
  total: number;
  attempts: number;
  passed: boolean;
  updatedAt: string;
}

export interface FlashcardRecord {
  /** Box index 0..5 -> intervals [0, 1, 3, 7, 14, 30] days */
  box: number;
  nextReviewAt: number;
  reviews: number;
  lastResult: 'again' | 'good' | 'easy';
}

export interface ReflectionRecord {
  text: string;
  updatedAt: string;
}

export interface ProgressState {
  version: 1;
  quizzes: Record<string, QuizRecord>;
  flashcards: Record<string, FlashcardRecord>;
  reflections: Record<string, ReflectionRecord>;
  completedChecklists: Record<string, string[]>;
  scenarios: Record<string, number>;
}

const STORAGE_KEY = 'sdlc_academy_progress_v1';
const LEGACY_SCENARIO_KEY = 'sdlc_academy_scenarios_v1';
export const SRS_INTERVALS_DAYS = [0, 1, 3, 7, 14, 30] as const;
const DAY_MS = 24 * 60 * 60 * 1000;

function emptyState(): ProgressState {
  return {
    version: 1,
    quizzes: {},
    flashcards: {},
    reflections: {},
    completedChecklists: {},
    scenarios: {},
  };
}

export function loadProgress(): ProgressState {
  if (typeof window === 'undefined') return emptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<ProgressState>) : {};
    let scenarios: Record<string, number> =
      parsed.scenarios && typeof parsed.scenarios === 'object' ? { ...parsed.scenarios } : {};

    // Migrate legacy standalone scenario progress once if present
    const legacyRaw = window.localStorage.getItem(LEGACY_SCENARIO_KEY);
    if (legacyRaw) {
      try {
        const legacyObj = JSON.parse(legacyRaw) as Record<string, number>;
        scenarios = { ...legacyObj, ...scenarios };
        window.localStorage.removeItem(LEGACY_SCENARIO_KEY);
      } catch {
        // ignore invalid legacy JSON
      }
    }

    return {
      version: 1,
      quizzes: parsed.quizzes ?? {},
      flashcards: parsed.flashcards ?? {},
      reflections: parsed.reflections ?? {},
      completedChecklists: parsed.completedChecklists ?? {},
      scenarios,
    };
  } catch {
    return emptyState();
  }
}

export function saveProgress(state: ProgressState): void {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent('sdlc-progress-updated', { detail: state }));
}

export function recordQuizResult(
  quizId: string,
  score: number,
  total: number,
  passThreshold = 0.8
): QuizRecord {
  const state = loadProgress();
  const prev = state.quizzes[quizId];
  const bestScore = Math.max(prev?.bestScore ?? 0, score);
  const passed = bestScore / total >= passThreshold;
  const record: QuizRecord = {
    bestScore,
    lastScore: score,
    total,
    attempts: (prev?.attempts ?? 0) + 1,
    passed,
    updatedAt: new Date().toISOString(),
  };
  state.quizzes[quizId] = record;
  saveProgress(state);
  return record;
}

export function recordFlashcardReview(
  cardId: string,
  rating: 'again' | 'good' | 'easy'
): FlashcardRecord {
  const state = loadProgress();
  const prev = state.flashcards[cardId];
  let nextBox = prev?.box ?? 0;

  if (rating === 'again') {
    nextBox = 0;
  } else if (rating === 'good') {
    nextBox = Math.min(SRS_INTERVALS_DAYS.length - 1, nextBox + 1);
  } else {
    nextBox = Math.min(SRS_INTERVALS_DAYS.length - 1, nextBox + 2);
  }

  const days = SRS_INTERVALS_DAYS[nextBox];
  const record: FlashcardRecord = {
    box: nextBox,
    nextReviewAt: days === 0 ? Date.now() : Date.now() + days * DAY_MS,
    reviews: (prev?.reviews ?? 0) + 1,
    lastResult: rating,
  };
  state.flashcards[cardId] = record;
  saveProgress(state);
  return record;
}

export function saveReflection(lessonId: string, text: string): void {
  const state = loadProgress();
  state.reflections[lessonId] = {
    text,
    updatedAt: new Date().toISOString(),
  };
  saveProgress(state);
}

export function toggleChecklistItem(listId: string, itemId: string, checked: boolean): string[] {
  const state = loadProgress();
  const current = new Set(state.completedChecklists[listId] ?? []);
  if (checked) {
    current.add(itemId);
  } else {
    current.delete(itemId);
  }
  const arr = Array.from(current);
  state.completedChecklists[listId] = arr;
  saveProgress(state);
  return arr;
}

export function saveScenarioChoice(scenarioId: string, choiceIdx: number): void {
  const state = loadProgress();
  state.scenarios[scenarioId] = choiceIdx;
  saveProgress(state);
}

export function resetScenarioChoices(): void {
  const state = loadProgress();
  state.scenarios = {};
  saveProgress(state);
}

export function exportProgressJson(): string {
  return JSON.stringify(loadProgress(), null, 2);
}

export function importProgressJson(raw: string): { ok: boolean; error?: string } {
  try {
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (!parsed || typeof parsed !== 'object' || parsed.version !== 1) {
      return { ok: false, error: 'Định dạng file không hợp lệ (thiếu version: 1).' };
    }
    const merged: ProgressState = {
      version: 1,
      quizzes: parsed.quizzes && typeof parsed.quizzes === 'object' ? parsed.quizzes : {},
      flashcards: parsed.flashcards && typeof parsed.flashcards === 'object' ? parsed.flashcards : {},
      reflections: parsed.reflections && typeof parsed.reflections === 'object' ? parsed.reflections : {},
      completedChecklists:
        parsed.completedChecklists && typeof parsed.completedChecklists === 'object'
          ? parsed.completedChecklists
          : {},
      scenarios: parsed.scenarios && typeof parsed.scenarios === 'object' ? parsed.scenarios : {},
    };
    saveProgress(merged);
    return { ok: true };
  } catch {
    return { ok: false, error: 'Không đọc được JSON. Vui lòng chọn đúng file đã xuất.' };
  }
}

export function resetProgress(): void {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(LEGACY_SCENARIO_KEY);
  }
  saveProgress(emptyState());
}
