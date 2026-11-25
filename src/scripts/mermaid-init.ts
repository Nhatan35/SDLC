function getTheme(): 'dark' | 'default' {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'default';
}

async function renderMermaidDiagrams() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('.mermaid-wrapper pre.mermaid'));
  if (nodes.length === 0) return;

  const { default: mermaid } = await import('mermaid');

  mermaid.initialize({
    startOnLoad: false,
    theme: getTheme(),
    securityLevel: 'loose',
    fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
    },
  });

  for (let i = 0; i < nodes.length; i++) {
    const el = nodes[i];
    if (!el.dataset.mermaidSrc) {
      el.dataset.mermaidSrc = el.textContent?.trim() ?? '';
    }
    const code = el.dataset.mermaidSrc;
    if (!code) continue;

    try {
      const id = `mermaid-svg-${i}-${Date.now()}`;
      const { svg } = await mermaid.render(id, code);
      el.innerHTML = svg;
      el.classList.add('mermaid-rendered');
    } catch (err) {
      console.error('Mermaid render error:', err);
    }
  }
}

if (document.querySelector('.mermaid-wrapper pre.mermaid')) {
  renderMermaidDiagrams();

  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === 'attributes' && m.attributeName === 'data-theme') {
        renderMermaidDiagrams();
        break;
      }
    }
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
}
