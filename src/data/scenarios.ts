export type ChoiceVerdict = 'optimal' | 'risky' | 'antipattern';

export interface ScenarioChoice {
  label: string;
  verdict: ChoiceVerdict;
  analysis: string;
  consequence: string;
  dialogue?: string;
}

export interface AgileScenario {
  id: string;
  category: 'Sprint & Thay đổi' | 'Vai trò & Trách nhiệm' | 'Sự kiện Scrum' | 'Backlog & Ước lượng' | 'Chất lượng & DoD';
  role: string;
  title: string;
  situation: string;
  choices: ScenarioChoice[];
  reference: string;
}

export const AGILE_SCENARIOS: AgileScenario[] = [
  {
    id: 'sc-01',
    category: 'Sprint & Thay đổi',
    role: 'Scrum Master / Product Owner',
    title: 'Tình huống 1: Sếp yêu cầu chen gấp một tính năng mới vào ngày thứ 6 của Sprint 2 tuần',
    situation:
      'Đội đang ở giữa Sprint 2 tuần với Sprint Goal là "Hoàn thành luồng mượn/trả sách bằng mã vạch". Giám đốc kinh doanh nhắn trực tiếp cho một lập trình viên yêu cầu làm gấp báo cáo thống kê để kịp họp cuối tuần, ước tính mất 3 ngày công.',
    choices: [
      {
        label: 'Lập trình viên nhận luôn để làm hài lòng sếp và cố tăng ca cho kịp cả hai.',
        verdict: 'antipattern',
        analysis:
          'Vi phạm nghiêm trọng nguyên tắc bảo vệ Sprint Goal và quyền sở hữu Product Backlog của Product Owner.',
        consequence:
          'Tạo tiền lệ ai cũng có thể vượt mặt PO giao việc trực tiếp; đội quá tải, code vội sinh lỗi và có nguy cơ vỡ luôn Sprint Goal.',
      },
      {
        label: 'Chuyển yêu cầu về Product Owner để đánh giá mức độ khẩn cấp. Nếu thực sự cấp bách hơn, PO thương lượng với Developers đưa vào Sprint và bỏ ra một hạng mục tương đương KHÔNG làm hỏng Sprint Goal; nếu không, xếp lên đầu Product Backlog cho Sprint sau.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Không thực hiện thay đổi nào đe dọa Sprint Goal, nhưng phạm vi Sprint Backlog có thể được làm rõ và thương lượng lại giữa PO và Developers khi có thông tin mới.',
        consequence:
          'Giữ được minh bạch về đánh đổi (trade-off), bảo vệ năng suất ổn định của đội và vẫn đáp ứng linh hoạt nhu cầu kinh doanh thực sự khẩn.',
        dialogue:
          'Mẫu trao đổi của PO: "Em ghi nhận báo cáo này rất quan trọng cho cuộc họp thứ Sáu. Để kịp trong Sprint này mà không ảnh hưởng chất lượng luồng mượn/trả, mình sẽ tạm dời tính năng Xuất lịch sử đọc sang Sprint kế tiếp để lấy 3 ngày công làm báo cáo này. Anh xác nhận ưu tiên này nhé?"',
      },
      {
        label: 'Từ chối thẳng thừng mọi thay đổi và nói "Scrum cấm tuyệt đối việc thêm gì vào Sprint".',
        verdict: 'risky',
        analysis:
          'Hiểu hơi cứng nhắc. Scrum cấm làm tổn hại Sprint Goal chứ không cấm thương lượng lại phạm vi hợp lý với PO khi kinh doanh thực sự cần gấp.',
        consequence:
          'Ban lãnh đạo dễ có ấn tượng xấu rằng "Agile máy móc, không hỗ trợ kinh doanh".',
      },
      {
        label: 'Kéo dài Sprint hiện tại thêm 4 ngày để làm trọn cả việc cũ lẫn báo cáo mới.',
        verdict: 'antipattern',
        analysis:
          'Sprint là khung thời gian cố định (time-boxed) và không bao giờ được kéo dài.',
        consequence:
          'Phá vỡ nhịp điệu dự báo, làm sai lệch mọi chỉ số theo dõi (Velocity/Burndown) và gây trì hoãn vòng phản hồi Sprint Review.',
      },
    ],
    reference: 'Scrum Guide 2020 – The Sprint & Sprint Backlog',
  },
  {
    id: 'sc-02',
    category: 'Sự kiện Scrum',
    role: 'Scrum Master',
    title: 'Tình huống 2: Daily Scrum kéo dài 40 phút và biến thành buổi báo cáo cho PM/SM',
    situation:
      'Mỗi sáng 9h, cả nhóm 8 người đứng họp nhưng kéo dài 35–45 phút. Từng người nhìn vào Scrum Master báo cáo chi tiết hôm qua làm file code nào, rồi hai lập trình viên tranh luận sâu về cách thiết kế bảng database ngay trong buổi họp trong khi 5 người còn lại đứng bấm điện thoại.',
    choices: [
      {
        label: 'Để mọi người nói hết vì thảo luận kỹ thuật sâu rất có ích.',
        verdict: 'antipattern',
        analysis:
          'Daily Scrum bị mất mục đích, vượt xa time-box 15 phút và làm lãng phí thời gian của những thành viên không liên quan.',
        consequence:
          'Đội bắt đầu ghét Daily Scrum, xem đây là thủ tục rườm rà và không còn tập trung vào Sprint Goal.',
      },
      {
        label: 'Huấn luyện lại đội về mục đích Daily Scrum: tập trung kiểm tra tiến độ hướng tới Sprint Goal theo từng thẻ việc trên bảng (walk the board từ phải sang trái), giới hạn nghiêm 15 phút; mọi thảo luận kỹ thuật sâu ghi vào "Parking Lot" để nhóm liên quan ở lại bàn ngay sau 9h15.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Daily Scrum là buổi lập kế hoạch ngắn 15 phút DÀNH CHO Developers để đồng bộ kế hoạch 24 giờ tới hướng tới Sprint Goal.',
        consequence:
          'Buổi họp gọn dưới 15 phút, cả nhóm tập trung tháo gỡ thẻ việc sắp hoàn thành, không ai bị ép nghe thảo luận ngoài phạm vi.',
        dialogue:
          'Mẫu điều phối của SM: "Chủ đề tối ưu bảng DB rất quan trọng — mình ghi lại vào Parking Lot, đúng 9h15 hai bạn A và B ở lại bàn chi tiết nhé. Bây giờ cả nhóm xem tiếp thẻ đang bị kẹt ở cột Testing."',
      },
      {
        label: 'Bỏ luôn Daily Scrum và yêu cầu mỗi người gõ báo cáo dài vào nhóm chat mỗi sáng.',
        verdict: 'risky',
        analysis:
          'Tin nhắn một chiều không thay thế được sự tương tác nhanh giúp cả nhóm tự phối hợp gỡ vướng mắc tức thì.',
        consequence:
          'Các điểm nghẽn bị bỏ sót qua nhiều ngày vì ít người đọc hết tin nhắn dài của người khác.',
      },
      {
        label: 'Phạt tiền ai nói quá 2 phút và bắt buộc đọc đúng 3 câu hỏi truyền thống theo thứ tự vòng tròn.',
        verdict: 'risky',
        analysis:
          'Scrum Guide 2020 đã bỏ bắt buộc 3 câu hỏi cố định để tránh kiểu "báo cáo như cái máy"; phạt tiền tạo không khí căng thẳng, mất giá trị Cởi mở và Tôn trọng.',
        consequence:
          'Thành viên báo cáo qua loa cho xong lượt thay vì nêu thật các rủi ro đang vướng.',
      },
    ],
    reference: 'Scrum Guide 2020 – Daily Scrum',
  },
  {
    id: 'sc-03',
    category: 'Chất lượng & DoD',
    role: 'Product Owner / QA / Developers',
    title: 'Tình huống 3: Cuối Sprint, Story "Đặt trước sách" đã code xong nhưng QA chưa kịp kiểm thử',
    situation:
      'Còn 2 tiếng nữa là đến Sprint Review. Lập trình viên thông báo đã viết xong code cho Story trị giá 8 Story Points, nhưng QA mới test được 30% và phát hiện 2 lỗi trung bình chưa sửa kịp. PM gợi ý cứ tính 6/8 điểm vào Velocity Sprint này, phần test để sang Sprint sau.',
    choices: [
      {
        label: 'Đồng ý chia 6 điểm cho Sprint này và 2 điểm cho Sprint sau để báo cáo tiến độ đẹp hơn.',
        verdict: 'antipattern',
        analysis:
          'Vi phạm hoàn toàn khái niệm Increment và Definition of Done (DoD). Trong Scrum không có khái niệm "xong một phần" hay "tính điểm từng nửa".',
        consequence:
          'Tạo ảo giác tiến độ (false progress), tích tụ nợ kiểm thử sang Sprint sau và làm sai lệch dữ liệu dự báo.',
      },
      {
        label: 'Không tính Story này vào Increment hoàn thành (0 điểm vào Velocity Sprint này), trả lại Product Backlog để PO xem xét ưu tiên tiếp ở Sprint sau; đồng thời đem nguyên nhân "dồn test cuối Sprint" ra phân tích trong Sprint Retrospective.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Nếu một hạng mục không đáp ứng Definition of Done, nó không được phát hành hay trình diễn như phần hoàn chỉnh trong Sprint Review mà quay lại Product Backlog.',
        consequence:
          'Giữ minh bạch tuyệt đối về trạng thái thật của sản phẩm và thúc đẩy đội giải quyết tận gốc nguyên nhân (ví dụ: chia nhỏ Story, viết test sớm hơn trong Sprint).',
        dialogue:
          'Mẫu trao đổi: "Story này chưa đạt DoD vì còn 2 bug đang mở nên mình sẽ không tính vào Increment Sprint này để giữ chuẩn chất lượng. Chiều nay ở Retrospective, cả nhóm cùng xem vì sao test bị dồn vào ngày cuối để Sprint tới xử lý gọn hơn."',
      },
      {
        label: 'Vẫn đưa lên Production trước rồi tuần sau phát hành bản vá lỗi sau.',
        verdict: 'antipattern',
        analysis:
          'Đánh đổi chất lượng lấy tốc độ ảo — trái ngược với nguyên tắc kỹ thuật xuất sắc của Agile và định nghĩa Increment có thể dùng được.',
        consequence:
          'Người dùng gặp lỗi thật trên Production, tốn chi phí sửa gấp nhiều lần và mất niềm tin vào đội phát triển.',
      },
      {
        label: 'Dời buổi Sprint Review sang tuần sau cho tới khi QA test xong 100%.',
        verdict: 'antipattern',
        analysis:
          'Phá vỡ tính cố định thời gian (time-box) của Sprint.',
        consequence:
          'Mất kỷ luật nhịp độ, các bên liên quan không thể sắp xếp lịch đồng hành ổn định.',
      },
    ],
    reference: 'Scrum Guide 2020 – Commitment: Definition of Done',
  },
  {
    id: 'sc-04',
    category: 'Backlog & Ước lượng',
    role: 'Scrum Master / PM',
    title: 'Tình huống 4: Lãnh đạo muốn dùng chỉ số Velocity để so sánh và xếp hạng KPI giữa Team A và Team B',
    situation:
      'Team A đạt trung bình 45 Story Points/Sprint, còn Team B đạt 28 Story Points/Sprint. Giám đốc khối công nghệ hỏi tại sao Team B làm kém hơn gần một nửa và yêu cầu đưa mục tiêu tăng Velocity lên 45 điểm vào KPI thưởng quý của Team B.',
    choices: [
      {
        label: 'Yêu cầu Team B cố gắng tăng Velocity lên 45 điểm trong 2 Sprint tới.',
        verdict: 'antipattern',
        analysis:
          'Hiểu sai hoàn toàn bản chất tương đối của Story Point và phạm định luật Goodhart ("Khi một thước đo trở thành mục tiêu, nó không còn là thước đo tốt nữa").',
        consequence:
          'Team B sẽ thổi phồng ước lượng (gắn 5 điểm cho việc vốn 2 điểm) để đạt KPI — con số tăng nhưng giá trị giao cho khách hàng không hề tăng!',
      },
      {
        label: 'Giải thích rõ với lãnh đạo rằng Story Point là đơn vị tương đối riêng của từng nhóm nên KHÔNG thể so sánh Velocity giữa hai nhóm khác nhau; đề xuất đánh giá hiệu quả bằng các chỉ số hướng giá trị và chất lượng thực (mục tiêu kinh doanh đạt được, mức hài lòng người dùng, tỷ lệ lỗi Production, Lead Time).',
        verdict: 'optimal',
        analysis:
          'Chuẩn Mike Cohn & Agile Metrics: Velocity chỉ có ý nghĩa nội bộ giúp chính nhóm đó dự báo năng lực cho các Sprint tương lai, tuyệt đối không phải thước đo năng suất hay KPI so sánh giữa các nhóm.',
        consequence:
          'Bảo vệ tính trung thực khi ước lượng và hướng sự chú ý của lãnh đạo vào giá trị sản phẩm thật sự.',
        dialogue:
          'Mẫu giải thích: "Story Point giống như tiền tệ riêng của từng đội — 1 điểm của Team A không cùng đơn vị với 1 điểm của Team B nên không thể so sánh trực tiếp. Nếu đặt KPI theo điểm, nhóm có thể tăng điểm ước lượng mà sản phẩm không tốt hơn. Em đề xuất mình theo dõi tỷ lệ hoàn thành Sprint Goal, số lỗi lọt ra Production và thời gian đưa tính năng đến tay người dùng."',
      },
      {
        label: 'Ép cả hai nhóm dùng chung công thức "1 Story Point = đúng 4 giờ làm việc" để dễ so sánh.',
        verdict: 'antipattern',
        analysis:
          'Biến Story Point thành giờ công làm mất toàn bộ lợi ích của ước lượng tương đối theo độ phức tạp và rủi ro.',
        consequence:
          'Tạo áp lực báo cáo giờ giả tạo và gây tranh cãi kéo dài vì lập trình viên Senior và Junior tốn số giờ hoàn toàn khác nhau cho cùng một đầu việc.',
      },
      {
        label: 'Giấu số liệu Velocity, không cho lãnh đạo biết bất kỳ chỉ số nào của đội.',
        verdict: 'risky',
        analysis:
          'Trái với trụ cột Minh bạch (Transparency) của Scrum.',
        consequence:
          'Lãnh đạo mất niềm tin vì cảm thấy đội thiếu minh bạch, dễ dẫn đến kiểm soát vi mô.',
      },
    ],
    reference: 'Mike Cohn – Agile Estimating and Planning; Scrum.org EBM',
  },
  {
    id: 'sc-05',
    category: 'Vai trò & Trách nhiệm',
    role: 'Scrum Master / BA',
    title: 'Tình huống 5: Product Owner quá bận, hiếm khi họp Sprint Review và ủy quyền hết cho một "hội đồng 3 người"',
    situation:
      'Product Owner kiêm Giám đốc vận hành nên rất bận, 2 tháng nay không dự Sprint Planning lẫn Sprint Review. Khi đội hỏi chốt yêu cầu ưu tiên, 3 trưởng bộ phận mỗi người chỉ đạo một kiểu trái ngược nhau.',
    choices: [
      {
        label: 'Để Developers tự chọn tính năng nào dễ code thì làm trước cho khỏi bị chậm.',
        verdict: 'antipattern',
        analysis:
          'Mất định hướng giá trị kinh doanh, dễ xây ra các tính năng không ai cần hoặc lệch mục tiêu sản phẩm.',
        consequence:
          'Lãng phí ngân sách và phải làm lại lớn khi lãnh đạo xem sản phẩm ở giai đoạn sau.',
      },
      {
        label: 'Scrum Master làm việc trực tiếp với lãnh đạo để làm rõ rủi ro khi thiếu một PO duy nhất có đủ thời gian & thẩm quyền; đề xuất chỉ định 1 cá nhân duy nhất làm PO chuyên trách (hoặc ủy quyền chính thức cho 1 người đại diện duy nhất có quyền ra quyết định cuối về thứ tự Product Backlog, còn 3 trưởng bộ phận đóng vai trò Stakeholder tham vấn).',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Product Owner là MỘT cá nhân, không phải một ủy ban (committee). PO có thể đại diện cho nhu cầu của nhiều bên liên quan, nhưng quyết định sắp xếp Product Backlog phải quy về một đầu mối duy nhất và được tổ chức tôn trọng.',
        consequence:
          'Chấm dứt tình trạng "trống đánh xuôi kèn thổi ngược", giúp đội có một tầm nhìn rõ ràng và phản hồi kịp thời mỗi Sprint.',
        dialogue:
          'Mẫu trao đổi: "Hiện đội đang mất trung bình 2 ngày mỗi tuần chỉ để chờ phân xử giữa 3 luồng yêu cầu khác nhau. Để dự án đúng tiến độ, mình cần chốt duy nhất 1 đầu mối Product Owner có toàn quyền sắp xếp thứ tự ưu tiên; 3 anh chị trưởng bộ phận sẽ tham gia đóng góp ý kiến ở Sprint Review và các buổi tinh chỉnh backlog."',
      },
      {
        label: 'Tạo phiếu biểu quyết lấy số đông mỗi khi 3 trưởng bộ phận bất đồng ý kiến.',
        verdict: 'risky',
        analysis:
          'Biểu quyết theo ủy ban làm chậm quyết định và thường tạo ra sản phẩm chắp vá, thiếu nhất quán về chiến lược.',
        consequence:
          'Không có một cá nhân chịu trách nhiệm cuối cùng cho giá trị tổng thể của sản phẩm.',
      },
      {
        label: 'Để Scrum Master kiêm luôn quyết định ưu tiên nghiệp vụ thay cho PO.',
        verdict: 'antipattern',
        analysis:
          'Xung đột vai trò: Scrum Master tập trung vào quy trình/đội ngũ, không phải người sở hữu giá trị kinh doanh của sản phẩm.',
        consequence:
          'Vừa mất tính khách quan của Scrum Master, vừa dễ chốt sai ưu tiên nghiệp vụ.',
      },
    ],
    reference: 'Scrum Guide 2020 – Product Owner',
  },
  {
    id: 'sc-06',
    category: 'Backlog & Ước lượng',
    role: 'BA / Product Owner / Developers',
    title: 'Tình huống 6: Chia nhỏ User Story quá lớn bằng cách tách thành 3 thẻ "Làm DB", "Làm Backend", "Làm Frontend"',
    situation:
      'Tính năng "Thanh toán tiền phạt trễ hạn trực tuyến" được ước lượng tới 21 Story Points — quá lớn cho một Sprint 2 tuần. Tech Lead đề xuất tách thành 3 User Story: Sprint 1 làm xong Database, Sprint 2 làm xong API Backend, Sprint 3 làm xong giao diện Frontend.',
    choices: [
      {
        label: 'Đồng ý chia theo tầng kỹ thuật (DB → Backend → Frontend) vì mỗi nhóm chuyên môn làm việc rất gọn.',
        verdict: 'antipattern',
        analysis:
          'Đây là "Horizontal Slicing" (cắt ngang theo tầng kỹ thuật) — phản mẫu kinh điển của Agile. Nó biến Scrum thành Mini-Waterfall kéo dài 3 Sprint.',
        consequence:
          'Hết Sprint 1 và Sprint 2 không có bất kỳ phần mềm chạy được nào để khách hàng dùng thử hay góp ý; lỗi tích hợp bị dồn hết sang Sprint 3.',
      },
      {
        label: 'Áp dụng "Vertical Slicing" (cắt dọc xuyên qua cả UI–API–DB theo giá trị người dùng): Sprint 1 làm trọn luồng thanh toán tiền mặt/chuyển khoản cơ bản có biên lai; Sprint 2 bổ sung cổng thanh toán QR tự động; Sprint 3 bổ sung miễn giảm phạt & báo cáo đối soát.',
        verdict: 'optimal',
        analysis:
          'Chuẩn INVEST & User Story Splitting: mỗi User Story nhỏ phải đi xuyên suốt các tầng kỹ thuật để cuối mỗi Sprint đều tạo ra một Increment hoạt động được, demo được và mang lại giá trị thực.',
        consequence:
          'Nhận phản hồi từ người dùng thật ngay từ cuối Sprint 1, tích hợp liên tục nên triệt tiêu rủi ro vỡ tích hợp ở cuối dự án.',
        dialogue:
          'Mẫu đề xuất của BA/PO: "Nếu cắt thành DB–API–UI thì cuối Sprint 1 thủ thư không có màn hình nào để kiểm chứng. Thay vào đó, mình cắt dọc: Sprint 1 làm gọn 1 phương thức thu phạt cơ bản chạy thông từ giao diện xuống DB, rồi Sprint 2 mới mở rộng thêm QR tự động."',
      },
      {
        label: 'Giữ nguyên Story 21 điểm và kéo dài Sprint thành 6 tuần để làm cho hết.',
        verdict: 'antipattern',
        analysis:
          'Scrum Guide 2020 quy định độ dài tối đa của 1 Sprint là 1 tháng (≤ 4 tuần) để giữ rủi ro trong tầm kiểm soát.',
        consequence:
          'Vòng phản hồi quá dài, rủi ro trễ và hiểu sai yêu cầu tăng mạnh.',
      },
      {
        label: 'Ghi cả 3 tầng vào 1 Story nhưng chỉ ước lượng riêng phần Frontend để điểm nhỏ đi.',
        verdict: 'antipattern',
        analysis:
          'Che giấu khối lượng công việc thực tế, phá vỡ tính minh bạch của Sprint Backlog.',
        consequence:
          'Chắc chắn không hoàn thành kịp Sprint và gây mất niềm tin vào kế hoạch.',
      },
    ],
    reference: 'Mike Cohn – User Stories Applied; Richard Lawrence – Story Splitting Patterns',
  },
  {
    id: 'sc-07',
    category: 'Sự kiện Scrum',
    role: 'Scrum Master',
    title: 'Tình huống 7: Sprint Planning kéo dài 6 tiếng vì các Story trong Backlog quá mơ hồ',
    situation:
      'Đội vào họp Sprint Planning cho Sprint 2 tuần nhưng phải mất hơn nửa ngày để hỏi qua hỏi lại nghiệp vụ vì các thẻ trong Product Backlog chỉ có 1 dòng tiêu đề (ví dụ: "Làm chức năng gia hạn sách"), chưa có tiêu chí chấp nhận, chưa rõ quy tắc giới hạn số lần gia hạn.',
    choices: [
      {
        label: 'Bỏ qua bước làm rõ chi tiết, cứ ước lượng đại rồi vào Sprint lập trình viên tự suy luận.',
        verdict: 'antipattern',
        analysis:
          'Đưa sự mơ hồ thẳng vào mã nguồn — dẫn tới sai yêu cầu và làm lại tốn kém.',
        consequence:
          'Đến Sprint Review khách hàng từ chối sản phẩm vì chạy sai quy chế thư viện.',
      },
      {
        label: 'Thiết lập hoạt động Product Backlog Refinement (tinh chỉnh backlog) đều đặn trong mỗi Sprint (dành khoảng 5–10% thời gian) để PO, BA và Developers cùng làm rõ, chia nhỏ, bổ sung tiêu chí chấp nhận và ước lượng trước cho các hạng mục sắp vào 1–2 Sprint tới.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Product Backlog Refinement là hoạt động diễn ra liên tục giúp các hạng mục ở đầu Product Backlog đủ rõ ràng, nhỏ gọn (Ready) trước khi bước vào Sprint Planning.',
        consequence:
          'Sprint Planning cho Sprint 2 tuần rút gọn xuống còn 2–3 giờ mượt mà, chất lượng ước lượng tăng vọt và giảm mạnh rủi ro hiểu nhầm trong Sprint.',
      },
      {
        label: 'Yêu cầu PO/BA viết xong toàn bộ đặc tả chi tiết cho cả 12 tháng trước khi chạy Sprint 1.',
        verdict: 'antipattern',
        analysis:
          'Quay ngược về "Big Design Up Front" của Waterfall — tốn công viết chi tiết cho những phần xa xôi rất dễ thay đổi về sau.',
        consequence:
          'Lãng phí thời gian phân tích các hạng mục ưu tiên thấp và chậm ra mắt sản phẩm.',
      },
      {
        label: 'Kéo dài Sprint Planning chính thức thành 2 ngày liên tiếp ở đầu mỗi Sprint.',
        verdict: 'risky',
        analysis:
          'Lãng phí quá nhiều thời gian họp tập trung mà không giải quyết gốc rễ việc thiếu chuẩn bị liên tục.',
        consequence:
          'Chiếm 20% tổng thời gian của một Sprint 2 tuần chỉ để họp lập kế hoạch.',
      },
    ],
    reference: 'Scrum Guide 2020 – Product Backlog Refinement & Sprint Planning',
  },
  {
    id: 'sc-08',
    category: 'Chất lượng & DoD',
    role: 'Tech Lead / Scrum Master / PO',
    title: 'Tình huống 8: Đội đề xuất dành riêng 1 "Hardening Sprint" (Sprint dọn bug) ở cuối mỗi quý thay vì kiểm thử trong từng Sprint',
    situation:
      'Để tăng tốc độ ra tính năng, đội chỉ tập trung code trong 5 Sprint liên tiếp (bỏ qua test hồi quy và tối ưu hiệu năng), dự định Sprint thứ 6 sẽ không làm tính năng mới mà chỉ để "dọn bug và chuẩn bị phát hành".',
    choices: [
      {
        label: 'Cách này rất thông minh vì giúp 5 Sprint đầu đạt Velocity rất cao.',
        verdict: 'antipattern',
        analysis:
          'Hardening Sprint (hay Stabilization Sprint) là dấu hiệu của Definition of Done yếu — thực chất các Sprint trước chưa hề tạo ra Increment thực sự "Done".',
        consequence:
          'Lỗi tích tụ chồng chéo suốt 2,5 tháng; chi phí sửa tăng vọt theo quy luật Cost of Change; và thường 1 Sprint dọn bug sẽ không bao giờ đủ.',
      },
      {
        label: 'Nâng chuẩn Definition of Done để mỗi Sprint đều bao gồm kiểm thử tích hợp, kiểm thử hồi quy tự động và đảm bảo trạng thái có thể phát hành được (potentially releasable); đầu tư CI/CD và cắt nhỏ tính năng nếu cần để luôn giữ chất lượng ở từng Sprint.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020 & Agile Manifesto: Mỗi Increment ở cuối Sprint phải đạt DoD và ở trạng thái có thể sử dụng được, không trì hoãn chất lượng sang một Sprint riêng về sau.',
        consequence:
          'Phát hiện và xử lý lỗi ngay khi còn nhỏ, giữ nhịp độ phát triển bền vững và sẵn sàng phát hành bất cứ lúc nào kinh doanh cần.',
      },
      {
        label: 'Thuê thêm đội kiểm thử bên ngoài chạy riêng sau mỗi 5 Sprint để lập trình viên không phải bận tâm đến lỗi.',
        verdict: 'antipattern',
        analysis:
          'Phá vỡ tính đa chức năng (cross-functional) của Scrum Team và tạo vòng phản hồi trễ hàng tháng trời.',
        consequence:
          'Khi báo lỗi về thì lập trình viên đã quên ngữ cảnh code của 2 tháng trước, tốn gấp nhiều lần thời gian sửa.',
      },
      {
        label: 'Chỉ kiểm thử các lỗi làm sập ứng dụng, bỏ qua hoàn toàn lỗi giao diện và hiệu năng.',
        verdict: 'antipattern',
        analysis:
          'Gây suy giảm nghiêm trọng trải nghiệm người dùng và chất lượng sản phẩm.',
        consequence:
          'Tỷ lệ người dùng từ bỏ sản phẩm cao dù tính năng trên giấy có vẻ nhiều.',
      },
    ],
    reference: 'Scrum Guide 2020 – Increment & DoD; ISTQB CTFL v4.0 (Whole-Team Approach)',
  },
  {
    id: 'sc-09',
    category: 'Sự kiện Scrum',
    role: 'Scrum Master',
    title: 'Tình huống 9: Buổi Sprint Retrospective im phăng phắc — không ai dám góp ý vì sợ mất lòng hoặc bị đánh giá',
    situation:
      'Trong buổi Retrospective, Scrum Master hỏi "Sprint vừa rồi có gì chưa tốt?". Cả phòng im lặng 2 phút rồi một người nói "Mọi thứ đều ổn". Ai cũng biết vừa rồi code review bị nghẽn 3 ngày và yêu cầu giữa BA với Dev bị lệch nhau, nhưng không ai chịu nói ra.',
    choices: [
      {
        label: 'Kết thúc sớm buổi họp sau 5 phút vì mọi người bảo "đều ổn".',
        verdict: 'antipattern',
        analysis:
          'Bỏ lỡ cơ hội cải tiến quan trọng nhất của Scrum; vấn đề cũ sẽ lặp lại nguyên vẹn ở Sprint tiếp theo.',
        consequence:
          'Sự bực dọc âm ỉ tăng dần và hiệu suất đội ngày càng đi xuống.',
      },
      {
        label: 'Xây dựng tâm lý an toàn (Psychological Safety) và đổi kỹ thuật điều phối: nhắc nguyên tắc Prime Directive (mọi người đều đã làm tốt nhất trong khả năng lúc đó, tập trung vào QUY TRÌNH chứ không đổ lỗi cá nhân), cho viết ẩn danh (sticky notes) 5 phút, bầu chọn 1–2 vấn đề lớn nhất và chốt hành động cải tiến cụ thể có người theo dõi.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Values (Cởi mở, Dũng cảm, Tôn trọng) & Sprint Retrospective: Cải tiến chỉ xảy ra khi nhóm thấy an toàn để nói sự thật và tập trung giải quyết hệ thống thay vì chỉ trích cá nhân.',
        consequence:
          'Thành viên dần cởi mở, mỗi Sprint giải quyết dứt điểm 1–2 nút thắt thực sự thay vì họp cho có.',
        dialogue:
          'Mẫu mở đầu của SM: "Hôm nay chúng ta không tìm xem ai sai, mà tìm xem quy trình phối hợp chỗ nào đang làm cả nhóm vất vả. Mọi người có 5 phút ghi ẩn danh vào 2 cột: Điều nên tiếp tục & Điều làm mình mất thời gian nhất Sprint vừa rồi."',
      },
      {
        label: 'Mời Giám đốc nhân sự vào dự Retrospective để ghi nhận xem ai tích cực phát biểu.',
        verdict: 'antipattern',
        analysis:
          'Retrospective là buổi họp NỘI BỘ của Scrum Team. Đưa quản lý đánh giá nhân sự vào sẽ phá hủy hoàn toàn tâm lý an toàn.',
        consequence:
          'Không ai dám nói bất kỳ khuyết điểm nào vì sợ ảnh hưởng đánh giá cá nhân.',
      },
      {
        label: 'Chỉ đích danh hai người gây tắc code review trước cả nhóm để rút kinh nghiệm.',
        verdict: 'antipattern',
        analysis:
          'Công kích cá nhân vi phạm giá trị Tôn trọng (Respect) và làm tê liệt sự cởi mở.',
        consequence:
          'Đội chia rẽ, các thành viên chuyển sang phòng thủ và đổ lỗi ngược lại cho nhau.',
      },
    ],
    reference: 'Scrum Guide 2020 – Sprint Retrospective & Scrum Values',
  },
  {
    id: 'sc-10',
    category: 'Sprint & Thay đổi',
    role: 'Product Owner',
    title: 'Tình huống 10: Khi nào được phép HỦY (Cancel) một Sprint đang chạy giữa chừng?',
    situation:
      'Đội đang chạy ngày thứ 4 của Sprint 2 tuần với Sprint Goal là "Tích hợp cổng thanh toán đối tác X". Đột nhiên đối tác X tuyên bố ngừng cung cấp dịch vụ API tại Việt Nam ngay lập tức; toàn bộ tính năng đang làm trở nên vô nghĩa.',
    choices: [
      {
        label: 'Tiếp tục làm hết 6 ngày còn lại cho đúng quy tắc time-box rồi mới bỏ code đi.',
        verdict: 'antipattern',
        analysis:
          'Lãng phí hoàn toàn 6 ngày công của cả đội vào một mục tiêu đã lỗi thời.',
        consequence:
          'Gây ức chế cho đội ngũ và thiệt hại trực tiếp ngân sách dự án.',
      },
      {
        label: 'Product Owner (người duy nhất có thẩm quyền) chính thức hủy Sprint vì Sprint Goal đã trở nên lỗi thời (obsolete); các hạng mục đã hoàn thành đạt DoD được rà soát, phần chưa xong ước lượng lại và đưa về Product Backlog, sau đó lập kế hoạch Sprint mới với mục tiêu mới.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Scrum Guide 2020: Một Sprint chỉ bị hủy nếu Sprint Goal trở nên lỗi thời, và DUY NHẤT Product Owner có quyền hủy Sprint.',
        consequence:
          'Chặn đứng lãng phí ngay lập tức và chuyển nguồn lực sang phương án đối tác thanh toán thay thế một cách có trật tự.',
      },
      {
        label: 'Scrum Master tự quyết định hủy Sprint mà không cần hỏi Product Owner.',
        verdict: 'antipattern',
        analysis:
          'Sai thẩm quyền theo Scrum Guide 2020 — Scrum Master có thể tư vấn, nhưng chỉ Product Owner mới có quyền hủy Sprint.',
        consequence:
          'Xâm phạm vai trò và dễ dẫn đến quyết định thiếu góc nhìn kinh doanh.',
      },
      {
        label: 'Cả nhóm nghỉ việc chờ 2 tuần tới khi đối tác mới ký hợp đồng xong.',
        verdict: 'risky',
        analysis:
          'Trong Product Backlog luôn có các hạng mục giá trị khác đã sẵn sàng để lập Sprint mới ngay.',
        consequence:
          'Lãng phí công suất làm việc của toàn đội.',
      },
    ],
    reference: 'Scrum Guide 2020 – Cancelling a Sprint',
  },
  {
    id: 'sc-11',
    category: 'Sprint & Thay đổi',
    role: 'Product Owner / PM / BA',
    title: 'Tình huống 11: Khách hàng ép khóa cứng CẢ 3 đỉnh (Phạm vi 100%, Thời gian 4 tháng, Ngân sách trần) nhưng vẫn muốn thêm tính năng mới',
    situation:
      'Dự án đang áp dụng Agile với đội ổn định 6 người (Chi phí cố định) và mốc ra mắt cứng sau 4 tháng (Thời gian cố định). Tháng thứ 2, khách hàng yêu cầu bổ sung thêm 3 báo cáo phức tạp nhưng khẳng định: "Không tăng ngân sách, không lùi ngày ra mắt, và cũng không được cắt bỏ bất kỳ tính năng nào trong danh sách cũ".',
    choices: [
      {
        label: 'Cứ gật đầu nhận hết rồi yêu cầu đội cắt bớt kiểm thử và tăng ca tối để kịp ngày ra mắt.',
        verdict: 'antipattern',
        analysis:
          'Vi phạm hoàn toàn nguyên lý Tam giác Sắt Đảo ngược (Inverted Iron Triangle) trong Agile Project Management For Dummies: khi Thời gian, Chi phí và Phạm vi đều bị khóa cứng, yếu tố duy nhất bị ép vỡ sẽ là CHẤT LƯỢNG.',
        consequence:
          'Phần mềm ra mắt đầy lỗi, đội ngũ kiệt sức (vi phạm nhịp độ bền vững) và chi phí sửa lỗi sau go-live vượt xa ngân sách ban đầu.',
      },
      {
        label: 'Minh bạch bằng mô hình Tam giác Sắt Đảo ngược của Agile: giữ cố định Thời gian, Ngân sách và chuẩn Chất lượng (DoD), sau đó cùng khách hàng chọn 1 trong 3 phương án đánh đổi rõ ràng: (1) Đổi chỗ — đưa 3 báo cáo mới vào và dời các tính năng ít giá trị hơn sang Release 2; (2) Mở rộng thời gian/ngân sách cho thêm Sprint; hoặc (3) Cắt dọc phiên bản tối giản của 3 báo cáo.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Agile Project Management For Dummies (Part 1 & Part 4): Trong Agile, Thời gian và Chi phí là cố định (fixed), còn Phạm vi (Scope) là biến linh hoạt được sắp ưu tiên liên tục để tối đa hóa giá trị trong ngân sách đó.',
        consequence:
          'Khách hàng nắm quyền chủ động lựa chọn thứ giá trị nhất cho ngày ra mắt mà vẫn bảo toàn chất lượng và tiến độ cam kết.',
        dialogue:
          'Mẫu trao đổi: "Để giữ đúng ngày khai giảng sau 4 tháng, đúng ngân sách và không hạ chuẩn kiểm thử, chúng ta có thể đưa 3 báo cáo này vào ngay nếu dời 2 tính năng ưu tiên thấp hơn (như giao diện tùy biến màu sắc) sang đợt phát hành tháng 6. Anh/chị thấy phương án đổi ưu tiên nào mang lại giá trị lớn nhất cho ngày ra mắt?"',
      },
      {
        label: 'Im lặng không tranh luận, đến sát ngày ra mắt mới báo là không kịp làm 3 báo cáo mới.',
        verdict: 'antipattern',
        analysis:
          'Phá hủy trụ cột Minh bạch (Transparency) và gây sốc mất niềm tin nghiêm trọng ở cuối dự án.',
        consequence:
          'Mâu thuẫn hợp đồng căng thẳng vào phút chót khi đã quá muộn để xoay xở.',
      },
      {
        label: 'Tuyển gấp thêm 6 lập trình viên mới vào tháng thứ 3 để tăng gấp đôi tốc độ.',
        verdict: 'risky',
        analysis:
          'Theo định luật Brooks và khuyến cáo trong Agile For Dummies: thêm người vào dự án đang gấp thường làm chậm dự án hơn do chi phí đào tạo, bàn giao và giao tiếp tăng vọt.',
        consequence:
          'Vượt ngân sách mà tiến độ tháng thứ 3 còn chậm lại vì nhóm cũ phải dừng code để hướng dẫn người mới.',
      },
    ],
    reference: 'Mark C. Layton – Agile Project Management For Dummies (4th Ed.), Part 1 & Part 4 (Inverted Iron Triangle)',
  },
  {
    id: 'sc-12',
    category: 'Backlog & Ước lượng',
    role: 'Product Owner / Scrum Master / BA',
    title: 'Tình huống 12: Nhảy thẳng vào Sprint 1 mà không có Product Vision, Product Roadmap hay Release Plan',
    situation:
      'Để "làm Agile cho nhanh", đội bỏ qua khâu định nghĩa tầm nhìn sản phẩm và kế hoạch phát hành, lập tức gom 15 yêu cầu rời rạc từ email vào Sprint 1. Sau 4 Sprint (2 tháng), ban lãnh đạo hỏi "Khi nào có bản hoàn chỉnh để người dùng dùng thử và sản phẩm này phục vụ mục tiêu chiến lược nào?", không ai trong nhóm trả lời thống nhất được.',
    choices: [
      {
        label: 'Trả lời rằng "Làm Agile thì chỉ cần nhìn trước 2 tuần của từng Sprint, không cần Roadmap hay Release Plan".',
        verdict: 'antipattern',
        analysis:
          'Hiểu sai cực kỳ phổ biến về Agile. Agile không phải là "không lập kế hoạch", mà là lập kế hoạch liên tục theo 5 cấp độ (từ Tầm nhìn → Lộ trình → Phát hành → Sprint → Hằng ngày).',
        consequence:
          'Đội làm ra những mảnh tính năng rời rạc không khớp thành một sản phẩm hoàn chỉnh, dễ bị lãnh đạo cắt ngân sách vì không thấy định hướng giá trị.',
      },
      {
        label: 'Tạm dừng nạp tính năng rời rạc, tổ chức workshop ngắn cùng PO và Stakeholders để hoàn thiện 3 tầng nền của Roadmap to Value (Agile For Dummies): (1) Chốt Product Vision bằng Elevator Statement; (2) Vẽ Product Roadmap theo cụm tính năng & quý; (3) Thiết lập Release Plan (3–5 Sprint cho Release 1/MVP) làm kim chỉ nam cho các Sprint tiếp theo.',
        verdict: 'optimal',
        analysis:
          'Chuẩn Roadmap to Value & 5 Levels of Agile Planning (Mark C. Layton – Agile Project Management For Dummies, Ch. 7–8): Sprint Planning và Daily Scrum chỉ phát huy hiệu quả khi được dẫn dắt bởi Product Vision, Product Roadmap và Release Plan rõ ràng.',
        consequence:
          'Cả đội kỹ thuật lẫn ban lãnh đạo đều nhìn chung một "ngôi sao Bắc Đẩu" (Vision), biết rõ mục tiêu Release 1 sau 3–5 Sprint và ưu tiên đúng những việc tạo giá trị cao nhất.',
        dialogue:
          'Mẫu đề xuất: "Chạy Sprint nhanh nhưng thiếu bản đồ tổng thể đang khiến tính năng bị rời rạc. Mình chỉ cần nửa ngày workshop với PO và các bên liên quan để chốt câu Elevator Statement (Product Vision), vẽ Product Roadmap 6 tháng và xác định rõ phạm vi lõi của Release 1 trong 4 Sprint tới."',
      },
      {
        label: 'Dừng phát triển hẳn 3 tháng để viết bản kế hoạch Waterfall chi tiết tới từng ngày cho cả 2 năm tới.',
        verdict: 'antipattern',
        analysis:
          'Rơi sang thái cực ngược lại — lập kế hoạch cứng quá chi tiết cho tương lai xa nơi yêu cầu chắc chắn sẽ thay đổi.',
        consequence:
          'Mất toàn bộ lợi thế thích nghi và bàn giao sớm của Agile.',
      },
      {
        label: 'Để từng lập trình viên tự tưởng tượng ra tầm nhìn sản phẩm theo cách mình thích.',
        verdict: 'antipattern',
        analysis:
          'Mỗi người kéo sản phẩm về một hướng khác nhau, không tạo ra sự đồng bộ chiến lược.',
        consequence:
          'Giao diện, kiến trúc và tính năng mâu thuẫn nhau sau vài Sprint.',
      },
    ],
    reference: 'Mark C. Layton – Agile Project Management For Dummies (4th Ed.), Ch. 7–8 (Roadmap to Value & 5 Levels of Planning)',
  },
];
