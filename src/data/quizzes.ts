export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic?: string;
  moduleLink?: string;
  source?: string;
}

export interface QuizDefinition {
  id: string;
  title: string;
  description: string;
  passThreshold: number;
  mode?: 'mastery' | 'diagnostic';
  questions: QuizQuestion[];
}

export const QUIZZES: Record<string, QuizDefinition> = {
  diagnostic: {
    id: 'diagnostic',
    title: 'Kiểm tra đầu vào (Diagnostic Test – 12 câu)',
    description:
      'Đánh giá nhanh kiến thức hiện tại của bạn về nền tảng SDLC, vai trò, và các mô hình phát triển để xác định module cần học kỹ.',
    passThreshold: 0.75,
    mode: 'diagnostic',
    questions: [
      {
        id: 'diag-1',
        question: 'Sự khác biệt cốt lõi giữa SDLC và PMLC (Project Management Life Cycle) là gì?',
        options: [
          'SDLC chỉ dành cho lập trình viên, còn PMLC chỉ dành cho khách hàng.',
          'SDLC tập trung vào quy trình kỹ thuật tạo ra và duy trì phần mềm; PMLC tập trung vào quản lý phạm vi, tiến độ, chi phí và rủi ro của dự án.',
          'SDLC là tên gọi cũ của PMLC trước khi Agile xuất hiện.',
          'PMLC chỉ áp dụng cho dự án phần cứng, không áp dụng cho phần mềm.',
        ],
        correctIndex: 1,
        explanation:
          'SDLC trả lời cách tạo ra và vận hành sản phẩm phần mềm; PMLC trả lời cách quản lý dự án (phạm vi, tiến độ, ngân sách, nhân lực, rủi ro) để giao sản phẩm đó.',
        topic: 'M0.1 Tổng quan SDLC',
        moduleLink: '/cap-1-nen-tang/m0-tong-quan-sdlc/',
      },
      {
        id: 'diag-2',
        question: 'Phát biểu nào mô tả ĐÚNG về Verification (Xác minh) và Validation (Thẩm định)?',
        options: [
          'Verification kiểm tra sản phẩm có đúng nhu cầu người dùng không; Validation kiểm tra code có biên dịch được không.',
          'Hai thuật ngữ hoàn toàn đồng nghĩa trong kiểm thử phần mềm.',
          'Verification trả lời "Ta có đang xây sản phẩm đúng theo đặc tả không?"; Validation trả lời "Ta có đang xây đúng sản phẩm người dùng cần không?".',
          'Verification chỉ làm sau khi go-live; Validation chỉ làm trước khi viết code.',
        ],
        correctIndex: 2,
        explanation:
          'Theo ISO 12207 và ISTQB CTFL v4.0: Verification = "Building the product right" (đối chiếu với đặc tả); Validation = "Building the right product" (đối chiếu với nhu cầu thực tế của người dùng).',
        topic: 'M0.1 Tổng quan SDLC',
        moduleLink: '/cap-1-nen-tang/m0-tong-quan-sdlc/',
      },
      {
        id: 'diag-3',
        question: 'Trong ma trận RACI, chữ "A" (Accountable) tuân theo quy tắc bắt buộc nào?',
        options: [
          'Mỗi đầu việc phải có ít nhất 2 người mang vai trò A để dự phòng.',
          'Mỗi đầu việc chỉ có duy nhất 1 người mang vai trò A.',
          'Người mang vai trò A bắt buộc phải là người trực tiếp viết code.',
          'Có thể để trống vai trò A nếu tất cả thành viên đều đồng thuận.',
        ],
        correctIndex: 1,
        explanation:
          'Mỗi công việc chỉ có DUY NHẤT 1 người Accountable (chịu trách nhiệm giải trình cuối cùng và có quyền phê duyệt) để tránh đùn đẩy hoặc chồng chéo trách nhiệm.',
        topic: 'M0.2 Vai trò & Chuẩn ISO 12207',
        moduleLink: '/cap-1-nen-tang/m0-vai-tro-va-chuan/',
      },
      {
        id: 'diag-4',
        question: 'Phát biểu nào ĐÚNG về QA (Quality Assurance) và QC (Quality Control)?',
        options: [
          'QA hướng quy trình nhằm phòng ngừa lỗi; QC hướng sản phẩm nhằm phát hiện lỗi.',
          'QA là người chạy test case, còn QC là người quản lý tiến độ.',
          'QA chỉ tồn tại trong Waterfall, còn QC chỉ tồn tại trong Agile.',
          'QA và QC đều chỉ tập trung vào kiểm thử tự động.',
        ],
        correctIndex: 0,
        explanation:
          'QA tập trung cải tiến và tuân thủ quy trình để ngăn lỗi xảy ra ngay từ đầu; QC tập trung kiểm tra sản phẩm đã tạo ra để phát hiện và sửa lỗi.',
        topic: 'M0.2 Vai trò & Chuẩn ISO 12207',
        moduleLink: '/cap-1-nen-tang/m0-vai-tro-va-chuan/',
      },
      {
        id: 'diag-5',
        question: 'Điểm khác biệt nổi bật nhất của V-Model so với Waterfall cổ điển là gì?',
        options: [
          'V-Model bỏ qua hoàn toàn giai đoạn đặc tả yêu cầu.',
          'V-Model gắn trực tiếp mỗi giai đoạn đặc tả/thiết kế ở nhánh trái với một cấp kiểm thử tương ứng ở nhánh phải.',
          'V-Model không cần bất kỳ tài liệu nào trước khi lập trình.',
          'V-Model tự động triển khai mã nguồn lên Production mỗi ngày.',
        ],
        correctIndex: 1,
        explanation:
          'V-Model liên kết Yêu cầu ↔ Acceptance Test, Thiết kế hệ thống ↔ System Test, Thiết kế kiến trúc ↔ Integration Test, Thiết kế chi tiết ↔ Unit Test, giúp chuẩn bị kiểm thử sớm.',
        topic: 'M1.1 Mô hình truyền thống',
        moduleLink: '/cap-1-nen-tang/m1-mo-hinh-truyen-thong/',
      },
      {
        id: 'diag-6',
        question: 'Đặc trưng cốt lõi của mô hình Spiral (Xoắn ốc) của Barry Boehm là gì?',
        options: [
          'Cố định toàn bộ phạm vi từ ngày đầu và cấm thay đổi.',
          'Đặt phân tích và giảm thiểu rủi ro (Risk-driven) làm trung tâm ở mỗi vòng xoắn.',
          'Không cần có kế hoạch cho vòng lặp tiếp theo.',
          'Chỉ áp dụng cho các dự án nhỏ dưới 2 tuần.',
        ],
        correctIndex: 1,
        explanation:
          'Spiral là mô hình hướng rủi ro (risk-driven): mỗi vòng đều có góc phần tư riêng để đánh giá phương án, nhận diện rủi ro và xây dựng nguyên mẫu nhằm triệt tiêu rủi ro lớn nhất.',
        topic: 'M1.1 Mô hình truyền thống',
        moduleLink: '/cap-1-nen-tang/m1-mo-hinh-truyen-thong/',
      },
      {
        id: 'diag-7',
        question: 'Điểm khác biệt giữa Incremental (Gia tăng) và Iterative (Lặp) là gì?',
        options: [
          'Incremental giao từng phần tính năng hoàn chỉnh theo từng đợt; Iterative tinh chỉnh dần toàn bộ sản phẩm từ bản sơ bộ đến hoàn thiện.',
          'Incremental không cần kiểm thử, còn Iterative mới cần kiểm thử.',
          'Iterative chỉ dùng cho phần cứng, Incremental dùng cho phần mềm.',
          'Hai khái niệm hoàn toàn giống nhau.',
        ],
        correctIndex: 0,
        explanation:
          'Incremental mở rộng dần phạm vi chức năng (thêm miếng ghép hoàn chỉnh); Iterative nâng dần độ hoàn thiện/chất lượng của sản phẩm qua nhiều vòng phản hồi.',
        topic: 'M1.1 Mô hình truyền thống',
        moduleLink: '/cap-1-nen-tang/m1-mo-hinh-truyen-thong/',
      },
      {
        id: 'diag-8',
        question: 'Theo Tuyên ngôn Agile (2001), cách hiểu nào sau đây là ĐÚNG về "Phần mềm chạy được hơn tài liệu đầy đủ"?',
        options: [
          'Agile cấm viết tài liệu thiết kế hay hướng dẫn sử dụng.',
          'Tài liệu vẫn có giá trị, nhưng ưu tiên tạo ra phần mềm hoạt động mang lại giá trị thay vì viết tài liệu nặng nề không dùng đến.',
          'Chỉ cần viết tài liệu sau khi dự án đã đóng hoàn toàn.',
          'Tài liệu chỉ do khách hàng tự viết.',
        ],
        correctIndex: 1,
        explanation:
          'Tuyên ngôn Agile ghi rõ: "Trong khi vẫn có giá trị ở các mục bên phải, chúng tôi đánh giá cao hơn các mục bên trái". Tài liệu vừa đủ (just enough) vẫn rất cần thiết.',
        topic: 'M1.2 Agile & Hiện đại',
        moduleLink: '/cap-1-nen-tang/m1-agile-va-hien-dai/',
      },
      {
        id: 'diag-9',
        question: 'Trong Scrum Guide 2020, sự kiện nào dùng để nhóm Scrum kiểm tra quy trình và cải tiến cách làm việc nội bộ?',
        options: ['Daily Scrum', 'Sprint Planning', 'Sprint Review', 'Sprint Retrospective'],
        correctIndex: 3,
        explanation:
          'Sprint Review kiểm tra sản phẩm (Increment) cùng các bên liên quan; Sprint Retrospective kiểm tra con người, quy trình, công cụ để cải tiến hiệu quả cho Sprint tiếp theo.',
        topic: 'M1.2 Agile & Hiện đại',
        moduleLink: '/cap-1-nen-tang/m1-agile-va-hien-dai/',
      },
      {
        id: 'diag-10',
        question: 'Mục đích chính của WIP Limit (giới hạn công việc đang dở dang) trong Kanban là gì?',
        options: [
          'Buộc mỗi thành viên làm ít giờ hơn.',
          'Tránh làm dàn trải quá nhiều việc cùng lúc, bộc lộ nút thắt cổ chai và rút ngắn thời gian hoàn thành mỗi đầu việc.',
          'Cố định thời gian mỗi Sprint đúng 2 tuần.',
          'Thay thế hoàn toàn vai trò kiểm thử.',
        ],
        correctIndex: 1,
        explanation:
          'WIP Limit giúp đội "ngừng bắt đầu thêm việc mới, tập trung hoàn thành việc đang làm" (Stop starting, start finishing), làm lộ điểm nghẽn và giảm Lead Time.',
        topic: 'M1.2 Agile & Hiện đại',
        moduleLink: '/cap-1-nen-tang/m1-agile-va-hien-dai/',
      },
      {
        id: 'diag-11',
        question: 'Một nhóm hỗ trợ kỹ thuật tiếp nhận yêu cầu sửa lỗi và xử lý sự cố liên tục hằng ngày, độ ưu tiên thay đổi từng giờ. Mô hình nào phù hợp nhất?',
        options: ['Waterfall', 'V-Model', 'Kanban', 'Spiral'],
        correctIndex: 2,
        explanation:
          'Kanban không ép đóng khung phạm vi vào Sprint cố định mà quản lý luồng công việc đến liên tục bằng bảng trạng thái và WIP Limit, rất phù hợp với vận hành/hỗ trợ.',
        topic: 'M1.3 Chọn mô hình SDLC',
        moduleLink: '/cap-1-nen-tang/m1-chon-mo-hinh/',
      },
      {
        id: 'diag-12',
        question: 'Dự án xây dựng ứng dụng khởi nghiệp hoàn toàn mới, yêu cầu còn mơ hồ, cần tung bản đầu tiên trong 6 tuần để thử phản ứng thị trường. Mô hình nào phù hợp nhất?',
        options: [
          'Waterfall thuần túy',
          'Agile (Scrum kết hợp Prototyping/Incremental)',
          'V-Model cứng',
          'Không cần mô hình nào, cứ lập trình tự do',
        ],
        correctIndex: 1,
        explanation:
          'Yêu cầu chưa rõ và cần phản hồi thị trường sớm là tình huống điển hình cho Agile (Scrum/Incremental) kết hợp nguyên mẫu để học nhanh và điều chỉnh kịp thời.',
        topic: 'M1.3 Chọn mô hình SDLC',
        moduleLink: '/cap-1-nen-tang/m1-chon-mo-hinh/',
      },
    ],
  },

  'm0-1': {
    id: 'm0-1',
    title: 'Quiz M0.1: Tổng quan SDLC & Chi phí thay đổi',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M0.1.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm01-q1',
        question: 'Mục tiêu cốt lõi của việc áp dụng SDLC trong phát triển phần mềm là gì?',
        options: [
          'Tăng tối đa số lượng tài liệu để chứng minh đội ngũ làm việc chăm chỉ.',
          'Tạo ra phần mềm chất lượng cao đáp ứng đúng nhu cầu người dùng trong phạm vi thời gian và chi phí kiểm soát được.',
          'Loại bỏ hoàn toàn nhu cầu giao tiếp giữa đội kỹ thuật và khách hàng.',
          'Đảm bảo mã nguồn không bao giờ cần bảo trì sau khi ra mắt.',
        ],
        correctIndex: 1,
        explanation:
          'SDLC cung cấp quy trình có cấu trúc giúp giảm rủi ro, kiểm soát chất lượng, chi phí và tiến độ để bàn giao phần mềm đúng giá trị nghiệp vụ.',
        source: 'Sommerville Ch. 2; SWEBOK v4',
      },
      {
        id: 'm01-q2',
        question: 'Một công ty phát triển sản phẩm Quản lý Thư viện: năm 1 ra bản v1.0, năm 2 làm dự án nâng cấp cổng tra cứu di động v2.0, năm 5 thay thế bằng nền tảng mới. Mối quan hệ giữa Product Life Cycle, PMLC và SDLC ở đây là gì?',
        options: [
          'Chỉ có 1 SDLC duy nhất, không có PMLC.',
          '1 Product Life Cycle bao trùm nhiều dự án (PMLC) và nhiều chu kỳ phát triển/nâng cấp (SDLC).',
          'Mỗi giai đoạn của SDLC là một Product Life Cycle riêng biệt.',
          'PMLC dài hơn Product Life Cycle vì dự án vẫn chạy sau khi ngừng sản phẩm.',
        ],
        correctIndex: 1,
        explanation:
          'Vòng đời sản phẩm (Product Life Cycle) có phạm vi rộng nhất, kéo dài từ ý tưởng đến khi khai tử sản phẩm, bên trong chứa nhiều dự án (PMLC) và nhiều vòng lặp SDLC.',
        source: 'PMBOK Guide; SWEBOK v4',
      },
      {
        id: 'm01-q3',
        question: 'Vì sao một lỗi xuất phát từ hiểu sai yêu cầu nếu để đến giai đoạn Production mới phát hiện lại tốn kém hơn gấp nhiều lần so với phát hiện ở giai đoạn Phân tích yêu cầu?',
        options: [
          'Vì lập trình viên ở giai đoạn Production có mức lương cao hơn.',
          'Vì phải sửa dây chuyền cả tài liệu, thiết kế, mã nguồn, bộ test, phát hành lại và khắc phục dữ liệu hoặc uy tín đã bị ảnh hưởng.',
          'Vì các công cụ kiểm thử không chạy được trên môi trường Production.',
          'Vì luật quy định mọi lỗi Production phải viết lại toàn bộ hệ thống.',
        ],
        correctIndex: 1,
        explanation:
          'Quy luật Cost of Change cho thấy lỗi ở giai đoạn đầu nếu không bị chặn sẽ lan truyền sang mọi đầu ra phía sau (thiết kế, code, test, dữ liệu thật), làm chi phí khắc phục tăng theo cấp số nhân.',
        source: 'Wiegers – Software Requirements; ISTQB CTFL v4.0',
      },
      {
        id: 'm01-q4',
        question: 'Đội kiểm thử kiểm tra kỹ và xác nhận chức năng tính tiền phạt trễ hạn chạy đúng 100% theo công thức trong tài liệu SRS. Tuy nhiên, khi đưa cho thủ thư dùng thử, thủ thư bảo công thức đó sai với quy chế thư viện. Tình huống này cho thấy:',
        options: [
          'Đạt cả Verification lẫn Validation.',
          'Đạt Verification nhưng thất bại Validation.',
          'Thất bại Verification nhưng đạt Validation.',
          'Không liên quan đến Verification hay Validation.',
        ],
        correctIndex: 1,
        explanation:
          'Phần mềm chạy đúng đặc tả SRS → đạt Verification ("xây đúng cách"). Nhưng đặc tả SRS lại sai với nhu cầu nghiệp vụ thực tế → thất bại Validation ("xây không đúng thứ cần").',
        source: 'ISO/IEC/IEEE 12207; ISTQB CTFL v4.0',
      },
      {
        id: 'm01-q5',
        question: 'Tiêu chí nào sau đây là ví dụ tốt về Exit Criteria (tiêu chí đầu ra) của giai đoạn Phân tích yêu cầu?',
        options: [
          'Đội BA cảm thấy đã hiểu sơ bộ ý tưởng của khách hàng.',
          'Tài liệu SRS đã hoàn tất rà soát chéo, không còn mục TBD quan trọng, đã được đại diện nghiệp vụ và trưởng nhóm kỹ thuật ký duyệt thành baseline.',
          'Lập trình viên đã bắt đầu viết giao diện đăng nhập.',
          'Dự án đã tiêu hết 20% ngân sách.',
        ],
        correctIndex: 1,
        explanation:
          'Exit Criteria phải cụ thể, đo lường và kiểm chứng được (đã review, hết điểm mơ hồ nghiêm trọng, được ký duyệt thành baseline) thay vì dựa vào cảm tính hoặc thời gian trôi qua.',
        source: 'ISTQB CTFL v4.0; BABOK v3',
      },
      {
        id: 'm01-q6',
        question: 'Khái niệm "Shift-Left" trong SDLC khuyến nghị điều gì?',
        options: [
          'Đẩy toàn bộ công việc kiểm thử về cuối dự án trước ngày go-live.',
          'Đưa hoạt động rà soát, thẩm định yêu cầu và kiểm thử vào sớm ngay từ đầu vòng đời.',
          'Chuyển trách nhiệm lập trình từ đội Dev sang đội BA.',
          'Chỉ làm việc với các yêu cầu ưu tiên thấp trước.',
        ],
        correctIndex: 1,
        explanation:
          'Shift-Left dịch chuyển hoạt động phát hiện lỗi sang bên trái trên trục thời gian SDLC (kiểm tra tĩnh yêu cầu, rà soát thiết kế, viết test sớm) để giảm chi phí sửa lỗi.',
        source: 'ISTQB CTFL v4.0 Ch. 2',
      },
    ],
  },

  'm0-2': {
    id: 'm0-2',
    title: 'Quiz M0.2: Vai trò, RACI & Khung ISO/IEC/IEEE 12207',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M0.2.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm02-q1',
        question: 'Trong một dự án phần mềm, ai là người chịu trách nhiệm chính cho việc khơi gợi, phân tích, mô hình hóa và làm rõ yêu cầu nghiệp vụ giữa các bên liên quan và đội kỹ thuật?',
        options: [
          'DevOps Engineer',
          'Business Analyst (BA)',
          'Database Administrator',
          'Release Manager',
        ],
        correctIndex: 1,
        explanation:
          'Theo BABOK v3, BA là cầu nối chuyên trách việc hiểu nhu cầu nghiệp vụ, phân tích, đặc tả và thẩm định yêu cầu để giải pháp kỹ thuật giải quyết đúng bài toán.',
        source: 'BABOK v3',
      },
      {
        id: 'm02-q2',
        question: 'Trong bảng RACI cho đầu việc "Phê duyệt tài liệu đặc tả yêu cầu (SRS)", dòng nào dưới đây VI PHẠM quy tắc RACI?',
        options: [
          'BA: R | PO: A | Tech Lead: C | QA: C | Ban Giám đốc: I',
          'BA: R | PO: A | Tech Lead: I | QA: C',
          'BA: R | PO: A | PM: A | Tech Lead: C | QA: I',
          'BA: R | Sponsor: A | Dev Lead: C | QA Lead: C',
        ],
        correctIndex: 2,
        explanation:
          'Phương án C có 2 người cùng là A (PO và PM). Quy tắc vàng của RACI là mỗi công việc chỉ có DUY NHẤT 1 người Accountable để đảm bảo trách nhiệm giải trình rõ ràng.',
        source: 'PMBOK; BABOK v3',
      },
      {
        id: 'm02-q3',
        question: 'Nhóm quy trình nào trong chuẩn ISO/IEC/IEEE 12207:2017 bao gồm các hoạt động trực tiếp như định nghĩa yêu cầu, thiết kế kiến trúc, cài đặt, tích hợp, kiểm chứng, triển khai, vận hành và ngừng hệ thống?',
        options: [
          'Agreement Processes (Quy trình thỏa thuận)',
          'Organizational Project-Enabling Processes (Quy trình hỗ trợ cấp tổ chức)',
          'Technical Management Processes (Quy trình quản lý kỹ thuật)',
          'Technical Processes (Quy trình kỹ thuật)',
        ],
        correctIndex: 3,
        explanation:
          'ISO/IEC/IEEE 12207:2017 chia 30 quy trình thành 4 nhóm; trong đó Technical Processes chứa toàn bộ các quy trình kỹ thuật trực tiếp xây dựng, vận hành và thải loại phần mềm.',
        source: 'ISO/IEC/IEEE 12207:2017',
      },
      {
        id: 'm02-q4',
        question: 'Hoạt động nào sau đây thuộc QA (Quality Assurance) thay vì QC (Quality Control)?',
        options: [
          'Thực thi 120 test case trên màn hình mượn sách và ghi nhận 8 lỗi.',
          'Xây dựng checklist rà soát tài liệu SRS và quy định bắt buộc 2 lập trình viên duyệt code trước khi gộp nhánh.',
          'Kiểm thử tải hệ thống với 500 người dùng đồng thời để tìm lỗi chậm.',
          'Chạy kiểm thử hồi quy sau khi sửa một lỗi tính tiền phạt.',
        ],
        correctIndex: 1,
        explanation:
          'Xây dựng checklist và chuẩn hóa quy trình rà soát là hoạt động hướng quy trình để PHÒNG NGỪA lỗi → QA. Các phương án còn lại đều là kiểm tra sản phẩm để PHÁT HIỆN lỗi → QC.',
        source: 'ISTQB CTFL v4.0; ISO 9000',
      },
      {
        id: 'm02-q5',
        question: 'Điểm khác nhau cốt lõi giữa Project Manager (PM) và Scrum Master là gì?',
        options: [
          'PM điều phối kế hoạch, ngân sách, phạm vi, hợp đồng của dự án; Scrum Master không quản lý con người theo kiểu ra lệnh mà huấn luyện Scrum, hỗ trợ đội tự quản và gỡ bỏ trở ngại.',
          'Scrum Master quyết định lương và thưởng của đội lập trình, còn PM thì không.',
          'PM chỉ làm việc với khách hàng, còn Scrum Master trực tiếp viết mã nguồn.',
          'Hai vai trò hoàn toàn giống nhau, chỉ đổi tên gọi.',
        ],
        correctIndex: 0,
        explanation:
          'Theo Scrum Guide 2020, Scrum Master là người lãnh đạo phục vụ (true leader who serves) tập trung vào hiệu quả Scrum và gỡ trở ngại, không phải người phân việc/kiểm soát theo kiểu quản lý dự án truyền thống.',
        source: 'Scrum Guide 2020; PMBOK',
      },
      {
        id: 'm02-q6',
        question: 'Vì sao chuẩn ISO/IEC/IEEE 12207 KHÔNG bắt buộc doanh nghiệp phải theo đúng một mô hình duy nhất như Waterfall?',
        options: [
          'Vì ISO 12207 chỉ áp dụng cho phần mềm nguồn mở.',
          'Vì ISO 12207 định nghĩa "những quy trình nào cần có" chứ không áp đặt thứ tự thực thi; tổ chức có thể tinh chỉnh (tailoring) để áp dụng cho Waterfall, Iterative hay Agile.',
          'Vì ISO 12207 chỉ bao gồm giai đoạn lập trình.',
          'Vì ISO 12207 đã ngừng sử dụng từ năm 2005.',
        ],
        correctIndex: 1,
        explanation:
          'ISO/IEC/IEEE 12207 là chuẩn khung quy trình trung lập về mô hình (model-agnostic) và có quy trình Tailoring để tổ chức tùy chỉnh theo mô hình SDLC thực tế.',
        source: 'ISO/IEC/IEEE 12207:2017',
      },
    ],
  },

  'm1-1': {
    id: 'm1-1',
    title: 'Quiz M1.1: Mô hình Tuần tự, V-Model, Gia tăng, Lặp, Xoắn ốc & Nguyên mẫu',
    description: 'Đạt tối thiểu 80% (6/7 câu) để hoàn thành M1.1.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm11-q1',
        question: 'Hạn chế nghiêm trọng nhất của mô hình Waterfall khi áp dụng cho dự án có yêu cầu dễ thay đổi là gì?',
        options: [
          'Không có tài liệu bàn giao giữa các giai đoạn.',
          'Khách hàng chỉ thấy phần mềm chạy được rất muộn ở cuối dự án, nên sai sót về yêu cầu bị phát hiện trễ với chi phí sửa cực lớn.',
          'Khó theo dõi mốc tiến độ và ngân sách.',
          'Đội phát triển không biết bắt đầu từ giai đoạn nào.',
        ],
        correctIndex: 1,
        explanation:
          'Waterfall có ưu điểm quản trị mốc và tài liệu rõ ràng, nhưng phản hồi thực tế từ phần mềm chạy được đến quá muộn, khiến rủi ro hiểu sai yêu cầu tích tụ tới cuối dự án.',
        source: 'Sommerville Ch. 2',
      },
      {
        id: 'm11-q2',
        question: 'Trong V-Model chuẩn, giai đoạn "Thiết kế kiến trúc / Thiết kế tổng thể" (Architectural / High-Level Design) ở nhánh trái tương ứng trực tiếp với cấp kiểm thử nào ở nhánh phải?',
        options: [
          'Component / Unit Testing (Kiểm thử đơn vị)',
          'Integration Testing (Kiểm thử tích hợp)',
          'User Acceptance Testing (UAT)',
          'Exploratory Testing (Kiểm thử khám phá)',
        ],
        correctIndex: 1,
        explanation:
          'Trong V-Model: Yêu cầu nghiệp vụ ↔ Acceptance Test; Đặc tả hệ thống ↔ System Test; Thiết kế kiến trúc/tổng thể ↔ Integration Test; Thiết kế chi tiết ↔ Unit Test.',
        source: 'ISTQB CTFL v4.0 Ch. 2',
      },
      {
        id: 'm11-q3',
        question: 'Đội dự án Thư viện chia phần mềm thành 3 đợt bàn giao: Đợt 1 xong hoàn chỉnh Tra cứu & Mượn/Trả; Đợt 2 bổ sung Đặt trước & Phạt quá hạn; Đợt 3 bổ sung Báo cáo thống kê. Mỗi đợt đều chạy được trên thực tế. Đây là mô hình gì?',
        options: [
          'Waterfall thuần',
          'Incremental (Gia tăng)',
          'Throwaway Prototyping',
          'Big Bang',
        ],
        correctIndex: 1,
        explanation:
          'Bàn giao hệ thống thành nhiều phần hoàn chỉnh theo từng đợt (increment), mỗi đợt bổ sung nhóm chức năng mới cho người dùng sử dụng sớm là đặc trưng của mô hình Incremental.',
        source: 'Sommerville Ch. 2; SWEBOK v4',
      },
      {
        id: 'm11-q4',
        question: 'Trong mô hình Spiral (Xoắn ốc), hoạt động đặc trưng nhất diễn ra ở góc phần tư thứ 2 của mỗi vòng lặp là gì?',
        options: [
          'Viết mã nguồn chính thức và đưa lên Production ngay.',
          'Đánh giá các phương án, nhận diện và giảm thiểu rủi ro (thường thông qua phân tích hoặc làm prototype).',
          'Đóng dự án và thanh lý hợp đồng.',
          'Đào tạo người dùng cuối.',
        ],
        correctIndex: 1,
        explanation:
          '4 góc phần tư của Spiral gồm: (1) Xác định mục tiêu & ràng buộc → (2) Đánh giá phương án & xử lý rủi ro → (3) Phát triển & kiểm chứng → (4) Lập kế hoạch vòng tiếp theo.',
        source: 'Boehm 1988; Sommerville Ch. 2',
      },
      {
        id: 'm11-q5',
        question: 'Phân biệt Throwaway Prototyping (Nguyên mẫu bỏ đi) và Evolutionary Prototyping (Nguyên mẫu tiến hóa):',
        options: [
          'Throwaway dùng để làm rõ yêu cầu rồi bỏ đi và xây hệ thống thật sạch từ đầu; Evolutionary dùng bản mẫu làm nền tảng và phát triển dần thành hệ thống thật.',
          'Throwaway luôn đắt hơn gấp 10 lần vì phải xây hạ tầng Production ngay từ đầu.',
          'Evolutionary không bao giờ cho người dùng xem trước khi bàn giao cuối cùng.',
          'Throwaway chỉ vẽ trên giấy, không được dùng công cụ thiết kế.',
        ],
        correctIndex: 0,
        explanation:
          'Throwaway prototype ưu tiên tốc độ để khám phá yêu cầu rồi vứt bỏ nhằm tránh mang nợ kỹ thuật vào hệ thống thật; Evolutionary prototype xây cẩn thận hơn để tiến hóa dần thành sản phẩm chính thức.',
        source: 'Sommerville Ch. 2; Wiegers',
      },
      {
        id: 'm11-q6',
        question: 'Điểm yếu chính khiến mô hình Spiral hiếm khi được dùng cho các dự án nhỏ, ngân sách thấp là gì?',
        options: [
          'Không hỗ trợ kiểm thử.',
          'Đòi hỏi chuyên gia đánh giá rủi ro dày dạn kinh nghiệm và chi phí quản trị từng vòng lặp khá cao.',
          'Không cho phép làm prototype.',
          'Chỉ chạy được với ngôn ngữ lập trình cũ.',
        ],
        correctIndex: 1,
        explanation:
          'Thành công của Spiral phụ thuộc lớn vào năng lực phân tích rủi ro; quy trình đánh giá lặp phức tạp tạo ra chi phí quản lý không tương xứng với dự án nhỏ, rủi ro thấp.',
        source: 'Sommerville Ch. 2; Pressman',
      },
      {
        id: 'm11-q7',
        question: 'Mô hình V-Model khắc phục được điểm yếu nào của Waterfall, và VẪN giữ lại điểm yếu nào của Waterfall?',
        options: [
          'Khắc phục việc chuẩn bị kiểm thử trễ; vẫn giữ điểm yếu là kém linh hoạt khi yêu cầu thay đổi giữa chừng.',
          'Khắc phục việc thiếu linh hoạt với thay đổi; vẫn giữ điểm yếu không có kiểm thử chấp nhận.',
          'Khắc phục hoàn toàn rủi ro chi phí; chỉ thiếu tài liệu.',
          'Không khắc phục được gì so với Waterfall.',
        ],
        correctIndex: 0,
        explanation:
          'V-Model giúp thiết kế kiểm thử sớm song song với phân tích/thiết kế, nhưng vẫn là mô hình tuần tự: phần mềm chạy được vẫn chỉ xuất hiện muộn và rất khó xoay chuyển nếu yêu cầu đổi lớn.',
        source: 'ISTQB CTFL v4.0 Ch. 2',
      },
    ],
  },

  'm1-2': {
    id: 'm1-2',
    title: 'Quiz M1.2: Agile, Scrum, Kanban, XP, DevOps & Hybrid',
    description: 'Đạt tối thiểu 80% (6/7 câu) để hoàn thành M1.2.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm12-q1',
        question: 'Cặp giá trị nào KHÔNG nằm trong 4 giá trị của Tuyên ngôn Agile (2001)?',
        options: [
          'Cá nhân và tương tác hơn quy trình và công cụ',
          'Phần mềm chạy được hơn tài liệu đầy đủ',
          'Tốc độ lập trình hơn chất lượng mã nguồn',
          'Phản hồi với thay đổi hơn bám sát kế hoạch',
        ],
        correctIndex: 2,
        explanation:
          'Agile KHÔNG đánh đổi chất lượng lấy tốc độ. Nguyên tắc số 9 của Agile Manifesto khẳng định: "Liên tục quan tâm tới sự xuất sắc về kỹ thuật và thiết kế tốt giúp nâng cao sự linh hoạt".',
        source: 'Agile Manifesto 2001',
      },
      {
        id: 'm12-q2',
        question: 'Theo Scrum Guide 2020, ai là người duy nhất chịu trách nhiệm sắp xếp thứ tự ưu tiên của Product Backlog?',
        options: [
          'Scrum Master',
          'Product Owner',
          'Tech Lead của nhóm Developers',
          'Project Manager',
        ],
        correctIndex: 1,
        explanation:
          'Product Owner là một cá nhân duy nhất (không phải hội đồng) chịu trách nhiệm quản lý và sắp xếp ưu tiên Product Backlog để tối đa hóa giá trị sản phẩm.',
        source: 'Scrum Guide 2020',
      },
      {
        id: 'm12-q3',
        question: 'Trong Scrum Guide 2020, mỗi Artifact đi kèm một Cam kết (Commitment) để tăng tính minh bạch. Ghép cặp nào dưới đây ĐÚNG?',
        options: [
          'Product Backlog → Sprint Goal; Sprint Backlog → Product Goal; Increment → Velocity',
          'Product Backlog → Product Goal; Sprint Backlog → Sprint Goal; Increment → Definition of Done',
          'Product Backlog → Contract; Sprint Backlog → Burndown Chart; Increment → Release Note',
          'Product Backlog → User Story; Sprint Backlog → Daily Scrum; Increment → UAT',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide 2020 quy định 3 cặp Artifact – Commitment: Product Backlog (Product Goal), Sprint Backlog (Sprint Goal), Increment (Definition of Done).',
        source: 'Scrum Guide 2020',
      },
      {
        id: 'm12-q4',
        question: 'Nhóm áp dụng bảng Kanban thấy cột "Đang kiểm thử (Testing)" đặt WIP Limit = 3 nhưng hiện đã đầy 3 thẻ, trong khi lập trình viên vừa code xong thẻ thứ 4. Theo đúng tinh thần Kanban, nhóm nên làm gì?',
        options: [
          'Cứ đẩy thẻ thứ 4 sang cột Testing và bỏ qua WIP Limit.',
          'Dừng nhận thêm việc mới vào Testing, hỗ trợ gỡ tắc nghẽn ở cột Testing (ví dụ viết test hỗ trợ, sửa bug ưu tiên) trước khi kéo việc mới.',
          'Tăng WIP Limit lên 10 để bảng nhìn thoáng hơn.',
          'Xóa bớt 1 thẻ đang test để lấy chỗ.',
        ],
        correctIndex: 1,
        explanation:
          'WIP Limit tồn tại để bộc lộ nút thắt cổ chai và thúc đẩy cả nhóm cùng giải quyết điểm nghẽn thay vì chất đống việc dở dang.',
        source: 'Kanban Guide; SWEBOK v4',
      },
      {
        id: 'm12-q5',
        question: 'Thực hành kỹ thuật nào sau đây là đặc trưng nổi bật của Extreme Programming (XP)?',
        options: [
          'Ký duyệt 5 cổng Phase Gate trước khi viết dòng code đầu tiên.',
          'TDD (Test-Driven Development), Pair Programming (Lập trình đôi), Refactoring liên tục và Continuous Integration.',
          'Tách biệt hoàn toàn đội phát triển và đội kiểm thử thành hai công ty khác nhau.',
          'Cấm thay đổi thiết kế sau tuần thứ 2.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum tập trung vào khung quản trị/phối hợp, còn XP bổ sung các thực hành kỹ thuật xuất sắc như TDD, Pair Programming, Simple Design, Refactoring và CI.',
        source: 'Sommerville Ch. 3; Kent Beck',
      },
      {
        id: 'm12-q6',
        question: 'DevOps giải quyết "bức tường ngăn cách" kinh điển nào trong SDLC truyền thống?',
        options: [
          'Giữa đội Marketing và đội Kế toán.',
          'Giữa đội Phát triển (muốn thay đổi nhanh) và đội Vận hành (muốn hệ thống ổn định, ngại thay đổi).',
          'Giữa khách hàng và nhà cung cấp thiết bị văn phòng.',
          'Giữa việc viết tiếng Anh và tiếng Việt trong tài liệu.',
        ],
        correctIndex: 1,
        explanation:
          'DevOps phá bỏ rào cản giữa Dev và Ops bằng chia sẻ trách nhiệm, tự động hóa build–test–deploy (CI/CD) và giám sát liên tục, giúp vừa phát hành nhanh vừa ổn định cao.',
        source: 'SWEBOK v4; The DevOps Handbook',
      },
      {
        id: 'm12-q7',
        question: 'Mô hình Hybrid (Lai) thường được thiết kế như thế nào để hiệu quả thay vì trở thành "Water-Scrum-Fall" kém hiệu quả?',
        options: [
          'Dùng Waterfall để cố định phạm vi/kiến trúc cấp cao và mốc bàn giao hợp đồng, kết hợp các Sprint Agile để xây dựng, demo sớm và kiểm thử liên tục bên trong từng giai đoạn.',
          'Làm Waterfall hoàn toàn nhưng đổi tên họp tuần thành Daily Scrum.',
          'Bỏ cả tài liệu lẫn Sprint Review để tiết kiệm thời gian.',
          'Giao toàn bộ kiểm thử cho người dùng cuối tự làm sau khi go-live.',
        ],
        correctIndex: 0,
        explanation:
          'Hybrid thực thụ kết hợp điểm mạnh hai phía: tính dự báo ở tầng quản trị/kiến trúc khung và vòng lặp phản hồi sớm + kiểm thử tích hợp liên tục ở tầng thực thi.',
        source: 'PMBOK; ISTQB CTFL v4.0',
      },
    ],
  },

  'm1-3': {
    id: 'm1-3',
    title: 'Quiz M1.3: Thực hành Chọn Mô hình SDLC theo Tình huống',
    description: 'Đạt tối thiểu 80% (5/6 câu) để chứng minh khả năng áp dụng vào tình huống thực tế.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm13-q1',
        question: 'Tình huống 1: Xây dựng phần mềm điều khiển thiết bị đo bức xạ y tế theo tiêu chuẩn an toàn nghiêm ngặt của cơ quan quản lý, yêu cầu đã chốt 100% theo quy chuẩn và bắt buộc truy vết đầy đủ giữa từng yêu cầu với từng cấp kiểm thử. Mô hình nào phù hợp nhất?',
        options: ['V-Model', 'Kanban thuần', 'Throwaway Prototyping không kiểm thử', 'Ad-hoc'],
        correctIndex: 0,
        explanation:
          'Yêu cầu ổn định cao + quy chuẩn an toàn nghiêm ngặt + đòi hỏi bằng chứng kiểm chứng ở mọi cấp độ kiểm thử là bài toán kinh điển của V-Model.',
      },
      {
        id: 'm13-q2',
        question: 'Tình huống 2: Một tập đoàn lớn muốn nghiên cứu xây dựng nền tảng lõi mới ứng dụng công nghệ AI chưa từng làm trước đây, ngân sách lớn, rủi ro kỹ thuật và pháp lý rất cao. Mô hình nào phù hợp nhất ở giai đoạn đầu?',
        options: ['Waterfall thuần', 'Spiral (Hướng rủi ro)', 'Kanban', 'Big Bang'],
        correctIndex: 1,
        explanation:
          'Dự án quy mô lớn với rủi ro kỹ thuật/pháp lý cao đòi hỏi đánh giá rủi ro có hệ thống và làm prototype kiểm chứng qua từng vòng trước khi cam kết đầu tư toàn phần → Spiral.',
      },
      {
        id: 'm13-q3',
        question: 'Tình huống 3: Một trường đại học muốn thay thế hệ thống quản lý thư viện cũ; ban lãnh đạo cần biết trước ngân sách trần và mốc bàn giao theo từng học kỳ, nhưng chi tiết giao diện và quy trình mượn sách điện tử cần thủ thư xem thử và điều chỉnh dần. Mô hình nào phù hợp nhất?',
        options: [
          'Waterfall đóng băng toàn bộ 18 tháng',
          'Hybrid (Lập kế hoạch mốc & kiến trúc khung + triển khai từng Increment theo Scrum)',
          'Chỉ dùng Kanban không cần kế hoạch mốc',
          'Spiral 5 năm',
        ],
        correctIndex: 1,
        explanation:
          'Cần mốc ngân sách/học kỳ rõ ràng (tính dự báo) nhưng chi tiết nghiệp vụ cần tinh chỉnh dựa trên phản hồi người dùng → Hybrid (Incremental + Scrum) là tối ưu.',
      },
      {
        id: 'm13-q4',
        question: 'Tình huống 4: Khách hàng có ý tưởng về một cổng tra cứu dịch vụ công nhưng bản thân họ chưa hình dung rõ giao diện, luồng điền biểu mẫu và cách hiển thị kết quả. Cách tiếp cận nào nên dùng trước khi khóa đặc tả?',
        options: [
          'Ép khách hàng ký SRS dài 200 trang ngay trong tuần đầu.',
          'Prototyping (làm nhanh bản mẫu tương tác để khách hàng trải nghiệm và chốt yêu cầu).',
          'Code thẳng hệ thống hoàn chỉnh rồi mới hỏi ý kiến.',
          'Dùng Waterfall để tránh khách hàng đổi ý.',
        ],
        correctIndex: 1,
        explanation:
          'Khi khách hàng khó diễn đạt yêu cầu bằng lời ("tôi thấy mới biết mình cần gì"), Prototyping giúp trực quan hóa nhanh để làm rõ yêu cầu trước khi đầu tư xây dựng thật.',
      },
      {
        id: 'm13-q5',
        question: 'Tình huống 5: Đội phát triển sản phẩm thương mại điện tử có 7 thành viên đa chức năng, PO làm việc sát sao hằng ngày, yêu cầu từ thị trường thay đổi mỗi tháng và muốn ra tính năng mới đều đặn mỗi 2 tuần. Mô hình nào phù hợp nhất?',
        options: ['Waterfall', 'V-Model', 'Scrum (kết hợp thực hành CI/CD DevOps)', 'Spiral'],
        correctIndex: 2,
        explanation:
          'Đội nhỏ đa chức năng, có PO đồng hành liên tục, yêu cầu biến động theo thị trường và cần nhịp phát hành đều đặn → Scrum + CI/CD là lựa chọn chuẩn mực.',
      },
      {
        id: 'm13-q6',
        question: 'Tình huống 6: Một nhóm gồm 4 kỹ sư chịu trách nhiệm vận hành, vá lỗi khẩn cấp và xử lý các yêu cầu chỉnh sửa báo cáo phát sinh đột xuất từ nhiều phòng ban. Vì sao Scrum thuần thường gây khó khăn hơn Kanban trong bối cảnh này?',
        options: [
          'Vì Scrum cấm sửa lỗi phần mềm.',
          'Vì Scrum giả định phạm vi Sprint Goal tương đối ổn định trong 1–4 tuần, trong khi công việc của nhóm này bị ngắt quãng liên tục theo mức độ khẩn cấp hằng ngày.',
          'Vì Kanban không cần bất kỳ kỹ sư nào.',
          'Vì Scrum chỉ dùng cho dự án trên 100 người.',
        ],
        correctIndex: 1,
        explanation:
          'Khi công việc mang tính phản ứng nhanh (reactive), phát sinh bất ngờ từng ngày, việc cố đóng gói vào Sprint 2 tuần sẽ liên tục bị vỡ kế hoạch. Kanban linh hoạt hơn nhiều.',
      },
    ],
  },

  'cap-1-exam': {
    id: 'cap-1-exam',
    title: 'Bài kiểm tra cuối Cấp 1: Nền tảng SDLC (20 câu)',
    description:
      'Trộn đều kiến thức toàn bộ Cấp 1 (M0.1, M0.2, M1.1, M1.2, M1.3). Đạt từ 80% (16/20 câu) để mở khóa huy hiệu Thành thạo Cấp 1.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'c1-1',
        question: 'Phát biểu nào phân biệt chính xác nhất giữa SDLC và Product Life Cycle?',
        options: [
          'SDLC dài hơn Product Life Cycle.',
          'Một Product Life Cycle có thể chứa nhiều chu kỳ SDLC (từ bản đầu tiên đến các đợt nâng cấp và cuối cùng là ngừng sử dụng).',
          'SDLC chỉ bắt đầu sau khi sản phẩm đã bán ra thị trường.',
          'Product Life Cycle chỉ là tên khác của giai đoạn Bảo trì.',
        ],
        correctIndex: 1,
        explanation:
          'Một sản phẩm có thể trải qua nhiều chu kỳ SDLC trong suốt vòng đời thương mại của nó (v1.0, v2.0, v3.0...).',
        topic: 'M0.1 Tổng quan SDLC',
      },
      {
        id: 'c1-2',
        question: 'Tại sao việc bỏ qua Exit Criteria ở giai đoạn Thiết kế để "code sớm cho kịp tiến độ" thường khiến dự án chậm hơn về cuối?',
        options: [
          'Vì lập trình viên sẽ viết nhiều dòng code hơn.',
          'Vì thiết kế còn lỗ hổng/mơ hồ gây ra hàng loạt sửa lại (rework), xung đột tích hợp và lỗi nghiêm trọng ở giai đoạn Kiểm thử và Production với chi phí sửa cao gấp nhiều lần.',
          'Vì công cụ Git không cho phép commit nếu chưa có tài liệu thiết kế.',
          'Vì đội QA sẽ từ chối nhận lương.',
        ],
        correctIndex: 1,
        explanation:
          'Bỏ qua cổng chất lượng làm lỗi trôi sang giai đoạn sau (defect leakage), kéo theo hiệu ứng domino về chi phí và thời gian sửa lỗi.',
        topic: 'M0.1 Tổng quan SDLC',
      },
      {
        id: 'c1-3',
        question: 'Trong quá trình thẩm định một hệ thống đặt sách, BA mời 5 bạn đọc thật thao tác đặt sách trên môi trường UAT để xem quy trình có dễ dùng và đáp ứng đúng thói quen mượn sách hay không. Hoạt động này thuộc loại nào?',
        options: ['Verification', 'Validation', 'Unit Testing', 'Static Analysis'],
        correctIndex: 1,
        explanation:
          'Kiểm chứng xem hệ thống có đáp ứng đúng nhu cầu thực tế của người dùng cuối hay không chính là Validation ("Building the right product").',
        topic: 'M0.1 Tổng quan SDLC',
      },
      {
        id: 'c1-4',
        question: 'Định nghĩa nào đúng nhất về Baseline (Đường cơ sở) trong SDLC?',
        options: [
          'Bản nháp đầu tiên của tài liệu chưa ai đọc.',
          'Phiên bản chính thức đã được rà soát và phê duyệt, làm mốc chuẩn để các giai đoạn sau dựa vào và chỉ thay đổi qua quy trình kiểm soát thay đổi.',
          'Số lượng lỗi tối đa được phép có trên Production.',
          'Đường nối các mốc trên biểu đồ Gantt.',
        ],
        correctIndex: 1,
        explanation:
          'Baseline tạo điểm neo ổn định; khi đã chốt baseline (ví dụ SRS v1.0), mọi sửa đổi đều phải được đánh giá ảnh hưởng và phê duyệt chính thức.',
        topic: 'M0.1 Tổng quan SDLC',
      },
      {
        id: 'c1-5',
        question: 'Trong ma trận RACI, ký tự "C" (Consulted) khác ký tự "I" (Informed) ở điểm nào?',
        options: [
          'C là giao tiếp hai chiều (hỏi ý kiến chuyên môn trước khi chốt); I là giao tiếp một chiều (thông báo kết quả sau khi có quyết định).',
          'C có quyền phủ quyết mọi quyết định của A; I là người trực tiếp làm.',
          'I quan trọng hơn C vì I là viết tắt của Important.',
          'Không có sự khác biệt, dùng cái nào cũng được.',
        ],
        correctIndex: 0,
        explanation:
          'Consulted tham gia đóng góp ý kiến (2 chiều) trước khi quyết định được ban hành; Informed chỉ cần cập nhật thông tin (1 chiều) để nắm tình hình.',
        topic: 'M0.2 Vai trò & Chuẩn',
      },
      {
        id: 'c1-6',
        question: 'Theo chuẩn ISO/IEC/IEEE 12207:2017, hoạt động quản lý rủi ro, quản lý cấu hình và lập kế hoạch dự án thuộc nhóm quy trình nào?',
        options: [
          'Agreement Processes',
          'Technical Management Processes (Quy trình quản lý kỹ thuật)',
          'Technical Processes',
          'Maintenance Processes',
        ],
        correctIndex: 1,
        explanation:
          'Technical Management Processes bao gồm Project Planning, Assessment & Control, Decision Management, Risk Management, Configuration Management, Information Management, Measurement và Quality Assurance.',
        topic: 'M0.2 Vai trò & Chuẩn',
      },
      {
        id: 'c1-7',
        question: 'Một công ty cử nhóm QA đi đánh giá xem các đội dự án có thực hiện đúng quy trình code review và chuẩn đặt tên tài liệu hay không. Đây là hoạt động gì?',
        options: [
          'Quality Control (QC)',
          'Quality Assurance (QA – Process Audit)',
          'User Acceptance Testing',
          'Performance Testing',
        ],
        correctIndex: 1,
        explanation:
          'Đánh giá sự tuân thủ quy trình (process audit) nhằm đảm bảo quy trình tạo ra sản phẩm đạt chuẩn là hoạt động cốt lõi của QA.',
        topic: 'M0.2 Vai trò & Chuẩn',
      },
      {
        id: 'c1-8',
        question: 'Điều kiện nào sau đây khiến mô hình Waterfall dễ thất bại nhất?',
        options: [
          'Đội ngũ có nhiều kinh nghiệm với công nghệ sử dụng.',
          'Yêu cầu nghiệp vụ chưa rõ ràng và dự kiến thay đổi mạnh khi người dùng bắt đầu sử dụng.',
          'Dự án có hợp đồng quy định rõ tài liệu bàn giao từng giai đoạn.',
          'Quy mô dự án nhỏ và bài toán đã từng làm nhiều lần.',
        ],
        correctIndex: 1,
        explanation:
          'Waterfall giả định yêu cầu có thể chốt đầy đủ và ổn định từ đầu. Khi yêu cầu mơ hồ hoặc hay đổi, chi phí quay lại sửa trong Waterfall rất cao.',
        topic: 'M1.1 Mô hình truyền thống',
      },
      {
        id: 'c1-9',
        question: 'Trong V-Model, tài liệu "Đặc tả yêu cầu nghiệp vụ / người dùng" ở nhánh trái là đầu vào chính để thiết kế cấp kiểm thử nào ở nhánh phải?',
        options: [
          'Unit Testing',
          'Integration Testing',
          'Acceptance Testing (Kiểm thử chấp nhận)',
          'Code Review',
        ],
        correctIndex: 2,
        explanation:
          'Tầng cao nhất của chữ V ghép nối trực tiếp giữa Yêu cầu nghiệp vụ/người dùng (trái) và Kiểm thử chấp nhận – Acceptance Testing (phải).',
        topic: 'M1.1 Mô hình truyền thống',
      },
      {
        id: 'c1-10',
        question: 'Điểm mạnh nổi bật của việc kết hợp cả Iterative (Lặp) và Incremental (Gia tăng) là gì?',
        options: [
          'Không cần phân tích yêu cầu.',
          'Vừa bàn giao sớm được từng phần chức năng chạy thật (Incremental), vừa cải tiến dần chất lượng và thiết kế qua phản hồi thực tế (Iterative).',
          'Loại bỏ hoàn toàn nhu cầu kiểm thử hồi quy.',
          'Luôn giảm số nhân sự xuống chỉ còn 1 người.',
        ],
        correctIndex: 1,
        explanation:
          'Hầu hết các khung Agile hiện đại (như Scrum) đều là Iterative + Incremental: mỗi Sprint vừa thêm tính năng hoàn chỉnh, vừa tinh chỉnh sản phẩm theo phản hồi.',
        topic: 'M1.1 Mô hình truyền thống',
      },
      {
        id: 'c1-11',
        question: 'Yếu tố nào phân biệt rõ nhất mô hình Spiral với mô hình Iterative thông thường?',
        options: [
          'Spiral luôn có bước đánh giá và giảm thiểu rủi ro chính thức ở trung tâm mỗi vòng lặp.',
          'Spiral không có giai đoạn kiểm thử.',
          'Spiral chỉ cho phép tối đa 2 vòng lặp.',
          'Spiral cấm dùng nguyên mẫu (prototype).',
        ],
        correctIndex: 0,
        explanation:
          'Risk-driven (hướng rủi ro) là linh hồn của Spiral: mọi quyết định kiến trúc hay làm prototype đều xuất phát từ rủi ro lớn nhất cần triệt tiêu.',
        topic: 'M1.1 Mô hình truyền thống',
      },
      {
        id: 'c1-12',
        question: 'Một nhóm làm bản mẫu nhanh (throwaway prototype) bằng cách copy-paste code thiếu kiểm soát bảo mật để demo cho khách hàng. Khách hàng rất thích và yêu cầu đưa luôn bản mẫu đó chạy thật tuần sau. Nếu nhóm đồng ý, hậu quả phổ biến nhất là gì?',
        options: [
          'Hệ thống sẽ vận hành siêu bền vững trong 10 năm.',
          'Nợ kỹ thuật nặng, lỗ hổng bảo mật, kiến trúc chắp vá và chi phí bảo trì tăng vọt về sau.',
          'Không có hậu quả gì vì khách hàng đã hài lòng.',
          'Tự động đạt chuẩn ISO 12207.',
        ],
        correctIndex: 1,
        explanation:
          'Đây là cái bẫy kinh điển của Throwaway Prototyping: phải nói rõ ngay từ đầu với khách hàng rằng bản mẫu chỉ để thống nhất yêu cầu, không phải phần mềm Production.',
        topic: 'M1.1 Mô hình truyền thống',
      },
      {
        id: 'c1-13',
        question: 'Giá trị thứ 3 của Tuyên ngôn Agile (2001) là gì?',
        options: [
          'Kế hoạch chi tiết hơn phản hồi thay đổi',
          'Cộng tác với khách hàng hơn đàm phán hợp đồng',
          'Công cụ hiện đại hơn con người',
          'Tài liệu đầy đủ hơn phần mềm chạy được',
        ],
        correctIndex: 1,
        explanation:
          '4 giá trị Agile: (1) Cá nhân & tương tác > Quy trình & công cụ; (2) Phần mềm chạy được > Tài liệu đầy đủ; (3) Cộng tác khách hàng > Đàm phán hợp đồng; (4) Phản hồi thay đổi > Bám sát kế hoạch.',
        topic: 'M1.2 Agile & Hiện đại',
      },
      {
        id: 'c1-14',
        question: 'Trong Scrum Guide 2020, mục đích của Daily Scrum (tối đa 15 phút) là gì?',
        options: [
          'Để từng lập trình viên báo cáo tiến độ nộp cho Scrum Master chấm công.',
          'Để nhóm Developers kiểm tra tiến độ hướng tới Sprint Goal và điều chỉnh Sprint Backlog (kế hoạch 24 giờ tới) nếu cần.',
          'Để khách hàng thêm yêu cầu mới vào giữa Sprint.',
          'Để viết tài liệu hướng dẫn sử dụng.',
        ],
        correctIndex: 1,
        explanation:
          'Daily Scrum là buổi họp lập kế hoạch ngắn hằng ngày DÀNH CHO Developers để tự đồng bộ công việc hướng tới Sprint Goal, không phải buổi báo cáo trạng thái cho quản lý.',
        topic: 'M1.2 Agile & Hiện đại',
      },
      {
        id: 'c1-15',
        question: 'Trong Scrum, nếu một tính năng đã code xong nhưng chưa được kiểm thử theo tiêu chí Definition of Done (DoD) vào cuối Sprint, nó sẽ được xử lý thế nào?',
        options: [
          'Vẫn tính là hoàn thành và phát hành cho khách hàng.',
          'Không được tính vào Increment hoàn thành; quay lại Product Backlog để Product Owner cân nhắc ưu tiên tiếp.',
          'Kéo dài Sprint thêm 5 ngày cho đến khi test xong.',
          'Xóa bỏ vĩnh viễn khỏi dự án.',
        ],
        correctIndex: 1,
        explanation:
          'Sprint có khung thời gian cố định (time-boxed) và không kéo dài. Mọi hạng mục chưa đạt DoD không được xem là Increment hoàn chỉnh mà trả về Product Backlog.',
        topic: 'M1.2 Agile & Hiện đại',
      },
      {
        id: 'c1-16',
        question: 'Hai chỉ số luồng công việc cốt lõi thường được đo trong Kanban là gì?',
        options: [
          'Số trang SRS và số buổi họp.',
          'Lead Time (từ khi nhận yêu cầu đến khi giao) và Cycle Time (từ khi bắt đầu làm đến khi xong).',
          'Số lượng nhánh Git và số file ảnh.',
          'Số giờ tăng ca và số lỗi đã xóa.',
        ],
        correctIndex: 1,
        explanation:
          'Kanban tập trung tối ưu hóa dòng chảy công việc thông qua WIP Limit, Lead Time, Cycle Time và Throughput.',
        topic: 'M1.2 Agile & Hiện đại',
      },
      {
        id: 'c1-17',
        question: 'Mối quan hệ giữa Agile và DevOps được hiểu đúng nhất như thế nào?',
        options: [
          'DevOps thay thế hoàn toàn Agile nên không thể dùng chung.',
          'Agile giúp lập kế hoạch và phát triển phần mềm linh hoạt theo chu kỳ ngắn; DevOps mở rộng sự linh hoạt đó tới tự động hóa tích hợp, triển khai và vận hành ổn định.',
          'Agile chỉ dành cho BA, còn DevOps chỉ dành cho bảo vệ máy chủ.',
          'Hai khái niệm đối lập nhau về triết lý.',
        ],
        correctIndex: 1,
        explanation:
          'Agile và DevOps bổ trợ nhau: Agile tạo ra Increment nhanh chóng, còn DevOps đảm bảo Increment đó được kiểm thử, phát hành và vận hành an toàn, liên tục.',
        topic: 'M1.2 Agile & Hiện đại',
      },
      {
        id: 'c1-18',
        question: 'Một doanh nghiệp ký hợp đồng trọn gói (fixed-price) xây dựng cổng thông tin theo 20 yêu cầu pháp lý cứng, không thay đổi, bắt buộc bàn giao đầy đủ hồ sơ thiết kế và biên bản UAT từng hạng mục. Mô hình nào ít rủi ro nhất?',
        options: [
          'Waterfall hoặc V-Model',
          'Kanban không ước lượng',
          'XP không viết tài liệu',
          'Phát triển tự do không quy trình',
        ],
        correctIndex: 0,
        explanation:
          'Phạm vi cố định, yêu cầu pháp lý rõ ràng và đòi hỏi hồ sơ nghiệm thu chặt chẽ theo giai đoạn phù hợp nhất với Waterfall hoặc V-Model.',
        topic: 'M1.3 Chọn mô hình',
      },
      {
        id: 'c1-19',
        question: 'Dấu hiệu nào cho thấy một dự án đang bị "Scope Creep" (phình phạm vi không kiểm soát)?',
        options: [
          'Product Owner sắp xếp lại thứ tự ưu tiên backlog trước Sprint Planning và bỏ bớt tính năng ít giá trị để giữ đúng ngân sách.',
          'Khách hàng liên tục nhắn tin riêng cho lập trình viên thêm nút bấm, báo cáo nhỏ mới mà không ghi nhận, không đánh giá tác động tiến độ và không qua phê duyệt.',
          'Đội QA bổ sung thêm test case cho một yêu cầu đã nằm trong SRS.',
          'Nhóm tổ chức Sprint Retrospective để cải tiến quy trình.',
        ],
        correctIndex: 1,
        explanation:
          'Thay đổi có kiểm soát (đánh giá tác động, đánh đổi phạm vi/tiến độ, được duyệt) là lành mạnh; thêm việc lén lút ngoài quy trình làm phình phạm vi mới là Scope Creep.',
        topic: 'M0.1 & M1.3',
      },
      {
        id: 'c1-20',
        question: 'Trong bối cảnh thực tế, câu kết luận nào đúng nhất khi lựa chọn mô hình SDLC?',
        options: [
          'Scrum luôn là mô hình tốt nhất cho mọi loại dự án phần mềm trên thế giới.',
          'Waterfall đã lỗi thời và không bao giờ nên dùng nữa.',
          'Không có mô hình nào tốt nhất cho mọi dự án; phải chọn và tinh chỉnh mô hình dựa trên độ ổn định yêu cầu, rủi ro, ràng buộc pháp lý, mức tham gia của khách hàng và năng lực đội.',
          'Chỉ cần chọn mô hình nào ít phải viết tài liệu nhất.',
        ],
        correctIndex: 2,
        explanation:
          'Cả SWEBOK v4, Sommerville lẫn ISTQB CTFL v4.0 đều nhấn mạnh nguyên tắc "fit for context": chọn và tinh chỉnh mô hình SDLC phù hợp với đặc thù dự án.',
        topic: 'M1.3 Chọn mô hình',
      },
    ],
  },

  'as-0': {
    id: 'as-0',
    title: 'Quiz AS.0: Tam giác Đảo ngược, Roadmap to Value & 5 Cấp lập kế hoạch (Agile For Dummies)',
    description: 'Đạt tối thiểu 80% (5/6 câu) để nắm vững khung quản trị dự án Agile theo Mark C. Layton.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'as0-q1',
        question: 'Theo Tam giác Sắt Đảo ngược (Inverted Iron Triangle) trong Agile Project Management For Dummies, Agile cố định những yếu tố nào và để yếu tố nào linh hoạt?',
        options: [
          'Cố định Phạm vi (Scope); để Thời gian và Chi phí co giãn thoải mái.',
          'Cố định Thời gian (nhịp Sprint) và Chi phí (đội ổn định), giữ vững Chất lượng; linh hoạt Phạm vi (Scope) theo thứ tự ưu tiên giá trị cao nhất.',
          'Cố định Phạm vi và Thời gian; linh hoạt giảm Chất lượng khi cần.',
          'Cả 3 yếu tố Thời gian, Chi phí và Phạm vi đều bị khóa cứng 100% từ đầu.',
        ],
        correctIndex: 1,
        explanation:
          'Agile đảo ngược Tam giác Sắt truyền thống: giữ ổn định nhịp Thời gian (Sprint), Chi phí (đội chuyên trách) và chuẩn Chất lượng, còn Phạm vi thích nghi theo thứ tự ưu tiên để luôn giao phần giá trị nhất trước.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 1',
      },
      {
        id: 'as0-q2',
        question: 'Thứ tự ĐÚNG của 5 Cấp độ Lập kế hoạch trong Agile (5 Levels of Agile Planning) từ vĩ mô xuống vi mô là gì?',
        options: [
          'Daily → Sprint → Release → Roadmap → Product Vision',
          'Product Vision → Product Roadmap → Release Planning → Sprint Planning → Daily Planning',
          'Product Roadmap → Sprint Planning → Product Vision → Release Planning → Daily Planning',
          'Contract → Gantt Chart → Coding → Testing → Maintenance',
        ],
        correctIndex: 1,
        explanation:
          'Lập kế hoạch Agile tinh chỉnh dần từ định hướng chiến lược (Product Vision → Product Roadmap) xuống kế hoạch phát hành (Release Planning), kế hoạch Sprint (Sprint Planning) và đồng bộ hằng ngày (Daily Planning).',
        source: 'Agile Project Management For Dummies (4th Ed.), Ch. 7–9',
      },
      {
        id: 'as0-q3',
        question: 'Trong khung "Roadmap to Value" (7 giai đoạn), hai giai đoạn cuối cùng (Giai đoạn 6 và 7) dùng để đóng vòng phản hồi và cải tiến liên tục là gì?',
        options: [
          'Ký hợp đồng và Thanh lý dự án.',
          'Sprint Review (trình diễn sản phẩm lấy phản hồi) và Sprint Retrospective (nhìn lại quy trình để cải tiến).',
          'Viết SRS và Vẽ ERD.',
          'Release Planning và Product Vision.',
        ],
        correctIndex: 1,
        explanation:
          '7 giai đoạn của Roadmap to Value: (1) Product Vision → (2) Product Roadmap → (3) Release Plan → (4) Sprint Planning → (5) Daily Scrum → (6) Sprint Review → (7) Sprint Retrospective.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 3',
      },
      {
        id: 'as0-q4',
        question: 'Mục đích chính của "Elevator Statement" (Tuyên bố tầm nhìn thang máy) ở Giai đoạn 1 là gì?',
        options: [
          'Liệt kê chi tiết từng trường dữ liệu của tất cả màn hình trong hệ thống.',
          'Tóm tắt ngắn gọn đối tượng mục tiêu, nhu cầu cốt lõi, lợi ích chính và điểm khác biệt của sản phẩm để làm "ngôi sao Bắc Đẩu" định hướng mọi quyết định ưu tiên.',
          'Báo cáo tiến độ công việc hằng ngày trong 15 phút.',
          'Thay thế hoàn toàn bảng tiêu chí chấp nhận của QA.',
        ],
        correctIndex: 1,
        explanation:
          'Elevator Statement giúp mọi thành viên và bên liên quan có chung một tầm nhìn súc tích trước khi xây Roadmap và sắp xếp ưu tiên Product Backlog.',
        source: 'Agile Project Management For Dummies (4th Ed.), Ch. 7',
      },
      {
        id: 'as0-q5',
        question: 'Theo khuyến nghị thực hành trong Agile Project Management For Dummies, tần suất rà soát tối thiểu đối với Product Vision, Product Roadmap và độ dài phổ biến của một Release là bao nhiêu?',
        options: [
          'Product Vision: ≥ 1 lần/năm · Product Roadmap: ≥ 2 lần/năm · Một Release thường gồm 3–5 Sprint.',
          'Chỉ viết một lần duy nhất vào ngày đầu dự án và cấm sửa trong 5 năm.',
          'Phải viết lại Product Vision mới hoàn toàn vào mỗi sáng Daily Scrum.',
          'Một Release luôn kéo dài đúng 24 tháng.',
        ],
        correctIndex: 0,
        explanation:
          'Tầm nhìn sản phẩm ổn định nhất (rà soát ít nhất mỗi năm), Roadmap cập nhật thường xuyên hơn (ít nhất 2 lần/năm), còn mỗi Release thường gom 3–5 Sprint để bàn giao một cụm giá trị hoàn chỉnh.',
        source: 'Agile Project Management For Dummies (4th Ed.), Ch. 7–8',
      },
      {
        id: 'as0-q6',
        question: 'Theo tư duy quản trị rủi ro và chi phí trong Agile Project Management For Dummies (Part 4), vì sao việc làm các tính năng có rủi ro cao và giá trị cao ở các Sprint đầu lại tốt hơn đẩy về cuối dự án?',
        options: [
          'Vì lập trình viên chỉ thích làm việc khó vào đầu năm.',
          'Vì sớm kiểm chứng giả thuyết kỹ thuật/nghiệp vụ trên sản phẩm thật giúp giảm nhanh đường cong rủi ro (fail fast, learn fast) khi chi phí điều chỉnh còn thấp, đồng thời thu hồi giá trị đầu tư sớm hơn.',
          'Vì để cuối dự án không cần kiểm thử nữa.',
          'Vì hợp đồng luôn cấm làm tính năng đơn giản trước.',
        ],
        correctIndex: 1,
        explanation:
          'Ưu tiên hạng mục giá trị cao & rủi ro cao trước giúp triệt tiêu ẩn số sớm nhất có thể và mang lại giá trị kinh doanh sớm thay vì tích tụ rủi ro tới sát ngày phát hành.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 4',
      },
    ],
  },

  'as-1': {
    id: 'as-1',
    title: 'Quiz AS.1: 12 Nguyên tắc Agile, Empiricism & 5 Giá trị Scrum',
    description: 'Đạt tối thiểu 80% (5/6 câu) để nắm chắc nền tảng tư duy Agile & Scrum.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'as1-q1',
        question: 'Theo 12 nguyên tắc của Tuyên ngôn Agile, thước đo chính của tiến độ (primary measure of progress) là gì?',
        options: [
          'Tỷ lệ phần trăm tài liệu thiết kế đã ký duyệt.',
          'Phần mềm chạy được (Working software).',
          'Số lượng giờ làm việc đã ghi nhận trên bảng chấm công.',
          'Số lượng cuộc họp đã tổ chức đúng giờ.',
        ],
        correctIndex: 1,
        explanation:
          'Nguyên tắc số 7 của Agile Manifesto khẳng định: "Working software is the primary measure of progress" — chỉ phần mềm hoạt động thực tế mới chứng minh tiến độ thật.',
        source: 'Agile Manifesto 2001 – Nguyên tắc #7',
      },
      {
        id: 'as1-q2',
        question: 'Ba trụ cột của Chủ nghĩa Kinh nghiệm (Empiricism) trong Scrum gồm những gì?',
        options: [
          'Kế hoạch, Kiểm soát và Báo cáo.',
          'Minh bạch (Transparency), Thanh tra (Inspection) và Thích nghi (Adaptation).',
          'Tốc độ, Chi phí và Phạm vi.',
          'Phân tích, Lập trình và Kiểm thử.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum dựa trên Empiricism với 3 trụ cột không thể tách rời: Minh bạch cho phép Thanh tra chính xác; Thanh tra mà không Thích nghi là vô nghĩa.',
        source: 'Scrum Guide 2020 – Scrum Theory',
      },
      {
        id: 'as1-q3',
        question: 'Một nhóm Scrum cố tình che giấu các lỗi nghiêm trọng trên bảng công việc để báo cáo tiến độ nhìn đẹp trước mặt lãnh đạo. Hành vi này phá hủy trực tiếp trụ cột nào của Scrum?',
        options: [
          'Minh bạch (Transparency) — từ đó làm sai lệch cả Thanh tra và Thích nghi.',
          'Chỉ ảnh hưởng đến tốc độ gõ code.',
          'Không vi phạm vì vẫn họp Daily Scrum đầy đủ.',
          'Chỉ vi phạm quy tắc Kanban.',
        ],
        correctIndex: 0,
        explanation:
          'Scrum Guide 2020 nêu rõ: "Các artifact có độ minh bạch thấp dẫn đến các quyết định làm giảm giá trị và tăng rủi ro." Thiếu Minh bạch sẽ làm mất giá trị của mọi sự kiện Thanh tra.',
        source: 'Scrum Guide 2020 – Transparency',
      },
      {
        id: 'as1-q4',
        question: 'Nhóm giá trị nào là ĐÚNG và ĐẦY ĐỦ 5 Giá trị Scrum (Scrum Values)?',
        options: [
          'Tốc độ, Kỷ luật, Tuân thủ, Sáng tạo, Trung thực.',
          'Cam kết (Commitment), Tập trung (Focus), Cởi mở (Openness), Tôn trọng (Respect), Dũng cảm (Courage).',
          'Minh bạch, Thanh tra, Thích nghi, Hợp tác, Tin cậy.',
          'Chất lượng, Bảo mật, Hiệu năng, Đơn giản, Linh hoạt.',
        ],
        correctIndex: 1,
        explanation:
          '5 Scrum Values theo Scrum Guide 2020: Commitment, Focus, Openness, Respect, Courage. Mẹo nhớ: C-F-O-R-C.',
        source: 'Scrum Guide 2020 – Scrum Values',
      },
      {
        id: 'as1-q5',
        question: 'Một lập trình viên thẳng thắn báo cáo trong Daily Scrum rằng mình đang bị kẹt ở phần tích hợp API và đề xuất nhờ đồng nghiệp hỗ trợ thay vì giấu lỗi đến cuối Sprint. Hành động này thể hiện rõ nhất các giá trị Scrum nào?',
        options: [
          'Cởi mở (Openness) và Dũng cảm (Courage).',
          'Chỉ thể hiện sự yếu kém về kỹ thuật.',
          'Vi phạm giá trị Cam kết vì không tự giải quyết một mình.',
          'Không liên quan đến 5 giá trị Scrum.',
        ],
        correctIndex: 0,
        explanation:
          'Dám thừa nhận trở ngại sớm và chia sẻ trung thực tình trạng công việc là biểu hiện điển hình của Cởi mở (Openness) và Dũng cảm (Courage).',
        source: 'Scrum Guide 2020 – Scrum Values',
      },
      {
        id: 'as1-q6',
        question: 'Nguyên tắc số 8 của Tuyên ngôn Agile nói về "nhịp độ bền vững" (sustainable pace). Điều này có nghĩa là gì?',
        options: [
          'Đội ngũ phải tăng ca đều đặn mỗi tối 2 tiếng để giữ tốc độ cao.',
          'Nhà tài trợ, nhà phát triển và người dùng cần duy trì được một nhịp làm việc ổn định lâu dài mà không kiệt sức (burnout).',
          'Mỗi Sprint chỉ được làm tối đa 1 tính năng nhỏ.',
          'Không bao giờ được phép thay đổi thành viên trong đội.',
        ],
        correctIndex: 1,
        explanation:
          'Agile hướng tới tốc độ ổn định lâu dài. Ép tăng ca liên miên (death march) làm tăng lỗi, tăng nợ kỹ thuật và giảm năng suất thực tế về sau.',
        source: 'Agile Manifesto 2001 – Nguyên tắc #8',
      },
    ],
  },

  'as-2': {
    id: 'as-2',
    title: 'Quiz AS.2: Vận hành Scrum chi tiết (3-5-3, Refinement, DoR & DoD)',
    description: 'Đạt tối thiểu 80% (6/7 câu) để làm chủ cơ chế vận hành một Sprint.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'as2-q1',
        question: 'Theo Scrum Guide 2020, 3 chủ đề bắt buộc phải được giải quyết trong buổi Sprint Planning là gì?',
        options: [
          'Ai làm nhiều nhất? Ai làm ít nhất? Bao giờ tăng lương?',
          'Tại sao Sprint này có giá trị (Why)? Có thể hoàn thành gì trong Sprint này (What)? Công việc được chọn sẽ thực hiện ra sao (How)?',
          'Hôm qua làm gì? Hôm nay làm gì? Có vướng mắc gì không?',
          'Ngân sách còn bao nhiêu? Hợp đồng ký chưa? Ai chịu phạt nếu trễ?',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide 2020 cấu trúc Sprint Planning theo đúng 3 chủ đề: Topic 1 (Why → Sprint Goal), Topic 2 (What → chọn Product Backlog Items), Topic 3 (How → Developers lập kế hoạch thực thi).',
        source: 'Scrum Guide 2020 – Sprint Planning',
      },
      {
        id: 'as2-q2',
        question: 'Khung thời gian tối đa (Time-box) theo Scrum Guide 2020 cho Sprint Planning, Sprint Review và Sprint Retrospective của một Sprint 1 tháng lần lượt là bao nhiêu?',
        options: [
          '8 giờ · 4 giờ · 3 giờ (với Sprint ngắn hơn như 2 tuần thường rút ngắn tương ứng).',
          '2 giờ · 1 giờ · 1 giờ cho mọi độ dài Sprint.',
          '16 giờ · 8 giờ · 8 giờ.',
          'Không có bất kỳ giới hạn thời gian nào.',
        ],
        correctIndex: 0,
        explanation:
          'Cho Sprint 1 tháng: Sprint Planning ≤ 8 giờ, Daily Scrum ≤ 15 phút, Sprint Review ≤ 4 giờ, Sprint Retrospective ≤ 3 giờ. Sprint 2 tuần thường lấy khoảng một nửa (4h / 15p / 2h / 1.5h).',
        source: 'Scrum Guide 2020',
      },
      {
        id: 'as2-q3',
        question: 'Ai là người sở hữu và có quyền cập nhật Sprint Backlog trong suốt Sprint?',
        options: [
          'Product Owner',
          'Scrum Master',
          'Developers (những người trực tiếp thực hiện công việc)',
          'Các bên liên quan bên ngoài',
        ],
        correctIndex: 2,
        explanation:
          'Product Owner sở hữu Product Backlog; còn Sprint Backlog là kế hoạch của và dành cho Developers — chỉ Developers mới cập nhật cách làm trong Sprint Backlog.',
        source: 'Scrum Guide 2020 – Sprint Backlog',
      },
      {
        id: 'as2-q4',
        question: 'Phát biểu nào ĐÚNG về Product Backlog Refinement (Tinh chỉnh backlog)?',
        options: [
          'Là sự kiện chính thức thứ 6 của Scrum, bắt buộc họp đúng 4 tiếng chiều thứ Tư.',
          'Là hoạt động diễn ra liên tục trong Sprint nhằm chia nhỏ, làm rõ chi tiết và bổ sung tiêu chí cho các hạng mục sắp triển khai.',
          'Chỉ do Scrum Master làm một mình vào cuối quý.',
          'Chỉ thực hiện sau khi dự án đã phát hành xong.',
        ],
        correctIndex: 1,
        explanation:
          'Refinement là hoạt động liên tục (ongoing activity), không phải sự kiện đóng khung cứng, giúp các mục trên đầu Product Backlog đủ rõ ràng trước khi vào Sprint Planning.',
        source: 'Scrum Guide 2020 – Product Backlog',
      },
      {
        id: 'as2-q5',
        question: 'Sự khác biệt cốt lõi giữa Definition of Ready (DoR) và Definition of Done (DoD) là gì?',
        options: [
          'DoR là tiêu chí chuẩn bị ĐẦU VÀO giúp kiểm tra một Story đã đủ rõ ràng để đưa vào Sprint chưa; DoD là cam kết chính thức về chuẩn chất lượng ĐẦU RA để một Increment được coi là hoàn thành.',
          'DoD là tùy chọn không quan trọng, còn DoR mới là cam kết bắt buộc trong Scrum Guide.',
          'DoR chỉ dành cho QA, còn DoD chỉ dành cho PO.',
          'Hai thuật ngữ hoàn toàn giống nhau.',
        ],
        correctIndex: 0,
        explanation:
          'DoD là cam kết chính thức của Increment trong Scrum Guide 2020. DoR là thực hành bổ trợ hữu ích nhưng cần cẩn thận không biến nó thành cổng phase-gate cứng nhắc kiểu Waterfall.',
        source: 'Scrum Guide 2020; BABOK Agile Extension',
      },
      {
        id: 'as2-q6',
        question: 'Một nhóm Scrum đã hoàn thành 1 Increment đạt Definition of Done ngay từ ngày thứ 7 của Sprint 2 tuần. Họ có thể phát hành Increment đó cho người dùng trước khi Sprint kết thúc không?',
        options: [
          'Không, Scrum cấm phát hành trước buổi Sprint Review.',
          'Có! Nhiều Increment có thể được tạo ra và phát hành bất cứ lúc nào ngay trong Sprint miễn là đạt Definition of Done.',
          'Chỉ được phát hành nếu Scrum Master cho phép.',
          'Phải hủy Sprint hiện tại mới được phát hành.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide 2020 khẳng định: "Sprint Review không bao giờ được coi là cổng chặn việc phát hành giá trị." Increment đạt DoD có thể phát hành ngay trong Sprint.',
        source: 'Scrum Guide 2020 – Increment',
      },
      {
        id: 'as2-q7',
        question: 'Trong tình huống có nhiều Scrum Team cùng phát triển trên CÙNG MỘT sản phẩm, quy tắc về Product Backlog và Definition of Done là gì?',
        options: [
          'Mỗi team tạo một Product Backlog riêng và một Product Owner riêng.',
          'Tất cả các team dùng chung MỘT Product Backlog, MỘT Product Owner duy nhất và phải cùng tuân thủ ít nhất một Definition of Done chung để tích hợp thành một Increment thống nhất.',
          'Mỗi team tự đặt một chuẩn DoD khác nhau hoàn toàn.',
          'Không thể có quá 1 Scrum Team trên cùng một sản phẩm.',
        ],
        correctIndex: 1,
        explanation:
          'Khi nhiều nhóm cùng làm một sản phẩm: 1 Product Backlog chung, 1 Product Owner duy nhất và tuân thủ chuẩn Definition of Done chung tối thiểu để sản phẩm tích hợp liền mạch.',
        source: 'Scrum Guide 2020 – Definition of Done',
      },
    ],
  },

  'as-3': {
    id: 'as-3',
    title: 'Quiz AS.3: User Story (INVEST), Story Splitting, Story Mapping & Ước lượng',
    description: 'Đạt tối thiểu 80% (6/7 câu) để viết backlog và ước lượng chuẩn mực.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'as3-q1',
        question: 'Trong cấu trúc User Story "Là [Vai trò], tôi muốn [Tính năng], để [Giá trị]", vì sao mệnh đề thứ 3 ("để [Giá trị]") lại cực kỳ quan trọng?',
        options: [
          'Để câu văn dài hơn cho đủ định dạng.',
          'Giúp cả đội hiểu lý do nghiệp vụ thật sự đằng sau yêu cầu, từ đó có thể đề xuất giải pháp kỹ thuật đơn giản và hiệu quả hơn thay vì làm máy móc.',
          'Chỉ để trang trí trong báo cáo gửi khách hàng.',
          'Để lập trình viên biết phải dùng ngôn ngữ lập trình nào.',
        ],
        correctIndex: 1,
        explanation:
          'Mệnh đề "để..." giải thích giá trị (Value) và mục tiêu thực sự. Nhờ hiểu "Tại sao", đội ngũ mới thương lượng được giải pháp tối ưu (chữ N – Negotiable và V – Valuable trong INVEST).',
        source: 'Mike Cohn – User Stories Applied',
      },
      {
        id: 'as3-q2',
        question: 'User Story nào dưới đây VI PHẠM rõ rệt tiêu chí "T – Testable" (Kiểm thử được) trong INVEST?',
        options: [
          'Hệ thống hiển thị kết quả tìm kiếm sách theo ISBN trong vòng dưới 1,5 giây với 95% truy vấn.',
          'Hệ thống phải có giao diện tra cứu sách thật thân thiện, hiện đại và dễ sử dụng.',
          'Khi sinh viên mượn quá 5 cuốn sách đang hoạt động, hệ thống chặn tạo phiếu mượn mới và hiển thị thông báo rõ lý do.',
          'Mỗi ngày trễ hạn tính phạt 5.000đ, tổng tiền phạt không vượt quá giá bìa sách.',
        ],
        correctIndex: 1,
        explanation:
          '"Thật thân thiện, hiện đại, dễ sử dụng" là các tính từ chủ quan, không đo lường được nên QA không thể xác định đạt hay không đạt.',
        source: 'Bill Wake – INVEST; Wiegers',
      },
      {
        id: 'as3-q3',
        question: 'Tiêu chí chấp nhận viết theo chuẩn Gherkin / BDD gồm 3 từ khóa chính nào?',
        options: [
          'Who / What / Where',
          'Given (Bối cảnh) / When (Hành động) / Then (Kết quả kỳ vọng)',
          'Plan / Do / Check',
          'Input / Code / Output',
        ],
        correctIndex: 1,
        explanation:
          'Cú pháp Given – When – Then (Specification by Example) giúp BA, Dev và QA có chung hiểu biết chính xác về hành vi hệ thống và chuyển trực tiếp thành kịch bản kiểm thử.',
        source: 'Gojko Adzic – Specification by Example; ISTQB CTFL v4.0',
      },
      {
        id: 'as3-q4',
        question: 'Cách chia nhỏ tính năng "Tìm kiếm sách nâng cao" nào dưới đây là Vertical Slicing (Cắt dọc) ĐÚNG chuẩn?',
        options: [
          'Story 1: Tạo bảng Database sách; Story 2: Viết API tìm kiếm; Story 3: Làm màn hình tìm kiếm.',
          'Story 1: Tìm kiếm theo tên sách & hiển thị kết quả cơ bản (đủ UI+API+DB); Story 2: Bổ sung bộ lọc theo tác giả & năm xuất bản; Story 3: Bổ sung gợi ý tự động khi gõ.',
          'Story 1: Thiết kế Figma; Story 2: Code toàn bộ; Story 3: Kiểm thử toàn bộ.',
          'Giữ nguyên 1 Story lớn làm trong 3 Sprint.',
        ],
        correctIndex: 1,
        explanation:
          'Vertical Slicing cắt theo lát cắt giá trị đi xuyên qua cả UI–API–DB để mỗi Story nhỏ xong là người dùng có thể dùng thử và kiểm chứng ngay.',
        source: 'Mike Cohn; Richard Lawrence',
      },
      {
        id: 'as3-q5',
        question: 'Trong kỹ thuật Planning Poker (dãy Fibonacci: 1, 2, 3, 5, 8, 13...), khi một lập trình viên giơ lá bài "2" còn người khác giơ lá bài "8", bước tiếp theo chuẩn nhất là gì?',
        options: [
          'Lấy trung bình cộng thành 5 điểm ngay lập tức để tiết kiệm thời gian.',
          'Nghe luôn theo ý người nhiều năm kinh nghiệm nhất.',
          'Mời hai người đưa ra mức cao nhất (8) và thấp nhất (2) giải thích giả định của mình để cả nhóm phát hiện điểm khuất/rủi ro bị bỏ sót, rồi bỏ phiếu lại.',
          'Bỏ qua Story đó không làm nữa.',
        ],
        correctIndex: 2,
        explanation:
          'Giá trị lớn nhất của Planning Poker không nằm ở con số mà ở cuộc thảo luận giữa hai thái cực ước lượng — nơi các giả định ẩn, rủi ro tích hợp hoặc cách làm đơn giản hơn được phơi bày.',
        source: 'Mike Cohn – Agile Estimating and Planning',
      },
      {
        id: 'as3-q6',
        question: 'Trong User Story Mapping (Jeff Patton), hai trục ngang và dọc của bản đồ biểu diễn điều gì?',
        options: [
          'Trục ngang là lương nhân sự; trục dọc là thời gian tăng ca.',
          'Trục ngang là chuỗi hoạt động theo hành trình người dùng (User Journey); trục dọc là mức độ ưu tiên để cắt thành từng đợt phát hành (Release 1/MVP, Release 2...).',
          'Trục ngang là số lỗi; trục dọc là số dòng code.',
          'Trục ngang là tên lập trình viên; trục dọc là tên ngày trong tuần.',
        ],
        correctIndex: 1,
        explanation:
          'Story Mapping khắc phục nhược điểm "danh sách phẳng mất bức tranh lớn" của Product Backlog truyền thống, giúp nhìn rõ luồng người dùng (ngang) và cắt lát phát hành theo ưu tiên (dọc).',
        source: 'Jeff Patton – User Story Mapping',
      },
      {
        id: 'as3-q7',
        question: 'Vì sao dãy Fibonacci (1, 2, 3, 5, 8, 13, 21) có khoảng cách giữa các số càng lớn khi kích thước càng to?',
        options: [
          'Vì bộ bài Planning Poker chỉ in được từng đó số.',
          'Phản ánh thực tế rằng công việc càng lớn thì độ bất định càng cao, nên cố phân biệt giữa 14 điểm và 15 điểm là vô nghĩa (độ chính xác giả).',
          'Để ép điểm Velocity của nhóm trông to hơn.',
          'Vì quy định bắt buộc trong Scrum Guide 2020.',
        ],
        correctIndex: 1,
        explanation:
          'Sự bất định tăng phi tuyến theo quy mô đầu việc; dãy Fibonacci ngăn nhóm mất thời gian tranh cãi vô ích vào độ chi tiết giả tạo và nhắc nhóm nên chia nhỏ các thẻ từ 13 điểm trở lên.',
        source: 'Mike Cohn – Agile Estimating and Planning',
      },
    ],
  },

  'as-exam': {
    id: 'as-exam',
    title: 'Bài kiểm tra Tình huống Agile & Scrum (20 câu chuẩn PSM I / PSPO I)',
    description:
      '20 câu hỏi tình huống thực chiến theo chuẩn Scrum Guide 2020 và thực hành Agile hiện đại. Đạt ≥ 80% (16/20 câu) để chứng minh độ vững thực chiến.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'ase-1',
        question: 'Trong lúc Sprint đang chạy, Developers nhận ra khối lượng công việc thực tế nhiều hơn dự kiến và không thể hoàn thành tất cả các hạng mục đã chọn. Hành động đúng chuẩn Scrum nhất là gì?',
        options: [
          'Tự động cắt bỏ bước kiểm thử hồi quy để kịp hoàn thành hết danh sách.',
          'Cộng tác ngay với Product Owner để thương lượng lại phạm vi Sprint Backlog sao cho vẫn bảo vệ được Sprint Goal và giữ nguyên Definition of Done.',
          'Âm thầm tăng ca suốt cuối tuần và không báo cho PO biết.',
          'Kéo dài Sprint thêm 1 tuần.',
        ],
        correctIndex: 1,
        explanation:
          'Khi phát hiện không kịp hoàn thành hết phạm vi, Developers phải minh bạch sớm và cộng tác với PO để điều chỉnh phạm vi Sprint Backlog mà không ảnh hưởng Sprint Goal hay hạ chuẩn DoD.',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-2',
        question: 'Ai chịu trách nhiệm tạo ra một bản dự báo (forecast) xem nhóm có thể hoàn thành bao nhiêu hạng mục trong một Sprint tại buổi Sprint Planning?',
        options: [
          'Product Owner ép số lượng cho nhóm.',
          'Scrum Master quyết định dựa trên lịch nghỉ phép.',
          'Developers — những người trực tiếp thực hiện công việc.',
          'Ban Giám đốc.',
        ],
        correctIndex: 2,
        explanation:
          'Scrum Guide 2020: Chỉ Developers mới có thể đánh giá khả năng hoàn thành công việc của chính họ trong Sprint sắp tới.',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-3',
        question: 'Điều gì xảy ra với các Product Backlog Item chưa hoàn thành khi Sprint kết thúc?',
        options: [
          'Tự động chuyển nguyên xi sang Sprint sau mà không cần PO xem lại.',
          'Đưa trở lại Product Backlog để Product Owner đánh giá lại mức độ ưu tiên cùng các thông tin mới nhất.',
          'Tính một nửa Story Point vào Velocity Sprint hiện tại.',
          'Bị xóa khỏi dự án.',
        ],
        correctIndex: 1,
        explanation:
          'Hạng mục chưa đạt DoD luôn quay lại Product Backlog (không tự động ép sang Sprint sau vì ưu tiên kinh doanh có thể đã thay đổi).',
        topic: 'AS.2 & AS.4 Tình huống',
      },
      {
        id: 'ase-4',
        question: 'Trong buổi Sprint Review, mục tiêu cốt lõi nhất là gì?',
        options: [
          'Chỉ là buổi trình chiếu slide PowerPoint báo cáo số giờ đã làm.',
          'Thanh tra kết quả (Increment) của Sprint cùng các bên liên quan và xác định các điều chỉnh tương lai (cập nhật Product Backlog).',
          'Chấm điểm hiệu suất từng lập trình viên trước mặt khách hàng.',
          'Bắt buộc khách hàng ký nghiệm thu cứng không được góp ý sửa đổi.',
        ],
        correctIndex: 1,
        explanation:
          'Sprint Review là buổi làm việc cộng tác (working session), không chỉ là buổi thuyết trình một chiều, nhằm thanh tra Increment và thích nghi Product Backlog.',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-5',
        question: 'Các bên liên quan bên ngoài (Stakeholders) phàn nàn rằng họ không biết đội đang làm gì và muốn tham gia điều hành Daily Scrum mỗi sáng. Scrum Master nên giải thích thế nào?',
        options: [
          'Mời Stakeholders vào chỉ đạo trực tiếp công việc trong Daily Scrum.',
          'Giải thích Daily Scrum là sự kiện 15 phút dành cho Developers tự đồng bộ kế hoạch hằng ngày; mời Stakeholders theo dõi minh bạch qua bảng công việc, trao đổi với Product Owner và tham gia tích cực tại Sprint Review.',
          'Cấm Stakeholders trao đổi với Product Owner.',
          'Đổi Daily Scrum thành buổi họp báo cáo 1 tiếng cho Stakeholders.',
        ],
        correctIndex: 1,
        explanation:
          'Daily Scrum là của Developers; kênh tương tác chính thức về hướng đi sản phẩm của Stakeholders là thông qua Product Owner và buổi Sprint Review.',
        topic: 'AS.4 Tình huống',
      },
      {
        id: 'ase-6',
        question: 'Nếu một nhóm nhận thấy Sprint 2 tuần quá ngắn để tích hợp đầy đủ hoặc quá dài khiến rủi ro lệch hướng cao, nhóm có được đổi độ dài Sprint không?',
        options: [
          'Không bao giờ được đổi độ dài Sprint sau Sprint 1.',
          'Có thể điều chỉnh độ dài Sprint (nhưng không quá 1 tháng) cho các Sprint tương lai dựa trên kết quả thanh tra ở Retrospective, đồng thời giữ ổn định nhất quán để tạo nhịp dự báo.',
          'Mỗi Sprint nên chọn ngẫu nhiên một độ dài khác nhau tùy số lượng tính năng.',
          'Chỉ được phép chạy Sprint dài đúng 2 tuần theo luật Scrum.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide yêu cầu Sprint dài tối đa 1 tháng và nên giữ độ dài nhất quán để tạo nhịp độ, nhưng nhóm hoàn toàn có thể thích nghi điều chỉnh cho tương lai nếu cần.',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-7',
        question: 'Ai là người chịu trách nhiệm đảm bảo các bên liên quan hiểu rõ các hạng mục trong Product Backlog khi cần?',
        options: ['Product Owner', 'Tech Lead', 'Quản trị hệ thống', 'Khách hàng tự tìm hiểu'],
        correctIndex: 0,
        explanation:
          'Product Owner chịu trách nhiệm quản lý Product Backlog hiệu quả, bao gồm truyền đạt rõ ràng Product Goal và đảm bảo Product Backlog minh bạch, dễ hiểu.',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-8',
        question: 'Trong một Scrum Team 7 người, một thành viên là QA duy nhất bị ốm nghỉ 3 ngày giữa Sprint. Theo tinh thần đội đa chức năng (cross-functional) và tự quản (self-managing), đội nên làm gì?',
        options: [
          'Ngừng toàn bộ việc kiểm thử chờ QA đi làm lại rồi mới test.',
          'Các Developers khác chủ động cùng hỗ trợ viết/chạy kiểm thử, rà soát tiêu chí chấp nhận để duy trì dòng chảy hướng tới Sprint Goal.',
          'Hủy ngay Sprint.',
          'Phát hành phần mềm không cần kiểm thử.',
        ],
        correctIndex: 1,
        explanation:
          'Trong Scrum Team không có các tiểu nhóm đóng khung cứng; tất cả Developers cùng chịu trách nhiệm chung cho việc tạo ra Increment đạt DoD.',
        topic: 'AS.1 & AS.4 Tình huống',
      },
      {
        id: 'ase-9',
        question: 'Lãnh đạo hỏi: "Sản phẩm này bao giờ xong toàn bộ và tốn khoảng bao nhiêu Sprint?". Trong Agile/Scrum, câu trả lời chuyên nghiệp nhất là gì?',
        options: [
          '"Agile không dự báo ngày hoàn thành, xong lúc nào thì xong."',
          'Dựa trên Product Backlog đã ước lượng tương đối và dữ liệu Velocity thực tế qua vài Sprint gần nhất để đưa ra khoảng dự báo (ví dụ: 5–7 Sprint với phạm vi lõi) và cập nhật minh bạch sau mỗi Sprint Review.',
          'Cam kết cứng một ngày duy nhất trước khi hiểu yêu cầu và ép đội tăng ca để giữ lời.',
          'Từ chối cung cấp bất kỳ kế hoạch phát hành nào.',
        ],
        correctIndex: 1,
        explanation:
          'Agile rất coi trọng việc lập kế hoạch thực nghiệm (empirical forecasting) bằng dữ liệu Velocity thực và Release Burnup Chart, thay vì đoán mò hoặc từ chối dự báo.',
        topic: 'AS.3 Ước lượng',
      },
      {
        id: 'ase-10',
        question: 'Dấu hiệu nào dưới đây là điển hình của "Sprint 0" bị lạm dụng thành Waterfall trá hình?',
        options: [
          'Dành hẳn 8 tuần đầu chỉ để viết hết đặc tả chi tiết, vẽ xong toàn bộ DB và kiến trúc mà không tạo ra bất kỳ Increment chạy được nào.',
          'Hoàn thiện kiến trúc tối thiểu song song với việc giao tính năng lõi đầu tiên ngay trong Sprint 1.',
          'Thực hiện Product Backlog Refinement liên tục.',
          'Thiết lập CI/CD cơ bản trong Sprint đầu tiên cùng một lát cắt tính năng nhỏ.',
        ],
        correctIndex: 0,
        explanation:
          'Scrum không có khái niệm "Sprint 0" chỉ để thiết kế giấy. Mọi Sprint đều nên hướng tới tạo ra Increment có giá trị (kể cả rất nhỏ) để kiểm chứng kiến trúc thực tế sớm.',
        topic: 'AS.4 Anti-patterns',
      },
      {
        id: 'ase-11',
        question: 'Trong Sprint Planning, nếu Developers và Product Owner bất đồng: PO muốn nhét 10 Story (50 điểm) vào Sprint trong khi năng lực thực tế của đội chỉ khoảng 30 điểm. Điều gì nên xảy ra?',
        options: [
          'PO có quyền ép Developers nhận đủ 50 điểm.',
          'Developers giải thích minh bạch năng lực dự báo (~30 điểm), cùng PO chọn ra các Story giá trị cao nhất tạo nên một Sprint Goal khả thi và giữ nguyên chất lượng DoD.',
          'Developers cứ nhận 50 điểm rồi cuối Sprint làm được bao nhiêu thì làm.',
          'Scrum Master quyết định chọn trung bình 40 điểm.',
        ],
        correctIndex: 1,
        explanation:
          'Developers là người quyết định khối lượng có thể nhận vào Sprint Backlog; PO quyết định thứ tự ưu tiên giá trị. Hai bên cộng tác minh bạch thay vì ép buộc.',
        topic: 'AS.2 & AS.4 Tình huống',
      },
      {
        id: 'ase-12',
        question: 'Một nhóm có quy ước: "Trong 1 Sprint 2 tuần, tuần 1 chỉ để Dev code, tuần 2 chỉ để QA test". Hạn chế lớn nhất của cách làm này là gì?',
        options: [
          'Không có hạn chế nào, đây là chuẩn Scrum.',
          'Tạo ra Mini-Waterfall bên trong Sprint: lỗi chỉ bị phát hiện vào tuần 2 khi đã sát hạn cuối, gây dồn ứ sửa bug và nguy cơ không đạt DoD.',
          'Làm giảm số dòng code viết được.',
          'Làm Daily Scrum dài hơn.',
        ],
        correctIndex: 1,
        explanation:
          'Cách làm chuẩn là cắt nhỏ Story và kiểm thử liên tục từ ngày thứ 2–3 của Sprint (tích hợp & test từng Story ngay khi xong) thay vì chia nửa Sprint làm 2 pha rời rạc.',
        topic: 'AS.4 Anti-patterns',
      },
      {
        id: 'ase-13',
        question: 'Ai chịu trách nhiệm chính trong việc quản lý và xử lý Nợ kỹ thuật (Technical Debt) của sản phẩm?',
        options: [
          'Chỉ có Scrum Master.',
          'Developers đảm bảo giữ chất lượng mã nguồn theo Definition of Done và minh bạch tác động của nợ kỹ thuật để cùng Product Owner cân đối thứ tự ưu tiên xử lý trong Product Backlog.',
          'Hoàn toàn là trách nhiệm của khách hàng.',
          'Không cần quan tâm đến nợ kỹ thuật cho tới khi hệ thống sập.',
        ],
        correctIndex: 1,
        explanation:
          'Giữ nợ kỹ thuật thấp bắt đầu từ DoD nghiêm túc của Developers; với các khoản nợ kỹ thuật lớn đã tồn đọng, cần minh bạch chi phí cơ hội để PO ưu tiên giải quyết kịp thời.',
        topic: 'AS.4 Tình huống',
      },
      {
        id: 'ase-14',
        question: 'Một hạng mục trong Product Backlog được viết là: "Cải thiện hiệu năng hệ thống". Theo tiêu chí INVEST, hạng mục này đang yếu rõ nhất ở những chữ nào?',
        options: [
          'Yếu ở Small (quá rộng), Estimable (không rõ phạm vi để ước lượng) và Testable (không có ngưỡng đo lường cụ thể).',
          'Chỉ yếu ở chữ Independent.',
          'Đã đạt hoàn hảo cả 6 tiêu chí INVEST.',
          'Chỉ thiếu tên lập trình viên phụ trách.',
        ],
        correctIndex: 0,
        explanation:
          'Cần làm rõ cụ thể: trang/API nào, tải bao nhiêu người dùng, ngưỡng thời gian phản hồi mục tiêu là bao nhiêu (ví dụ: < 1 giây ở 95th percentile) để nhỏ gọn, ước lượng và kiểm thử được.',
        topic: 'AS.3 User Story',
      },
      {
        id: 'ase-15',
        question: 'Trong trường hợp Product Owner muốn thêm một hạng mục mới vào Product Backlog giữa lúc Sprint đang chạy, điều này có được phép không?',
        options: [
          'Không, Product Backlog bị khóa cứng từ khi dự án bắt đầu.',
          'Hoàn toàn được phép! Product Backlog là tài liệu sống luôn tiến hóa; PO có thể thêm, sửa, sắp xếp lại ưu tiên trên Product Backlog bất cứ lúc nào mà không làm xáo trộn Sprint Goal đang chạy.',
          'Chỉ được phép thêm vào Product Backlog vào ngày cuối tháng.',
          'Phải xin phép toàn bộ Developers mới được ghi thêm ý tưởng vào Product Backlog.',
        ],
        correctIndex: 1,
        explanation:
          'Product Backlog luôn mở và tiến hóa liên tục (chỉ có Sprint Goal đang chạy mới cần được bảo vệ khỏi xáo trộn phá vỡ mục tiêu).',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-16',
        question: 'Phát biểu nào ĐÚNG về vai trò của Scrum Master đối với tổ chức (Organization)?',
        options: [
          'Scrum Master chỉ làm thư ký ghi biên bản và đặt phòng họp cho nhóm.',
          'Scrum Master phục vụ cả Scrum Team, Product Owner và Tổ chức: dẫn dắt, huấn luyện việc áp dụng Scrum, xóa bỏ rào cản giữa các bên liên quan và nhóm Scrum.',
          'Scrum Master là quản lý trực tiếp có quyền sa thải Developers.',
          'Scrum Master không bao giờ được nói chuyện với lãnh đạo tổ chức.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide 2020 nêu rõ Scrum Master phục vụ 3 đối tượng: Scrum Team, Product Owner và Tổ chức (chứ không phải "thư ký nhóm" hay "cảnh sát quy trình").',
        topic: 'AS.2 Vận hành Scrum',
      },
      {
        id: 'ase-17',
        question: 'Khi nào một Product Backlog Item (PBI) có thể bị xóa khỏi Product Backlog?',
        options: [
          'Không bao giờ được xóa, đã viết vào là phải làm hết.',
          'Bất cứ lúc nào Product Owner nhận thấy nó không còn mang lại giá trị hoặc không còn phù hợp với Product Goal.',
          'Chỉ sau khi lập trình viên đã code thử.',
          'Chỉ khi khách hàng hết ngân sách.',
        ],
        correctIndex: 1,
        explanation:
          'Một trong những cách tối đa hóa giá trị tốt nhất của PO là dám nói "Không" và loại bỏ các hạng mục ít giá trị khỏi Product Backlog (nguyên tắc #10 Agile: Tối đa hóa lượng công việc KHÔNG cần làm).',
        topic: 'AS.1 & AS.3 Backlog',
      },
      {
        id: 'ase-18',
        question: 'Biểu đồ Sprint Burndown Chart cho thấy đường thực tế nằm ngang suốt 5 ngày đầu tiên của Sprint 2 tuần. Nguyên nhân khả dĩ nhất cần kiểm tra là gì?',
        options: [
          'Đội đang làm việc quá nhanh nên đường nằm ngang.',
          'Các Story/Task đang quá to nên suốt 5 ngày chưa có hạng mục nào hoàn thành trọn vẹn, hoặc đội đang gặp trở ngại bị kẹt chưa được tháo gỡ.',
          'Burndown Chart bị lỗi phông chữ.',
          'Không cần quan tâm vì ngày cuối đường sẽ tự rơi xuống 0.',
        ],
        correctIndex: 1,
        explanation:
          'Đường Burndown nằm ngang nhiều ngày là tín hiệu cảnh báo sớm: thẻ việc quá lớn chưa cắt nhỏ hoặc có điểm nghẽn đang chặn việc hoàn thành (ví dụ tắc review/testing).',
        topic: 'AS.3 Ước lượng & Theo dõi',
      },
      {
        id: 'ase-19',
        question: 'Nếu một hạng mục cải tiến quy trình cực kỳ quan trọng được thống nhất trong buổi Sprint Retrospective, đội nên xử lý nó ra sao để tránh "nói xong rồi quên"?',
        options: [
          'Ghi vào biên bản rồi cất vào thư mục lưu trữ.',
          'Đưa trực tiếp hành động cải tiến có tác động lớn nhất vào Sprint Backlog của Sprint kế tiếp để thực hiện và kiểm chứng rõ ràng.',
          'Chờ đến cuối năm tổng kết một thể.',
          'Giao toàn bộ cho Scrum Master tự làm một mình.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum Guide 2020 gợi ý: "Những cải tiến có tác động lớn nhất được xử lý sớm nhất có thể. Chúng thậm chí có thể được thêm vào Sprint Backlog cho Sprint tiếp theo."',
        topic: 'AS.2 & AS.4 Retrospective',
      },
      {
        id: 'ase-20',
        question: 'Đội Scrum đã áp dụng đầy đủ các buổi họp đúng giờ, nhưng sản phẩm ra mắt sau 6 Sprint vẫn không ai dùng vì không giải quyết đúng bài toán người dùng. Vấn đề cốt lõi nằm ở đâu?',
        options: [
          'Vì đội họp Daily Scrum ít hơn 15 phút.',
          'Đội chỉ làm "Scrum hình thức" (Mechanical Scrum) mà thiếu thực chứng giá trị kinh doanh — thiếu tương tác khách hàng thật ở Sprint Review, thiếu Validation và Product Goal thiếu sắc bén.',
          'Vì đội không dùng Waterfall.',
          'Vì Story Point đặt quá nhỏ.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum là khung để sớm phơi bày sự thật về giá trị sản phẩm. Nếu chạy đủ sự kiện nhưng không kiểm chứng giả thuyết giá trị với người dùng thật (Validation), đó chỉ là "làm nhanh thứ không ai cần".',
        topic: 'AS.1 & AS.4 Thực chiến',
      },
    ],
  },

  'as-5': {
    id: 'as-5',
    title: 'Quiz AS.5: Lean (7 Lãng phí), Scaling Agile & Văn hóa Đội từ xa',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành trọn vẹn chuyên đề Agile & Scrum.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'as5-q1',
        question: 'Theo tư duy Lean Software Development (7 Lãng phí), việc viết đặc tả cực kỳ chi tiết cho tính năng 6 tháng nữa mới làm rồi để nằm trong thư mục là loại lãng phí nào?',
        options: [
          'Công việc dở dang (Partially Done Work)',
          'Chuyển đổi ngữ cảnh (Task Switching)',
          'Lỗi phần mềm (Defects)',
          'Không có lãng phí nào vì viết càng sớm càng tốt.',
        ],
        correctIndex: 0,
        explanation:
          'Đặc tả viết xong nằm chờ nhiều tháng chưa biến thành phần mềm chạy được là Partially Done Work — dễ lỗi thời và không sinh ra giá trị cho khách hàng.',
        source: 'Poppendieck – Lean Software Development; Agile For Dummies Part 2',
      },
      {
        id: 'as5-q2',
        question: 'Việc chuyển công việc qua nhiều tầng chuyên môn rời rạc (BA → Architect → Dev → QA) khiến mỗi lần bàn giao mất đi một phần ngữ cảnh ban đầu được gọi là loại lãng phí Lean nào?',
        options: ['Extra Features', 'Handoffs (Bàn giao nhiều tầng)', 'Defects', 'Relearning'],
        correctIndex: 1,
        explanation:
          'Handoffs làm thất thoát tri thức qua từng lần chuyển tay. Đội đa chức năng (Cross-functional) trong Agile ra đời để cắt bỏ lãng phí này.',
        source: 'Lean Software Development; Agile For Dummies',
      },
      {
        id: 'as5-q3',
        question: 'Khi mở rộng quy mô lên 4 Scrum Team cùng xây dựng MỘT sản phẩm phần mềm chung, nguyên tắc bắt buộc theo Scrum / Nexus / LeSS là gì?',
        options: [
          'Mỗi đội có 1 Product Owner và 1 Product Backlog hoàn toàn riêng biệt.',
          'Dùng chung 1 Product Backlog, 1 Product Owner duy nhất, 1 chuẩn Definition of Done tối thiểu chung và tích hợp thành 1 Increment thống nhất.',
          'Gom tất cả 35 người vào chung 1 buổi Daily Scrum 15 phút.',
          'Bỏ hoàn toàn Sprint Review.',
        ],
        correctIndex: 1,
        explanation:
          'Dù nhiều nhóm cùng làm, sản phẩm vẫn chỉ là một — nên cần 1 Product Backlog chung, 1 PO duy nhất và chuẩn DoD chung để tạo 1 Increment tích hợp hoàn chỉnh.',
        source: 'Scrum Guide 2020; Nexus Guide',
      },
      {
        id: 'as5-q4',
        question: 'Mục đích chính của buổi họp Scrum of Scrums (SoS) khi có nhiều đội Agile phối hợp là gì?',
        options: [
          'Để giám đốc chấm công từng lập trình viên của cả 5 đội.',
          'Để đại diện các đội đồng bộ tiến độ tích hợp, làm rõ các phụ thuộc chéo (dependencies) và tháo gỡ trở ngại giữa các đội.',
          'Thay thế hoàn toàn Daily Scrum trong từng đội.',
          'Viết lại toàn bộ Product Vision mỗi ngày.',
        ],
        correctIndex: 1,
        explanation:
          'Scrum of Scrums tập trung vào điều phối liên đội (cross-team dependencies & integration), không thay thế Daily Scrum nội bộ của từng đội.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 5',
      },
      {
        id: 'as5-q5',
        question: 'Thực hành nào quan trọng nhất giúp một đội Agile làm việc từ xa (Remote/Distributed) giữ được sự đồng bộ và tinh thần cộng tác?',
        options: [
          'Chỉ giao tiếp qua email dài và tắt hoàn toàn camera khi họp.',
          'Thiết lập khung giờ chồng lấn cốt lõi (Core overlap hours), bảng công việc số minh bạch thời gian thực và Thỏa thuận làm việc chung (Working Agreement).',
          'Bỏ Daily Scrum và Retrospective vì khác địa điểm.',
          'Cài phần mềm chụp màn hình nhân viên mỗi 5 phút.',
        ],
        correctIndex: 1,
        explanation:
          'Đội phân tán hiệu quả nhờ minh bạch công cụ số, khung giờ giao tiếp trực tiếp cố định và văn hóa tin tưởng dựa trên kết quả thay vì giám sát vi mô.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 5',
      },
      {
        id: 'as5-q6',
        question: 'Theo Part of Tens của Agile Project Management For Dummies, yếu tố nào là nguyên nhân hàng đầu khiến chuyển đổi Agile thất bại dù đội đã thuộc hết lý thuyết Scrum?',
        options: [
          'Dùng giấy ghi chú màu vàng thay vì màu xanh.',
          'Thiếu sự thấu hiểu và ủng hộ thực chất từ cấp lãnh đạo (vẫn áp đặt KPI, văn hóa đổ lỗi và khóa cứng cả 3 đỉnh Tam giác Sắt kiểu cũ).',
          'Đặt độ dài Sprint là 2 tuần thay vì 3 tuần.',
          'Đội có 7 người thay vì 9 người.',
        ],
        correctIndex: 1,
        explanation:
          'Văn hóa và sự đồng hành từ lãnh đạo (Executive Sponsorship) quyết định đội có thật sự được tự quản, giữ tâm lý an toàn và vận hành Tam giác Đảo ngược hay không.',
        source: 'Agile Project Management For Dummies (4th Ed.), Part 5 & Part 6',
      },
    ],
  },

  m2: {
    id: 'm2',
    title: 'Quiz M2: Lập kế hoạch, Khả thi TELOS, Stakeholder, PERT & Rủi ro',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M2.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm2-q1',
        question: '5 chữ cái trong mô hình phân tích khả thi TELOS đại diện cho những khía cạnh nào?',
        options: [
          'Testing, Execution, Leadership, Operations, Security',
          'Technical, Economic, Legal, Operational, Schedule',
          'Time, Effort, Logic, Output, Scope',
          'Team, Environment, License, Organization, Strategy',
        ],
        correctIndex: 1,
        explanation: 'TELOS = Technical (Kỹ thuật), Economic (Kinh tế), Legal (Pháp lý), Operational (Vận hành), Schedule (Tiến độ).',
        source: 'BABOK v3; PMBOK',
      },
      {
        id: 'm2-q2',
        question: 'Vì sao việc ghi rõ danh mục Out-of-Scope (những gì KHÔNG làm) trong Project Charter lại cực kỳ quan trọng?',
        options: [
          'Để làm tài liệu dài thêm vài trang.',
          'Giúp thống nhất ranh giới kỳ vọng giữa các bên ngay từ đầu và tạo căn cứ rõ ràng để chặn Scope Creep.',
          'Để miễn trừ trách nhiệm nếu phần mềm có lỗi.',
          'Vì pháp luật yêu cầu mọi phần mềm phải có Out-of-Scope.',
        ],
        correctIndex: 1,
        explanation: 'Ghi rõ Out-of-Scope loại bỏ các giả định ngầm ("tôi tưởng cái đó có sẵn") và bảo vệ phạm vi cam kết của dự án.',
        source: 'PMBOK Guide',
      },
      {
        id: 'm2-q3',
        question: 'Theo ma trận Power / Interest Grid, nhóm bên liên quan có Quyền lực CAO nhưng Mức độ quan tâm hàng ngày THẤP (ví dụ: Phòng Tài chính, Pháp chế) nên được quản lý theo chiến lược nào?',
        options: [
          'Manage Closely (Quản lý sát sao hằng ngày)',
          'Keep Satisfied (Giữ hài lòng — tham vấn đúng mốc quan trọng, không làm phiền tiểu tiết)',
          'Monitor (Theo dõi tối thiểu)',
          'Bỏ qua hoàn toàn không cần liên hệ',
        ],
        correctIndex: 1,
        explanation: 'High Power + Low Interest → Keep Satisfied (cung cấp thông tin đúng trọng tâm và đáp ứng yêu cầu tuân thủ để họ không chặn dự án ở phút chót).',
        source: 'PMBOK; BABOK v3',
      },
      {
        id: 'm2-q4',
        question: 'Một đầu việc được ước lượng theo PERT 3 điểm: Thuận lợi nhất O = 3 ngày, Khả dĩ nhất M = 6 ngày, Xấu nhất P = 15 ngày. Giá trị kỳ vọng E = (O + 4M + P) / 6 bằng bao nhiêu?',
        options: ['6 ngày', '7 ngày', '8 ngày', '9 ngày'],
        correctIndex: 1,
        explanation: 'E = (3 + 4×6 + 15) / 6 = (3 + 24 + 15) / 6 = 42 / 6 = 7 ngày.',
        source: 'PMBOK Guide',
      },
      {
        id: 'm2-q5',
        question: 'Việc mua bảo hiểm an ninh mạng hoặc ký hợp đồng SLA có điều khoản bồi thường với nhà cung cấp hạ tầng thuộc chiến lược ứng phó rủi ro nào?',
        options: ['Avoid (Tránh)', 'Mitigate (Giảm thiểu)', 'Transfer (Chuyển giao)', 'Accept (Chấp nhận)'],
        correctIndex: 2,
        explanation: 'Chuyển gánh nặng tài chính/hậu quả khi rủi ro xảy ra sang một bên thứ ba chính là chiến lược Transfer.',
        source: 'PMBOK Guide',
      },
      {
        id: 'm2-q6',
        question: 'Khả thi Vận hành (Operational Feasibility) trong TELOS đánh giá điều gì?',
        options: [
          'Chi phí mua máy chủ đám mây có rẻ không.',
          'Khi hệ thống hoàn thành, người dùng và tổ chức có sẵn sàng, đủ năng lực và chấp nhận vận hành nó trong quy trình thực tế hay không.',
          'Ngôn ngữ lập trình có chạy nhanh không.',
          'Thời gian code có kịp 3 tháng không.',
        ],
        correctIndex: 1,
        explanation: 'Nhiều phần mềm rất tốt về kỹ thuật vẫn thất bại vì nhân viên phản đối thay đổi hoặc quy trình vận hành thực tế không phù hợp — đó là Operational Feasibility.',
        source: 'BABOK v3',
      },
    ],
  },

  'm3-4': {
    id: 'm3-4',
    title: 'Quiz M3–M4: Khơi gợi, Yêu cầu FR/NFR (ISO 25010), SRS (ISO 29148) & MoSCoW',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M3–M4.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm34-q1',
        question: 'Kỹ thuật khơi gợi yêu cầu nào hiệu quả nhất khi người dùng thực hiện công việc theo thói quen hằng ngày và thường quên mô tả các thao tác phụ/ngoại lệ trong buổi phỏng vấn?',
        options: [
          'Gửi phiếu khảo sát trắc nghiệm',
          'Quan sát thực tế tại nơi làm việc (Observation / Job Shadowing)',
          'Chỉ đọc lại hợp đồng mua sắm',
          'Tự đoán quy trình mà không cần gặp người dùng',
        ],
        correctIndex: 1,
        explanation: 'Observation giúp BA tận mắt thấy các bước ẩn, cách xử lý tình huống bất ngờ và thao tác thực tế mà người dùng hay bỏ sót khi kể lại.',
        source: 'BABOK v3 Ch. 4',
      },
      {
        id: 'm34-q2',
        question: 'Câu nào sau đây là Yêu cầu CHỨC NĂNG (Functional Requirement)?',
        options: [
          'Hệ thống phải phản hồi yêu cầu tìm kiếm trong dưới 1,5 giây.',
          'Hệ thống tự động gửi email nhắc hạn trả sách cho bạn đọc trước ngày hết hạn 48 giờ.',
          'Hệ thống đạt uptime tối thiểu 99,5%.',
          'Mọi dữ liệu truyền tải phải mã hóa bằng TLS 1.3.',
        ],
        correctIndex: 1,
        explanation: 'Gửi email nhắc hạn là hành vi cụ thể hệ thống LÀM GÌ (Functional). Ba phương án còn lại là Yêu cầu Phi chức năng (Hiệu năng, Độ tin cậy, Bảo mật).',
        source: 'ISO/IEC/IEEE 29148; Wiegers',
      },
      {
        id: 'm34-q3',
        question: 'Đặc tính chất lượng mới nào đã được chính thức bổ sung nâng mô hình chất lượng sản phẩm phần mềm ISO/IEC 25010:2023 lên 9 đặc tính?',
        options: ['Safety (An toàn)', 'Marketing', 'Profitability', 'Storytelling'],
        correctIndex: 0,
        explanation: 'ISO/IEC 25010:2023 bổ sung đặc tính Safety (An toàn — khả năng tránh gây nguy hại cho con người, tài sản, môi trường) vào mô hình chất lượng sản phẩm.',
        source: 'ISO/IEC 25010:2023',
      },
      {
        id: 'm34-q4',
        question: 'Câu yêu cầu trong SRS: "Hệ thống phải dễ sử dụng và xử lý nhanh phần lớn yêu cầu" vi phạm trực tiếp tiêu chí nào của ISO/IEC/IEEE 29148?',
        options: [
          'Verifiable & Unambiguous (Có thể kiểm chứng & Không mơ hồ)',
          'Chỉ sai lỗi chính tả tiếng Việt',
          'Vi phạm quy tắc đặt tên bảng cơ sở dữ liệu',
          'Không vi phạm gì',
        ],
        correctIndex: 0,
        explanation: '"Dễ sử dụng", "nhanh", "phần lớn" đều là từ mơ hồ chủ quan — QA không thể lập kịch bản test khách quan để kết luận Đạt hay Không đạt.',
        source: 'ISO/IEC/IEEE 29148:2018; Wiegers',
      },
      {
        id: 'm34-q5',
        question: 'Trong kỹ thuật ưu tiên MoSCoW, nhóm "W — Won\'t have (this time)" có ý nghĩa gì?',
        options: [
          'Xóa bỏ vĩnh viễn và cấm không bao giờ làm.',
          'Thống nhất minh bạch là KHÔNG làm trong đợt phát hành hiện tại, nhưng vẫn lưu lại trong backlog để cân nhắc cho các đợt sau.',
          'Bắt buộc phải làm trước khi Go-Live.',
          'Làm nếu lập trình viên thích.',
        ],
        correctIndex: 1,
        explanation: 'Won\'t have (this time) giúp quản lý kỳ vọng rõ ràng với Stakeholders mà không gây cảm giác ý tưởng của họ bị bác bỏ hoàn toàn.',
        source: 'BABOK v3',
      },
      {
        id: 'm34-q6',
        question: 'Tại sao Yêu cầu Phi chức năng (NFR) như Bảo mật, Hiệu năng và Độ tin cậy cần được xác định SỚM thay vì để sau khi code xong mới bổ sung?',
        options: [
          'Vì NFR tác động trực tiếp đến thiết kế kiến trúc tổng thể; sửa kiến trúc sau khi đã code xong cực kỳ tốn kém.',
          'Vì NFR rất ngắn chỉ mất 1 phút viết.',
          'Vì Dev chỉ đọc NFR chứ không đọc yêu cầu chức năng.',
          'Không cần xác định sớm, có thể thêm sau khi Go-Live.',
        ],
        correctIndex: 0,
        explanation: 'Yêu cầu về tải đồng thời, bảo mật, mã hóa hay độ sẵn sàng chi phối trực tiếp việc chọn kiến trúc, cơ sở dữ liệu và hạ tầng ngay từ đầu.',
        source: 'Sommerville Ch. 4; Wiegers Ch. 14',
      },
    ],
  },

  'm5-6': {
    id: 'm5-6',
    title: 'Quiz M5–M6: Mô hình hóa (BPMN, UML, ERD) & Thiết kế Giải pháp',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M5–M6.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm56-q1',
        question: 'Sơ đồ nào phù hợp nhất để mô tả một quy trình nghiệp vụ đi qua 4 bộ phận khác nhau (Bạn đọc → Thủ thư → Kế toán → Giám đốc) kèm các cổng rẽ nhánh điều kiện?',
        options: [
          'BPMN 2.0 (với các làn bơi Swimlanes)',
          'ERD (Entity-Relationship Diagram)',
          'Class Diagram',
          'Burndown Chart',
        ],
        correctIndex: 0,
        explanation: 'BPMN 2.0 với Pools & Swimlanes được sinh ra để mô tả quy trình nghiệp vụ đa vai trò dễ hiểu cho cả người làm nghiệp vụ lẫn kỹ thuật.',
        source: 'OMG BPMN 2.0.2; BABOK v3',
      },
      {
        id: 'm56-q2',
        question: 'Để mô tả trình tự gọi API giữa Giao diện Web → LibCore Backend → Dịch vụ SSO → Cơ sở dữ liệu theo trục thời gian, loại sơ đồ UML nào chuẩn nhất?',
        options: ['Use Case Diagram', 'Sequence Diagram', 'ERD', 'Component Diagram'],
        correctIndex: 1,
        explanation: 'Sequence Diagram thể hiện trực quan thứ tự thông điệp/lời gọi (request/response) trao đổi giữa các đối tượng/hệ thống theo dòng thời gian.',
        source: 'Martin Fowler – UML Distilled',
      },
      {
        id: 'm56-q3',
        question: 'Sự khác biệt chính giữa Thiết kế Tổng thể (HLD) và Thiết kế Chi tiết (LLD) là gì?',
        options: [
          'HLD tập trung vào kiến trúc tổng thể, phân hệ và tích hợp giữa chúng; LLD đi sâu vào cấu trúc bảng DB, đặc tả chi tiết từng API và thuật toán từng module.',
          'HLD chỉ vẽ màu đẹp còn LLD vẽ đen trắng.',
          'HLD do QA viết, LLD do khách hàng viết.',
          'Hai khái niệm hoàn toàn giống nhau.',
        ],
        correctIndex: 0,
        explanation: 'HLD xác định bức tranh kiến trúc và giao diện giữa các module (đầu vào Integration Test); LLD xác định chi tiết cài đặt bên trong từng thành phần (đầu vào Unit Test).',
        source: 'SWEBOK v4; Sommerville Ch. 6',
      },
      {
        id: 'm56-q4',
        question: 'Vì sao với một dự án quy mô vừa như Hệ thống Thư viện (1 đội 6 người), kiến trúc Modular Monolith thường được khuyến nghị hơn Microservices ngay từ ngày đầu?',
        options: [
          'Vì Monolith không cần cơ sở dữ liệu.',
          'Vì Modular Monolith đơn giản, dễ triển khai, dễ đảm bảo toàn vẹn giao dịch và tránh độ phức tạp khổng lồ về mạng/vận hành phân tán của Microservices.',
          'Vì Microservices không chạy được trên web.',
          'Vì Monolith cấm viết Unit Test.',
        ],
        correctIndex: 1,
        explanation: 'Microservices mang lại chi phí vận hành phân tán rất cao (mạng, tracing, eventual consistency). Bắt đầu bằng Modular Monolith sạch là lựa chọn thực dụng và ít rủi ro nhất.',
        source: 'SWEBOK v4 – Software Architecture',
      },
      {
        id: 'm56-q5',
        question: 'Nguyên tắc bảo mật nào yêu cầu người dùng hoặc dịch vụ chỉ được cấp đúng quyền tối thiểu cần thiết để thực hiện công việc của mình?',
        options: [
          'Principle of Least Privilege (Đặc quyền tối thiểu)',
          'Big Bang Access',
          'Open Access Policy',
          'Horizontal Slicing',
        ],
        correctIndex: 0,
        explanation: 'Least Privilege (kết hợp phân quyền theo vai trò RBAC) giới hạn tối đa thiệt hại nếu một tài khoản bị lộ hoặc thao tác nhầm.',
        source: 'SWEBOK v4 – Software Security; OWASP',
      },
      {
        id: 'm56-q6',
        question: 'Một ứng dụng chỉ kiểm tra điều kiện "số tiền phạt không được âm" bằng JavaScript ở phía trình duyệt (Frontend) mà không kiểm tra lại ở Backend API. Điều này có an toàn không?',
        options: [
          'Hoàn toàn an toàn vì trình duyệt đã chặn rồi.',
          'Không an toàn! Kẻ tấn công có thể gọi trực tiếp API bằng công cụ ngoài để gửi số âm — bắt buộc phải kiểm tra hợp lệ ở phía Server (Server-side Validation).',
          'Chỉ cần đổi màu nút bấm là an toàn.',
          'Chỉ cần thêm hướng dẫn sử dụng nhắc người dùng không nhập số âm.',
        ],
        correctIndex: 1,
        explanation: 'Validation ở Frontend chỉ để cải thiện trải nghiệm người dùng; Validation và kiểm tra quyền ở phía Server mới là lớp bảo mật thật sự.',
        source: 'OWASP; Security by Design',
      },
    ],
  },

  m7: {
    id: 'm7',
    title: 'Quiz M7: Phát triển, Git Branching, Code Review, CI/CD & Nợ kỹ thuật',
    description: 'Đạt tối thiểu 80% (4/5 câu) để hoàn thành M7.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm7-q1',
        question: 'Chiến lược phân nhánh Git nào khuyến khích lập trình viên làm trên nhánh ngắn (1–2 ngày) và gộp liên tục về nhánh chính `main` qua CI để tránh xung đột mã nguồn lớn?',
        options: ['Trunk-Based Development', 'Long-lived Feature Branching 6 tháng', 'Copy-paste thư mục ZIP', 'Không dùng Git'],
        correctIndex: 0,
        explanation: 'Trunk-Based Development là thực hành cốt lõi hỗ trợ Continuous Integration (CI) và giảm thiểu xung đột khi gộp nhánh.',
        source: 'The DevOps Handbook; SWEBOK v4',
      },
      {
        id: 'm7-q2',
        question: 'Điểm khác biệt duy nhất giữa Continuous Delivery và Continuous Deployment là gì?',
        options: [
          'Continuous Delivery không có kiểm thử tự động.',
          'Continuous Delivery giữ bước duyệt thủ công trước khi đẩy lên Production; Continuous Deployment tự động đẩy thẳng lên Production nếu mọi kiểm thử đều xanh.',
          'Continuous Deployment chỉ dành cho ứng dụng di động.',
          'Hai khái niệm hoàn toàn giống nhau.',
        ],
        correctIndex: 1,
        explanation: 'Cả hai đều tự động hóa build và kiểm thử, nhưng Continuous Delivery dừng ở nút bấm phê duyệt phát hành còn Continuous Deployment phát hành tự động hoàn toàn.',
        source: 'The DevOps Handbook; SWEBOK v4',
      },
      {
        id: 'm7-q3',
        question: 'Vì sao các Pull Request (PR) gửi đi Code Review nên được giữ ở kích thước nhỏ gọn (< 300–400 dòng)?',
        options: [
          'Vì GitHub không cho phép đẩy quá 400 dòng.',
          'Giúp người duyệt tập trung phát hiện lỗi logic/bảo mật sâu thay vì duyệt qua loa ("LGTM") vì quá tải thông tin.',
          'Để tăng số lượng PR cho đẹp báo cáo KPI.',
          'Để bỏ qua bước chạy Unit Test.',
        ],
        correctIndex: 1,
        explanation: 'Nghiên cứu thực nghiệm về Code Review cho thấy khả năng phát hiện lỗi giảm mạnh khi vượt quá ~400 dòng code trong một lần duyệt.',
        source: 'SWEBOK v4 – Software Construction',
      },
      {
        id: 'm7-q4',
        question: 'Hoạt động cải tiến cấu trúc bên trong mã nguồn để dễ đọc, dễ bảo trì hơn MÀ KHÔNG làm thay đổi hành vi bên ngoài của phần mềm gọi là gì?',
        options: ['Refactoring', 'Scope Creep', 'Hotfix', 'Decommissioning'],
        correctIndex: 0,
        explanation: 'Refactoring (được bảo vệ bởi bộ Unit Test tự động) là cách chính để trả Nợ kỹ thuật và giữ chất lượng thiết kế lâu dài.',
        source: 'Martin Fowler – Refactoring; Sommerville',
      },
      {
        id: 'm7-q5',
        question: 'Hậu quả tất yếu nếu một đội liên tục vay "Nợ kỹ thuật" mà không bao giờ dành thời gian trả nợ là gì?',
        options: [
          'Tốc độ ra tính năng mới tăng gấp đôi sau mỗi năm.',
          'Chi phí bảo trì tăng vọt, sửa 1 chỗ gây lỗi nhiều chỗ khác và tốc độ phát triển giảm chậm nghiêm trọng.',
          'Không cần đội QA nữa.',
          'Tự động biến mất sau 1 năm.',
        ],
        correctIndex: 1,
        explanation: 'Nợ kỹ thuật tích tụ giống lãi kép: làm mã nguồn giòn vỡ, chậm tiến độ và tăng tỷ lệ lỗi hồi quy.',
        source: 'SWEBOK v4; Ward Cunningham',
      },
    ],
  },

  m8: {
    id: 'm8',
    title: 'Quiz M8: Kiểm thử Phần mềm Chuyên sâu (Chuẩn ISTQB CTFL v4.0)',
    description: 'Đạt tối thiểu 80% (6/7 câu) để làm chủ kiến thức kiểm thử ISTQB.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm8-q1',
        question: 'Theo 7 nguyên tắc kiểm thử của ISTQB CTFL v4.0, "Nghịch lý thuốc trừ sâu" (Tests wear out / Pesticide paradox) nhắc nhở điều gì?',
        options: [
          'Chỉ cần viết 1 bộ test case thật tốt ở tháng đầu rồi chạy lại mãi mãi là đủ.',
          'Nếu lặp đi lặp lại cùng một bộ test case cũ, chúng sẽ dần không còn phát hiện ra lỗi mới → cần thường xuyên rà soát, cập nhật và bổ sung kịch bản test mới.',
          'Kiểm thử tự động luôn vô dụng.',
          'Không cần chạy kiểm thử hồi quy.',
        ],
        correctIndex: 1,
        explanation: 'Bộ test cũ rất tốt cho kiểm thử hồi quy nhưng sẽ "nhờn" không bắt được các lỗi mới phát sinh; cần liên tục làm mới dữ liệu và kịch bản kiểm thử.',
        source: 'ISTQB CTFL v4.0 Ch. 1',
      },
      {
        id: 'm8-q2',
        question: 'Hoạt động nào dưới đây là Kiểm thử TĨNH (Static Testing)?',
        options: [
          'Nhập dữ liệu sai vào ô mật khẩu trên web để xem thông báo lỗi.',
          'Tổ chức buổi rà soát tài liệu SRS và Code Review trước khi chạy phần mềm.',
          'Chạy kịch bản tải 500 người dùng đồng thời trên môi trường Staging.',
          'Chạy bộ kiểm thử tự động Selenium trên trình duyệt Chrome.',
        ],
        correctIndex: 1,
        explanation: 'Static Testing đánh giá sản phẩm công việc (SRS, thiết kế, code) mà KHÔNG thực thi phần mềm.',
        source: 'ISTQB CTFL v4.0 Ch. 3',
      },
      {
        id: 'm8-q3',
        question: 'Quy định: sinh viên được đặt giữ tối thiểu 1 cuốn và tối đa 3 cuốn sách cùng lúc (số nguyên). Bộ giá trị đầu vào nào theo Phân tích Giá trị biên 2 điểm (2-value BVA) là CHÍNH XÁC nhất?',
        options: ['1, 2, 3', '0, 1, 3, 4', '-1, 0, 2, 5', '1, 3'],
        correctIndex: 1,
        explanation: 'Miền hợp lệ [1..3] có biên dưới là 1 (sát ngoài là 0) và biên trên là 3 (sát ngoài là 4) → {0, 1, 3, 4}.',
        source: 'ISTQB CTFL v4.0 Ch. 4',
      },
      {
        id: 'm8-q4',
        question: 'Kỹ thuật thiết kế test hộp đen nào phù hợp NHẤT khi một nghiệp vụ phụ thuộc vào sự kết hợp phức tạp của 4 điều kiện Đúng/Sai khác nhau để quyết định nhiều mức chiết khấu/phạt?',
        options: [
          'Phân tích giá trị biên (BVA)',
          'Bảng quyết định (Decision Table Testing)',
          'Kiểm thử tải (Load Testing)',
          'Kiểm thử khám phá tự do không ghi chép',
        ],
        correctIndex: 1,
        explanation: 'Decision Table lập ma trận đầy đủ các tổ hợp điều kiện và hành động tương ứng, đảm bảo không bỏ sót bất kỳ tổ hợp quy tắc nghiệp vụ nào.',
        source: 'ISTQB CTFL v4.0 Ch. 4',
      },
      {
        id: 'm8-q5',
        question: 'Sau khi lập trình viên sửa lỗi tính tiền phạt, QA chạy lại đúng Test Case TC-15 đã từng thất bại để chắc chắn lỗi đã hết, rồi chạy thêm 40 Test Case của các chức năng Mượn/Trả/Báo cáo xung quanh. Hai hoạt động này lần lượt là gì?',
        options: [
          'Confirmation Testing (Re-testing) và Regression Testing (Kiểm thử hồi quy).',
          'Unit Testing và UAT.',
          'Static Testing và Performance Testing.',
          'Smoke Testing và Security Testing.',
        ],
        correctIndex: 0,
        explanation: 'Chạy lại test case của lỗi vừa sửa = Confirmation Testing; chạy kiểm tra các vùng lân cận không bị ảnh hưởng ngoài ý muốn = Regression Testing.',
        source: 'ISTQB CTFL v4.0 Ch. 2',
      },
      {
        id: 'm8-q6',
        question: 'Lỗi nào sau đây là ví dụ điển hình của **Low Severity (Mức nghiêm trọng kỹ thuật thấp)** nhưng **High Priority (Mức ưu tiên sửa cao)**?',
        options: [
          'Nút thanh toán bị sập màn hình trắng với 100% người dùng.',
          'Tên thương hiệu công ty trên trang đăng nhập bị gõ sai chính tả ngay trước ngày họp báo ra mắt sản phẩm.',
          'Lỗi hiển thị lệch 1 pixel ở một màn hình cấu hình nội bộ ít ai mở.',
          'Lỗi mất toàn bộ dữ liệu bảng người dùng.',
        ],
        correctIndex: 1,
        explanation: 'Sai chính tả logo không làm hỏng chức năng hệ thống (Low Severity), nhưng ảnh hưởng trực tiếp uy tín trước ngày ra mắt nên phải sửa gấp (High Priority).',
        source: 'ISTQB CTFL v4.0 Ch. 5',
      },
      {
        id: 'm8-q7',
        question: 'Mục tiêu chính của User Acceptance Testing (UAT) là gì?',
        options: [
          'Tìm càng nhiều lỗi cú pháp code càng tốt.',
          'Xây dựng niềm tin với đại diện người dùng/nghiệp vụ rằng hệ thống đáp ứng đúng nhu cầu thực tế và sẵn sàng đưa vào vận hành.',
          'Thay thế hoàn toàn Unit Test và System Test để tiết kiệm chi phí.',
          'Đánh giá năng lực lập trình của từng kỹ sư.',
        ],
        correctIndex: 1,
        explanation: 'Theo ISTQB CTFL v4.0, UAT tập trung vào Validation và xây dựng sự tin tưởng sẵn sàng sử dụng (confidence in fitness for use), không phải giai đoạn đi săn bug thay cho System Test.',
        source: 'ISTQB CTFL v4.0 Ch. 2',
      },
    ],
  },

  'm9-10': {
    id: 'm9-10',
    title: 'Quiz M9–M10: Triển khai (Go-Live), 4 Loại Bảo trì, ITIL & Ngừng Hệ thống',
    description: 'Đạt tối thiểu 80% (5/6 câu) để hoàn thành M9–M10.',
    passThreshold: 0.8,
    questions: [
      {
        id: 'm910-q1',
        question: 'Chiến lược triển khai nào duy trì 2 môi trường giống hệt nhau (1 bản cũ đang chạy, 1 bản mới triển khai song song) để chuyển lưu lượng tức thì gần như không downtime và Rollback trong vài giây nếu lỗi?',
        options: ['Big Bang', 'Blue–Green Deployment', 'Parallel manual entry', 'Waterfall Release'],
        correctIndex: 1,
        explanation: 'Blue–Green Deployment cho phép kiểm chứng xong trên Green rồi chuyển router từ Blue sang Green tức thì (downtime ≈ 0) và quay lui về Blue cực nhanh.',
        source: 'The DevOps Handbook; SWEBOK v4',
      },
      {
        id: 'm910-q2',
        question: 'Chiến lược triển khai chuyển dần 5% → 20% → 50% → 100% lưu lượng người dùng sang phiên bản mới kết hợp theo dõi tỷ lệ lỗi thời gian thực là gì?',
        options: ['Canary Release', 'Big Bang', 'Throwaway Prototype', 'Cold Cutover'],
        correctIndex: 0,
        explanation: 'Canary Release (lấy cảm hứng từ chim hoàng yến trong hầm mỏ) giúp cô lập bán kính ảnh hưởng nếu bản mới phát sinh lỗi ẩn trên môi trường thật.',
        source: 'The DevOps Handbook; SWEBOK v4',
      },
      {
        id: 'm910-q3',
        question: 'Sau khi Go-Live, đội kỹ thuật chủ động nâng cấp phiên bản thư viện bảo mật sắp hết hỗ trợ và tái cấu trúc đoạn code cũ để ngăn ngừa sự cố trong tương lai. Đây là loại bảo trì nào?',
        options: [
          'Corrective Maintenance',
          'Adaptive Maintenance',
          'Perfective Maintenance',
          'Preventive Maintenance (Bảo trì phòng ngừa)',
        ],
        correctIndex: 3,
        explanation: 'Cải thiện khả năng bảo trì, vá rủi ro tiềm ẩn trước khi sự cố xảy ra chính là Preventive Maintenance (ISO/IEC 14764).',
        source: 'ISO/IEC 14764; SWEBOK v4',
      },
      {
        id: 'm910-q4',
        question: 'Trong quản trị vận hành ITIL, sự khác nhau giữa Incident Management và Problem Management là gì?',
        options: [
          'Incident tập trung khôi phục dịch vụ bình thường nhanh nhất có thể theo SLA; Problem tập trung điều tra và triệt tiêu nguyên nhân gốc rễ (Root Cause) khiến sự cố lặp lại.',
          'Problem chỉ xử lý lỗi phần cứng, Incident xử lý lỗi phần mềm.',
          'Hai khái niệm hoàn toàn giống nhau.',
          'Incident chỉ do khách hàng tự sửa.',
        ],
        correctIndex: 0,
        explanation: 'Ví dụ: khởi động lại server để web chạy lại sau 5 phút là xử lý Incident; tìm ra đoạn code rò rỉ bộ nhớ (memory leak) làm server treo mỗi 3 ngày để sửa vĩnh viễn là Problem Management.',
        source: 'ITIL 4 Foundation; SWEBOK v4',
      },
      {
        id: 'm910-q5',
        question: 'Vì sao bắt buộc phải chạy thử nghiệm chuyển đổi dữ liệu (Data Migration Dry-run) trên môi trường Staging trước ngày Cutover?',
        options: [
          'Để làm đẹp báo cáo dự án.',
          'Để kiểm tra script chuyển đổi, phát hiện sớm dữ liệu rác/trùng lặp, đo chính xác thời gian downtime cần thiết và đảm bảo đối soát khớp 100% trước khi làm thật.',
          'Vì môi trường Production không có cơ sở dữ liệu.',
          'Không cần chạy thử nếu dữ liệu ít hơn 1 triệu dòng.',
        ],
        correctIndex: 1,
        explanation: 'Dữ liệu hệ thống cũ luôn chứa ngoại lệ và rác tiềm ẩn; chạy Dry-run giúp tránh thảm họa mất dữ liệu hoặc quá giờ Cutover vào ngày Go-Live.',
        source: 'SWEBOK v4; Sommerville',
      },
      {
        id: 'm910-q6',
        question: 'Khi ngừng vận hành hoàn toàn một hệ thống cũ (Decommissioning / Retirement theo ISO 12207), bước nào sau đây KHÔNG được bỏ sót?',
        options: [
          'Chỉ cần rút dây điện máy chủ mà không cần thông báo ai.',
          'Di chuyển dữ liệu cần thiết, lưu trữ (archive) dữ liệu theo quy định pháp lý, thu hồi tài khoản/khóa bảo mật và tắt hạ tầng cũ an toàn.',
          'Để nguyên hệ thống cũ mở công khai trên mạng không ai bảo trì.',
          'Xóa toàn bộ dữ liệu kế toán/lịch sử ngay lập tức bất chấp quy định lưu trữ.',
        ],
        correctIndex: 1,
        explanation: 'Decommissioning đúng chuẩn đảm bảo tuân thủ lưu trữ pháp lý, tránh rò rỉ bảo mật từ hệ thống bỏ hoang ("zombie servers") và cắt chi phí vận hành.',
        source: 'ISO/IEC/IEEE 12207:2017 – Disposal Process',
      },
    ],
  },

  'cap-2-exam': {
    id: 'cap-2-exam',
    title: 'Bài kiểm tra cuối Cấp 2: Trọn bộ 7 Giai đoạn SDLC (20 câu)',
    description:
      '20 câu tổng hợp toàn bộ Cấp 2 (Lập kế hoạch → Yêu cầu SRS → Mô hình hóa & Thiết kế → Phát triển CI → Kiểm thử ISTQB → Triển khai & Vận hành). Ngưỡng đạt 80% (16/20 câu).',
    passThreshold: 0.8,
    questions: [
      {
        id: 'c2-1',
        question: 'Một dự án có công nghệ tốt, ngân sách đủ, nhưng nhân viên các phòng ban kiên quyết từ chối sử dụng vì quy trình mới quá rườm rà. Khía cạnh nào trong TELOS chưa được đánh giá thấu đáo?',
        options: ['Technical', 'Economic', 'Operational (Khả thi vận hành)', 'Legal'],
        correctIndex: 2,
        explanation: 'Operational Feasibility đánh giá mức độ sẵn sàng tiếp nhận và khả năng vận hành thực tế của con người & tổ chức.',
        topic: 'M2 Lập kế hoạch',
      },
      {
        id: 'c2-2',
        question: 'Ước lượng PERT cho một module tích hợp: O = 4 ngày, M = 7 ngày, P = 16 ngày. Giá trị kỳ vọng E bằng bao nhiêu?',
        options: ['7 ngày', '8 ngày', '9 ngày', '10 ngày'],
        correctIndex: 1,
        explanation: 'E = (4 + 4×7 + 16) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8 ngày.',
        topic: 'M2 Lập kế hoạch',
      },
      {
        id: 'c2-3',
        question: 'Tài liệu nào chính thức ủy quyền cho dự án được khởi chạy, xác định mục tiêu cấp cao, ngân sách trần và ranh giới In-Scope / Out-of-Scope?',
        options: ['Project Charter', 'Bug Report', 'Release Note', 'Unit Test Log'],
        correctIndex: 0,
        explanation: 'Project Charter là văn kiện khởi tạo chính thức do Sponsor phê duyệt để trao quyền và chốt khung phạm vi ban đầu.',
        topic: 'M2 Lập kế hoạch',
      },
      {
        id: 'c2-4',
        question: 'Khi cần lấy ý kiến nhanh về mức độ hài lòng và nhu cầu tra cứu di động từ 18.000 sinh viên trong 5 ngày, kỹ thuật khơi gợi yêu cầu nào phù hợp nhất?',
        options: [
          'Phỏng vấn sâu 1-1 toàn bộ 18.000 sinh viên',
          'Khảo sát trực tuyến (Survey / Questionnaire) kết hợp phỏng vấn mẫu một nhóm nhỏ đại diện',
          'Chỉ đọc tài liệu phần mềm cũ năm 2012',
          'Không cần hỏi sinh viên',
        ],
        correctIndex: 1,
        explanation: 'Khảo sát giúp thu thập dữ liệu định lượng quy mô lớn nhanh chóng, sau đó kết hợp phỏng vấn sâu nhóm mẫu để hiểu nguyên nhân.',
        topic: 'M3–M4 Yêu cầu',
      },
      {
        id: 'c2-5',
        question: 'Yêu cầu: "95% yêu cầu đăng nhập phải hoàn tất trong ≤ 2 giây ở mức tải 1.000 người dùng đồng thời" thuộc đặc tính chất lượng nào của ISO/IEC 25010?',
        options: ['Performance Efficiency (Hiệu năng)', 'Maintainability', 'Compatibility', 'Safety'],
        correctIndex: 0,
        explanation: 'Thời gian phản hồi dưới một mức tải đồng thời là chỉ số đặc trưng của Performance Efficiency.',
        topic: 'M3–M4 Yêu cầu',
      },
      {
        id: 'c2-6',
        question: 'Nếu khách hàng gắn nhãn "Must have" cho 100% danh sách 50 tính năng trong kỹ thuật MoSCoW, hậu quả lớn nhất là gì?',
        options: [
          'Dự án sẽ hoàn thành nhanh gấp đôi.',
          'Mất hoàn toàn vùng đệm linh hoạt để bảo vệ mốc Go-Live nếu có bất kỳ trở ngại nào xảy ra (khuyến nghị Must-have chỉ nên chiếm ≤ ~60% công suất).',
          'Đội QA sẽ không cần viết test case.',
          'Ngân sách tự động giảm một nửa.',
        ],
        correctIndex: 1,
        explanation: 'Khi mọi thứ đều là Must-have thì thực chất không có thứ tự ưu tiên nào cả; không còn hạng mục Should/Could để đánh đổi khi gặp rủi ro.',
        topic: 'M3–M4 Yêu cầu',
      },
      {
        id: 'c2-7',
        question: 'Một quy định độc lập của tổ chức: "Mức phạt quá hạn là 5.000đ/ngày, tối đa không vượt quá giá bìa sách" được phân loại chuẩn xác nhất là gì?',
        options: [
          'Yêu cầu phi chức năng về bảo mật',
          'Quy tắc nghiệp vụ (Business Rule)',
          'Thiết kế cơ sở dữ liệu',
          'Chiến lược triển khai',
        ],
        correctIndex: 1,
        explanation: 'Business Rule là chính sách/quy định nghiệp vụ tồn tại độc lập với phần mềm (dù dùng sổ giấy hay phần mềm vẫn áp dụng) và là nguồn sinh ra các yêu cầu chức năng.',
        topic: 'M3–M4 Yêu cầu',
      },
      {
        id: 'c2-8',
        question: 'Để thiết kế cấu trúc các thực thể dữ liệu (Bạn đọc, Cuốn sách, Phiếu mượn, Chi tiết mượn) và quan hệ 1-N / N-N giữa chúng, ta dùng sơ đồ nào?',
        options: ['ERD (Entity-Relationship Diagram)', 'BPMN 2.0', 'Sequence Diagram', 'Gantt Chart'],
        correctIndex: 0,
        explanation: 'ERD mô hình hóa các thực thể dữ liệu, thuộc tính khóa và mối quan hệ giữa chúng.',
        topic: 'M5–M6 Mô hình hóa',
      },
      {
        id: 'c2-9',
        question: 'Sơ đồ nào cho thấy rõ toàn bộ các trạng thái hợp lệ của một "Đơn đặt giữ sách" và các sự kiện kích hoạt chuyển đổi giữa chúng?',
        options: ['State Machine Diagram', 'Use Case Diagram', 'Deployment Diagram', 'Org Chart'],
        correctIndex: 0,
        explanation: 'State Machine Diagram mô tả vòng đời trạng thái và chuyển đổi hợp lệ của một đối tượng nghiệp vụ.',
        topic: 'M5–M6 Mô hình hóa',
      },
      {
        id: 'c2-10',
        question: 'Vì sao việc ghi Nhật ký kiểm toán (Audit Log) không thể chỉnh sửa lại quan trọng với các thao tác như miễn/giảm tiền phạt hay đổi phân quyền?',
        options: [
          'Để làm cơ sở dữ liệu nặng hơn.',
          'Đảm bảo tính truy vết trách nhiệm (Accountability & Non-repudiation), phát hiện gian lận và đáp ứng kiểm toán nội bộ/pháp lý.',
          'Để thay thế hoàn toàn chức năng đăng nhập.',
          'Chỉ dùng để sửa lỗi giao diện CSS.',
        ],
        correctIndex: 1,
        explanation: 'Audit Log (ai làm gì, khi nào, giá trị cũ → mới) là yêu cầu cốt lõi của Security by Design đối với các nghiệp vụ tài chính và phân quyền.',
        topic: 'M5–M6 Thiết kế',
      },
      {
        id: 'c2-11',
        question: 'Lợi ích trực tiếp nhất của Continuous Integration (CI) trong giai đoạn Phát triển là gì?',
        options: [
          'Tự động viết tài liệu SRS thay cho BA.',
          'Phát hiện lỗi biên dịch, lỗi Unit Test và xung đột tích hợp ngay khi lập trình viên gộp code hằng ngày thay vì để dồn cuối dự án.',
          'Loại bỏ hoàn toàn nhu cầu UAT.',
          'Không cần dùng Git nữa.',
        ],
        correctIndex: 1,
        explanation: 'CI tự động hóa vòng phản hồi kỹ thuật trong vài phút sau mỗi commit/PR, giúp giữ nhánh chính luôn sạch và ổn định.',
        topic: 'M7 Phát triển',
      },
      {
        id: 'c2-12',
        question: 'Nguyên tắc kiểm thử ISTQB nào giải thích rằng một hệ thống chạy 0 lỗi kỹ thuật nhưng không giải quyết đúng bài toán người dùng thì vẫn là thất bại?',
        options: [
          'Ngộ nhận "không còn lỗi là thành công" (Absence-of-defects fallacy)',
          'Nghịch lý thuốc trừ sâu',
          'Lỗi tập trung thành cụm',
          'Kiểm thử vét cạn bất khả thi',
        ],
        correctIndex: 0,
        explanation: 'Absence-of-defects fallacy (Nguyên tắc #7 ISTQB CTFL v4.0) nhắc nhở phải đảm bảo cả Validation (đúng nhu cầu) chứ không chỉ sửa hết bug.',
        topic: 'M8 Kiểm thử ISTQB',
      },
      {
        id: 'c2-13',
        question: 'Hệ thống chấp nhận năm xuất bản sách hợp lệ từ 1900 đến 2026 (số nguyên). Theo 2-value BVA (Phân tích giá trị biên 2 điểm), bộ giá trị kiểm tra biên chuẩn là gì?',
        options: [
          '1900, 1950, 2000, 2026',
          '1899, 1900, 2026, 2027',
          '0, 1900, 2026, 9999',
          '1901, 2025',
        ],
        correctIndex: 1,
        explanation: 'Biên dưới hợp lệ 1900 (sát ngoài 1899) và biên trên hợp lệ 2026 (sát ngoài 2027) → {1899, 1900, 2026, 2027}.',
        topic: 'M8 Kiểm thử ISTQB',
      },
      {
        id: 'c2-14',
        question: 'Khi kiểm thử một chuỗi quy tắc có 3 điều kiện nhị phân (Đúng/Sai) kết hợp với nhau, số tổ hợp điều kiện tối đa trong Bảng quyết định đầy đủ là bao nhiêu?',
        options: ['3', '6', '8 (2³)', '12'],
        correctIndex: 2,
        explanation: 'Với n điều kiện nhị phân (Đúng/Sai), bảng quyết định đầy đủ có 2ⁿ cột luật; n = 3 → 2³ = 8 tổ hợp (sau đó có thể rút gọn nếu có điều kiện không ảnh hưởng).',
        topic: 'M8 Kiểm thử ISTQB',
      },
      {
        id: 'c2-15',
        question: 'Cấp độ kiểm thử nào tập trung xác minh giao diện trao đổi dữ liệu và luồng gọi giữa Backend LibCore và dịch vụ đăng nhập SSO của trường?',
        options: ['Unit Testing', 'Integration Testing', 'Usability Testing', 'Alpha Testing'],
        correctIndex: 1,
        explanation: 'Kiểm tra sự tương tác và hợp đồng giao tiếp giữa hai thành phần/hệ thống khác nhau là Integration Testing.',
        topic: 'M8 Kiểm thử ISTQB',
      },
      {
        id: 'c2-16',
        question: 'Khi phát sinh một yêu cầu thay đổi công thức tính phạt, công cụ nào giúp BA và QA xác định nhanh toàn bộ đặc tả, thiết kế và test case bị ảnh hưởng?',
        options: [
          'Ma trận truy vết yêu cầu (RTM)',
          'Biểu đồ Burndown',
          'Phiếu khảo sát sinh viên',
          'Elevator Statement',
        ],
        correctIndex: 0,
        explanation: 'RTM liên kết hai chiều Yêu cầu ↔ Thiết kế ↔ Test Case nên hỗ trợ Impact Analysis (phân tích tác động) cực kỳ chính xác.',
        topic: 'M8 Kiểm thử & Truy vết',
      },
      {
        id: 'c2-17',
        question: 'Môi trường nào phải được thiết lập giống Production nhất có thể để đại diện nghiệp vụ chạy UAT và diễn tập Cutover trước ngày Go-Live?',
        options: ['Dev', 'Staging / UAT', 'Máy cá nhân của lập trình viên', 'Môi trường Sandbox không có dữ liệu'],
        correctIndex: 1,
        explanation: 'Staging / UAT mô phỏng sát nhất cấu hình Production để bắt các lỗi chỉ xuất hiện ở môi trường thật trước khi triển khai cho người dùng cuối.',
        topic: 'M9 Triển khai',
      },
      {
        id: 'c2-18',
        question: 'Một trường đại học quyết định chạy thử hệ thống mới tại 1 cơ sở nhỏ (10% người dùng) trong 2 tuần để đánh giá thực tế trước khi mở cho toàn trường. Đây là chiến lược Go-Live nào?',
        options: ['Big Bang', 'Pilot (Thí điểm)', 'Parallel toàn phần', 'Cold Shutdown'],
        correctIndex: 1,
        explanation: 'Triển khai thật cho một nhóm nhỏ đại diện trước khi nhân rộng toàn bộ là chiến lược Pilot.',
        topic: 'M9 Triển khai',
      },
      {
        id: 'c2-19',
        question: 'Sửa một lỗi khiến phiếu mượn bị trừ nhầm 2 lần số lượng tồn kho sau khi hệ thống đã Go-Live thuộc loại bảo trì nào?',
        options: ['Corrective Maintenance (Sửa lỗi)', 'Adaptive Maintenance', 'Perfective Maintenance', 'Preventive Maintenance'],
        correctIndex: 0,
        explanation: 'Khắc phục lỗi/sai lệch đang xảy ra trên hệ thống đã vận hành chính là Corrective Maintenance.',
        topic: 'M10 Vận hành & Bảo trì',
      },
      {
        id: 'c2-20',
        question: 'Trước khi phê duyệt một Change Request (CR) trên hệ thống đang chạy Production, bước bắt buộc nào phải thực hiện để tránh phá vỡ hệ thống hoặc đội chi phí ngoài kiểm soát?',
        options: [
          'Đẩy thẳng code sửa lên Production ngay rồi tính sau.',
          'Thực hiện Phân tích tác động (Impact Analysis về kỹ thuật, dữ liệu, kiểm thử, chi phí, tiến độ) và trình cấp có thẩm quyền (PO/CCB) phê duyệt.',
          'Tắt hết hệ thống kiểm thử tự động.',
          'Từ chối mọi CR bất kể lý do gì.',
        ],
        correctIndex: 1,
        explanation: 'Mọi CR cần qua Impact Analysis và phê duyệt chính thức, sau đó kiểm thử hồi quy và cập nhật Baseline/RTM trước khi triển khai.',
        topic: 'M10 Vận hành & Thay đổi',
      },
    ],
  },
};
