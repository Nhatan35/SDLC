import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMermaid from './src/plugins/remark-mermaid.mjs';

export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMermaid],
  },
  integrations: [
    starlight({
      title: 'SDLC Academy',
      description: 'Khóa tự học SDLC bài bản, nắm vững kiến thức theo chuẩn quốc tế (SWEBOK, ISTQB, BABOK, Scrum Guide).',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Tiếng Việt',
          lang: 'vi',
        },
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/overrides/Footer.astro',
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      sidebar: [
        {
          label: 'Bắt đầu học',
          items: [
            { label: 'Lộ trình & Phương pháp học', slug: 'lo-trinh-hoc' },
            { label: 'Bảng theo dõi thành thạo', slug: 'bang-tien-do' },
            { label: 'Kiểm tra đầu vào (Diagnostic)', slug: 'kiem-tra-dau-vao' },
            { label: 'Ôn tập Flashcard (SRS)', slug: 'on-tap-flashcard' },
          ],
        },
        {
          label: 'Cấp 1: Nền tảng SDLC',
          items: [
            { label: 'M0.1 SDLC là gì & Vì sao cần?', slug: 'cap-1-nen-tang/m0-tong-quan-sdlc' },
            { label: 'M0.2 Các vai trò & Khung ISO 12207', slug: 'cap-1-nen-tang/m0-vai-tro-va-chuan' },
            { label: 'M1.1 Mô hình tuần tự & lặp (Waterfall, V-Model, Spiral)', slug: 'cap-1-nen-tang/m1-mo-hinh-truyen-thong' },
            { label: 'M1.2 Agile, Scrum, Kanban, DevOps & Hybrid', slug: 'cap-1-nen-tang/m1-agile-va-hien-dai' },
            { label: 'M1.3 Thực hành: Chọn mô hình theo tình huống', slug: 'cap-1-nen-tang/m1-chon-mo-hinh' },
            { label: 'Kiểm tra cuối Cấp 1', slug: 'cap-1-nen-tang/kiem-tra-cap-1', badge: { text: '80% đạt', variant: 'tip' } },
          ],
        },
        {
          label: 'Agile & Scrum Chuyên sâu',
          items: [
            { label: 'AS.0 Roadmap to Value & 5 Cấp lập kế hoạch (Agile For Dummies)', slug: 'agile-scrum/as0-lo-trinh-gia-tri-agile' },
            { label: 'AS.1 12 Nguyên tắc Agile, Empiricism & 5 Giá trị Scrum', slug: 'agile-scrum/as1-tuyen-ngon-va-tu-duy' },
            { label: 'AS.2 Vận hành Scrum chi tiết (3-5-3, DoR & DoD)', slug: 'agile-scrum/as2-van-hanh-scrum-chi-tiet' },
            { label: 'AS.3 User Story (INVEST), Splitting, Mapping & Ước lượng', slug: 'agile-scrum/as3-backlog-user-story-uoc-luong' },
            { label: 'AS.4 Phòng thực hành: 12 Tình huống & Anti-patterns', slug: 'agile-scrum/as4-tinh-huong-thuc-chien', badge: { text: 'Thực chiến', variant: 'note' } },
            { label: 'AS.5 Lean (7 Lãng phí), Scaling Đa đội & Văn hóa Agile', slug: 'agile-scrum/as5-lean-scaling-van-hoa' },
            { label: 'Bài thi Tình huống Agile & Scrum (20 câu)', slug: 'agile-scrum/kiem-tra-agile-scrum', badge: { text: 'PSM I', variant: 'tip' } },
          ],
        },
        {
          label: 'Cấp 2: 7 Giai đoạn SDLC chi tiết',
          items: [
            { label: 'M2 Lập kế hoạch, Khả thi TELOS, PERT & Rủi ro', slug: 'cap-2-giai-doan/m2-lap-ke-hoach-kha-thi' },
            { label: 'M3–M4 Khơi gợi, Yêu cầu FR/NFR (ISO 25010) & SRS', slug: 'cap-2-giai-doan/m3-4-yeu-cau-va-srs' },
            { label: 'M5–M6 Mô hình hóa (BPMN, UML, ERD) & Thiết kế', slug: 'cap-2-giai-doan/m5-6-mo-hinh-hoa-va-thiet-ke' },
            { label: 'M7 Phát triển, Git Branching, Code Review & CI/CD', slug: 'cap-2-giai-doan/m7-phat-trien-va-qlcm' },
            { label: 'M8 Kiểm thử Phần mềm Chuyên sâu (ISTQB v4.0)', slug: 'cap-2-giai-doan/m8-kiem-thu-phan-mem', badge: { text: 'ISTQB', variant: 'tip' } },
            { label: 'M9–M10 Triển khai, Bảo trì, ITIL & Ngừng hệ thống', slug: 'cap-2-giai-doan/m9-10-trien-khai-van-hanh' },
            { label: 'Kiểm tra cuối Cấp 2 (20 câu tổng hợp)', slug: 'cap-2-giai-doan/kiem-tra-cap-2', badge: { text: '80% đạt', variant: 'tip' } },
          ],
        },
        {
          label: 'Dự án mô phỏng xuyên suốt',
          items: [
            { label: 'Tổng quan: Hệ thống Quản lý Thư viện', slug: 'du-an-mo-phong/tong-quan-thu-vien' },
            { label: 'Bài tập Cấp 1: Chọn mô hình & RACI', slug: 'du-an-mo-phong/bai-tap-cap-1' },
            { label: 'Bài tập Agile & Thử thách Tìm lỗi (Spot-the-Flaw)', slug: 'du-an-mo-phong/bai-tap-agile-scrum' },
            { label: 'Bài tập Cấp 2: NFR, ISTQB BVA, Go-Live & Bảo trì', slug: 'du-an-mo-phong/bai-tap-cap-2' },
          ],
        },
        {
          label: 'Tra cứu & Tài liệu chuẩn',
          items: [
            { label: 'Thư viện Mẫu tài liệu (Copy dùng ngay)', slug: 'tra-cuu/thu-vien-mau', badge: { text: '8 mẫu', variant: 'success' } },
            { label: 'Từ điển thuật ngữ Anh – Việt', slug: 'tra-cuu/thuat-ngu' },
            { label: 'Sách & Chuẩn tham khảo', slug: 'tra-cuu/tai-lieu-tham-khao' },
            { label: 'Lộ trình mở rộng nâng cao', slug: 'tra-cuu/lo-trinh-mo-rong' },
          ],
        },
      ],
    }),
  ],
});
