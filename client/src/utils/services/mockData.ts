import { EContactStatus, EStatus, EUserStatus } from "../types/enum";

// User mock data
export const mockUsers: IUser[] = [
    {
        id: "user1",
        email: "alice@example.com",
        password: "password123",
        name: "Alice Nguyen",
        phone: "0901234567",
        role: "admin",
        status: EUserStatus.PENDING,
    },
    {
        id: "user2",
        email: "bob@example.com",
        password: "password456",
        name: "Bob Tran",
        phone: "0902345678",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user3",
        email: "charlie@example.com",
        password: "password789",
        name: "Charlie Le",
        phone: "0903456789",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user4",
        email: "diana@example.com",
        password: "password101",
        name: "Diana Pham",
        phone: "0904567890",
        role: "editor",
        status: EUserStatus.PENDING,
    },
    {
        id: "user5",
        email: "edward@example.com",
        password: "password202",
        name: "Edward Vo",
        phone: "0905678901",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user6",
        email: "fiona@example.com",
        password: "password303",
        name: "Fiona Dang",
        phone: "0906789012",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user7",
        email: "george@example.com",
        password: "password404",
        name: "George Bui",
        phone: "0907890123",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user8",
        email: "hannah@example.com",
        password: "password505",
        name: "Hannah Ho",
        phone: "0908901234",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user9",
        email: "ian@example.com",
        password: "password606",
        name: "Ian Nguyen",
        phone: "0909012345",
        role: "user",
        status: EUserStatus.PENDING,
    },
    {
        id: "user10",
        email: "julia@example.com",
        password: "password707",
        name: "Julia Phan",
        phone: "0910123456",
        role: "user",
        status: EUserStatus.PENDING,
    },
];

// Program mock data
export const mockPrograms: IProgram[] = [
    {
        id: "program1",
        title: "Du học Úc",
        description: "Chương trình du học tại Úc với nhiều ưu đãi.",
        country: "Australia",
        duration: "2 năm",
        tuition: "$20,000",
        requirements: ["IELTS 6.0", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Định cư"],
        imageUrl: "/images/mockPrograms/australia.jpg",
        featured: true,
        createdAt: new Date("2025-01-01"),
        updatedAt: new Date("2025-06-01"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program2",
        title: "Du học Canada",
        description: "Chương trình du học tại Canada.",
        country: "Canada",
        duration: "3 năm",
        tuition: "$25,000",
        requirements: ["IELTS 6.5", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/canada.jpg",
        featured: false,
        createdAt: new Date("2025-02-01"),
        updatedAt: new Date("2025-06-02"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program3",
        title: "Du học Đức",
        description: "Chương trình du học tại Đức.",
        country: "Germany",
        duration: "2 năm",
        tuition: "$18,000",
        requirements: ["B1 tiếng Đức", "Tốt nghiệp THPT"],
        benefits: ["Miễn học phí", "Cơ hội việc làm"],
        imageUrl: "/images/mockPrograms/germany.jpg",
        featured: true,
        createdAt: new Date("2025-03-01"),
        updatedAt: new Date("2025-06-03"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program4",
        title: "Du học Nhật Bản",
        description: "Chương trình du học tại Nhật Bản.",
        country: "Japan",
        duration: "1 năm",
        tuition: "$15,000",
        requirements: ["N3 tiếng Nhật", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/japan.jpg",
        featured: false,
        createdAt: new Date("2025-04-01"),
        updatedAt: new Date("2025-06-04"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program5",
        title: "Du học Hàn Quốc",
        description: "Chương trình du học tại Hàn Quốc.",
        country: "South Korea",
        duration: "2 năm",
        tuition: "$17,000",
        requirements: ["TOPIK 3", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Định cư"],
        imageUrl: "/images/mockPrograms/korea.jpg",
        featured: true,
        createdAt: new Date("2025-05-01"),
        updatedAt: new Date("2025-06-05"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program6",
        title: "Du học Đài Loan",
        description: "Chương trình du học tại Đài Loan.",
        country: "Taiwan",
        duration: "1.5 năm",
        tuition: "$16,000",
        requirements: ["TOCFL 3", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/taiwan.jpg",
        featured: false,
        createdAt: new Date("2025-06-01"),
        updatedAt: new Date("2025-06-06"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program7",
        title: "Du học Mỹ",
        description: "Chương trình du học tại Mỹ.",
        country: "USA",
        duration: "4 năm",
        tuition: "$30,000",
        requirements: ["SAT", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/usa.jpg",
        featured: true,
        createdAt: new Date("2025-07-01"),
        updatedAt: new Date("2025-07-07"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program8",
        title: "Du học Pháp",
        description: "Chương trình du học tại Pháp.",
        country: "France",
        duration: "3 năm",
        tuition: "$22,000",
        requirements: ["B2 tiếng Pháp", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/france.jpg",
        featured: false,
        createdAt: new Date("2025-08-01"),
        updatedAt: new Date("2025-08-08"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program9",
        title: "Du học Singapore",
        description: "Chương trình du học tại Singapore.",
        country: "Singapore",
        duration: "2 năm",
        tuition: "$19,000",
        requirements: ["IELTS 6.0", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/singapore.jpg",
        featured: true,
        createdAt: new Date("2025-09-01"),
        updatedAt: new Date("2025-09-09"),
        status: EStatus.ACTIVE,
    },
    {
        id: "program10",
        title: "Du học Thụy Sĩ",
        description: "Chương trình du học tại Thụy Sĩ.",
        country: "Switzerland",
        duration: "2 năm",
        tuition: "$21,000",
        requirements: ["B2 tiếng Anh", "Tốt nghiệp THPT"],
        benefits: ["Cơ hội việc làm", "Học bổng"],
        imageUrl: "/images/mockPrograms/switzerland.jpg",
        featured: false,
        createdAt: new Date("2025-10-01"),
        updatedAt: new Date("2025-10-10"),
        status: EStatus.ACTIVE,
    },
];

// Blog mock data
export const mockBlogs: IBlog[] = [
    {
        id: "blog1",
        title: "Kinh nghiệm du học Úc - Lời khuyên từ cựu du học sinh",
        excerpt: "Bài viết chia sẻ kinh nghiệm thực tế từ cựu du học sinh về quá trình chuẩn bị, học tập và sinh sống tại Úc, giúp bạn có cái nhìn đầy đủ về hành trình du học Úc.",
        content: `<h2 id="section-1">Giới thiệu về du học Úc</h2>
<p>Australia (Úc) là một trong những điểm đến du học hàng đầu thế giới với hệ thống giáo dục chất lượng cao, môi trường sống an toàn và cơ hội nghề nghiệp hấp dẫn. Mỗi năm, Úc đón nhận hơn 700,000 sinh viên quốc tế, trong đó có khoảng 30,000 sinh viên đến từ Việt Nam.</p>
<p>Sau 4 năm du học và làm việc tại Melbourne, tôi muốn chia sẻ những kinh nghiệm thực tế giúp các bạn có cái nhìn đầy đủ về hành trình du học Úc từ khâu chuẩn bị đến cuộc sống thực tế tại đây.</p>

<h2 id="section-2">Chuẩn bị hồ sơ du học Úc</h2>
<p>Quá trình chuẩn bị hồ sơ du học Úc đòi hỏi sự tỉ mỉ và kế hoạch cụ thể. Dưới đây là các bước quan trọng mà tôi đã thực hiện:</p>

<h3>1. Chứng minh trình độ tiếng Anh</h3>
<p>IELTS Academic là chứng chỉ được chấp nhận rộng rãi nhất. Tùy theo trường và ngành học, điểm IELTS yêu cầu thường từ 6.0-7.0, không có kỹ năng nào dưới 5.5-6.0. Nếu chưa đạt yêu cầu, bạn có thể đăng ký khóa tiếng Anh tại Úc trước khi vào khóa chính.</p>

<p>Lời khuyên của tôi là nên chuẩn bị IELTS trước ít nhất 6 tháng và luyện thi nghiêm túc. Tôi đã mất 3 lần thi mới đạt được 6.5 điểm như yêu cầu của trường.</p>

<h3>2. Chọn trường và ngành học</h3>
<p>Úc có 43 trường đại học với nhiều chương trình học đa dạng. Nhóm Go8 (Group of Eight) bao gồm 8 trường đại học hàng đầu như University of Melbourne, University of Sydney... thường có yêu cầu đầu vào cao nhưng bằng cấp được đánh giá rất cao.</p>

<p>Khi chọn trường, tôi đã cân nhắc nhiều yếu tố:</p>
<ul>
  <li>Vị trí địa lý và khí hậu (Melbourne mát mẻ hơn Sydney)</li>
  <li>Chi phí sinh hoạt (Adelaide và Perth thường rẻ hơn Sydney và Melbourne)</li>
  <li>Xếp hạng của trường về ngành học (RMIT rất mạnh về thiết kế và công nghệ)</li>
  <li>Cơ hội thực tập và việc làm sau tốt nghiệp</li>
</ul>

<h3>3. Chuẩn bị tài chính</h3>
<p>Chi phí du học Úc khá cao so với các nước trong khu vực:</p>
<ul>
  <li>Học phí: AU$20,000-45,000/năm tùy trường và ngành</li>
  <li>Chi phí sinh hoạt: AU$21,000-25,000/năm</li>
  <li>Bảo hiểm y tế OSHC: AU$500-700/năm</li>
</ul>

<p>Để xin visa, tôi phải chứng minh khả năng tài chính cho ít nhất năm đầu tiên (học phí + sinh hoạt). Tài khoản ngân hàng cần được duy trì ít nhất 3 tháng trước khi nộp hồ sơ visa.</p>

<h2 id="section-3">Cuộc sống thực tế tại Úc</h2>

<h3>1. Nhà ở và chi phí sinh hoạt</h3>
<p>Tìm nhà là một trong những thách thức lớn nhất với sinh viên quốc tế. Có nhiều lựa chọn như:</p>
<ul>
  <li><strong>Ký túc xá:</strong> Thuận tiện nhưng đắt (AU$200-350/tuần)</li>
  <li><strong>Homestay:</strong> Ở cùng gia đình bản địa, tốt để cải thiện tiếng Anh (AU$180-300/tuần)</li>
  <li><strong>Share house:</strong> Phổ biến nhất, chia sẻ nhà với sinh viên khác (AU$150-250/tuần)</li>
</ul>

<p>Kinh nghiệm của tôi là 3 tháng đầu ở homestay để làm quen với môi trường và cải thiện tiếng Anh, sau đó chuyển sang share house để tiết kiệm chi phí.</p>

<h3>2. Việc làm bán thời gian</h3>
<p>Sinh viên quốc tế được phép làm việc 40 giờ mỗi hai tuần trong kỳ học và không giới hạn trong kỳ nghỉ. Lương tối thiểu tại Úc khoảng AU$20-25/giờ.</p>

<p>Các công việc phổ biến cho sinh viên:</p>
<ul>
  <li>Phục vụ nhà hàng, quán café</li>
  <li>Bán lẻ, siêu thị</li>
  <li>Trợ giảng, hỗ trợ nghiên cứu (trong trường)</li>
  <li>Giao hàng (Uber Eats, Deliveroo)</li>
</ul>

<p>Tôi đã làm việc tại một quán café gần trường với mức lương AU$23/giờ. Công việc này không chỉ giúp tôi trang trải chi phí mà còn cải thiện đáng kể kỹ năng giao tiếp và hiểu biết về văn hóa Úc.</p>

<h3>3. Phương pháp học tập</h3>
<p>Hệ thống giáo dục Úc khuyến khích tư duy độc lập, sáng tạo và học tập chủ động. Sinh viên cần:</p>
<ul>
  <li>Tự nghiên cứu nhiều</li>
  <li>Tham gia thảo luận nhóm</li>
  <li>Hoàn thành các dự án thực tế</li>
  <li>Phát triển kỹ năng thuyết trình và viết báo cáo</li>
</ul>

<p>Ban đầu, tôi gặp nhiều khó khăn khi thích nghi với phương pháp học này, đặc biệt là áp lực phải phát biểu trong lớp. Tôi đã tham gia các nhóm học tập và tận dụng giờ tư vấn của giảng viên để cải thiện.</p>

<h2 id="section-4">Cơ hội sau tốt nghiệp</h2>

<h3>1. Visa sau tốt nghiệp (PSW)</h3>
<p>Sinh viên tốt nghiệp từ các trường đại học Úc có thể xin Visa sau tốt nghiệp (Post-Study Work Visa) với thời hạn:</p>
<ul>
  <li>2 năm cho bằng cử nhân</li>
  <li>3 năm cho bằng thạc sĩ nghiên cứu</li>
  <li>4 năm cho bằng tiến sĩ</li>
</ul>

<p>Visa này cho phép bạn làm việc toàn thời gian tại Úc và là cầu nối quan trọng để xin định cư.</p>

<h3>2. Cơ hội việc làm</h3>
<p>Những ngành có nhu cầu cao tại Úc hiện nay:</p>
<ul>
  <li>Công nghệ thông tin</li>
  <li>Y tế và điều dưỡng</li>
  <li>Kế toán và tài chính</li>
  <li>Kỹ thuật</li>
  <li>Giáo dục</li>
</ul>

<p>Sau khi tốt nghiệp ngành IT, tôi đã tìm được việc làm tại một công ty công nghệ tại Melbourne với mức lương khởi điểm AU$65,000/năm. Quá trình tìm việc kéo dài khoảng 3 tháng với hơn 50 đơn ứng tuyển.</p>

<h2 id="section-5">Lời khuyên cho người mới bắt đầu</h2>

<p>Dựa trên kinh nghiệm cá nhân, tôi có một số lời khuyên cho các bạn đang có kế hoạch du học Úc:</p>

<ol>
  <li><strong>Chuẩn bị kỹ về ngôn ngữ:</strong> Đầu tư thời gian cho tiếng Anh, đặc biệt là kỹ năng nghe và nói</li>
  <li><strong>Nghiên cứu kỹ về trường và ngành học:</strong> Chọn ngành phù hợp với đam mê và có triển vọng việc làm</li>
  <li><strong>Lập kế hoạch tài chính chi tiết:</strong> Dự trù đầy đủ các khoản chi phí và có kế hoạch dự phòng</li>
  <li><strong>Mạng lưới hỗ trợ:</strong> Kết nối với cộng đồng sinh viên Việt Nam và quốc tế</li>
  <li><strong>Tham gia hoạt động ngoại khóa:</strong> Cải thiện kỹ năng mềm và mở rộng mạng lưới</li>
  <li><strong>Cân bằng giữa học tập và làm việc:</strong> Ưu tiên học tập nhưng vẫn tận dụng cơ hội làm việc để tích lũy kinh nghiệm</li>
</ol>

<p>Du học Úc là một hành trình đầy thử thách nhưng cũng mang lại nhiều cơ hội và trải nghiệm quý báu. Với sự chuẩn bị kỹ lưỡng và thái độ tích cực, tôi tin rằng bạn sẽ thành công trên con đường du học của mình.</p>

<p>Nếu có bất kỳ câu hỏi nào, hãy để lại bình luận bên dưới hoặc liên hệ trực tiếp với VietAuAcademy để được tư vấn chi tiết về du học Úc.</p>`,
        author: mockUsers[0].name,
        publishedAt: "2025-01-10",
        imageUrl: "/images/blogs/australia.jpg",
        category: "Kinh nghiệm",
        slug: "kinh-nghiem-du-hoc-uc",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog2",
        title: "Top 10 học bổng du học Canada năm 2025 dành cho sinh viên Việt Nam",
        excerpt: "Tổng hợp các học bổng giá trị cao dành cho sinh viên Việt Nam muốn du học Canada, bao gồm điều kiện, quy trình đăng ký và lời khuyên từ chuyên gia.",
        content: `<h2 id="section-1">Tổng quan về cơ hội học bổng tại Canada</h2>
<p>Canada không chỉ nổi tiếng với chất lượng giáo dục hàng đầu thế giới mà còn có nhiều chương trình học bổng hấp dẫn dành cho sinh viên quốc tế. Năm 2025, chính phủ Canada và các trường đại học đã tăng cường đầu tư vào các chương trình học bổng, đặc biệt cho sinh viên đến từ các nước Đông Nam Á, trong đó có Việt Nam.</p>

<p>Bài viết này sẽ giới thiệu 10 học bổng giá trị cao nhất dành cho sinh viên Việt Nam, cùng với điều kiện và quy trình đăng ký chi tiết.</p>

<h2 id="section-2">Top 10 học bổng du học Canada năm 2025</h2>

<h3>1. Học bổng Vanier Canada Graduate Scholarships</h3>
<p><strong>Giá trị:</strong> CAD$50,000/năm trong 3 năm</p>
<p><strong>Đối tượng:</strong> Sinh viên theo học chương trình Tiến sĩ</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>Thành tích học tập xuất sắc (GPA từ 3.7/4.0 trở lên)</li>
  <li>Khả năng nghiên cứu và tiềm năng lãnh đạo</li>
  <li>Được đề cử bởi trường đại học Canada</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 11 hàng năm</p>
<p><strong>Website:</strong> <a href="http://www.vanier.gc.ca">www.vanier.gc.ca</a></p>

<h3>2. Học bổng Canada-ASEAN Scholarships and Educational Exchanges for Development (SEED)</h3>
<p><strong>Giá trị:</strong> CAD$10,000-15,000 cho các khóa ngắn hạn (5-6 tháng)</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học và sau đại học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>Là công dân Việt Nam</li>
  <li>Đã đăng ký hoặc đang theo học tại trường đại học ở Việt Nam</li>
  <li>Tiếng Anh hoặc tiếng Pháp tốt</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 3 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.educanada.ca">www.educanada.ca</a></p>

<h3>3. Học bổng SFU International Entrance Scholarship (Simon Fraser University)</h3>
<p><strong>Giá trị:</strong> CAD$20,000-35,000</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học mới nhập học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>GPA từ 90% trở lên trong ba năm học gần nhất</li>
  <li>IELTS từ 7.0 trở lên</li>
  <li>Hoạt động ngoại khóa nổi bật</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 1 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.sfu.ca">www.sfu.ca</a></p>

<h3>4. Học bổng University of Toronto Lester B. Pearson International Scholarship</h3>
<p><strong>Giá trị:</strong> Chi trả toàn bộ học phí, chỗ ở, sách vở và sinh hoạt phí trong 4 n��m</p>
<p><strong>Đối tượng:</strong> Sinh viên quốc tế bắt đầu chương trình đại học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>Thành tích học tập xuất sắc</li>
  <li>Khả năng lãnh đạo và tác động đến cộng đồng</li>
  <li>Được đề cử bởi trường trung học</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 11 hàng năm</p>
<p><strong>Website:</strong> <a href="https://future.utoronto.ca">future.utoronto.ca</a></p>

<h3>5. Học bổng Trudeau Foundation Doctoral Scholarships</h3>
<p><strong>Giá trị:</strong> CAD$40,000/năm trong 3 năm</p>
<p><strong>Đối tượng:</strong> Sinh viên theo học chương trình Tiến sĩ trong lĩnh vực khoa học xã hội và nhân văn</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>Thành tích học tập xuất sắc</li>
  <li>Khả năng nghiên cứu và tham gia hoạt động cộng đồng</li>
  <li>Đề tài nghiên cứu liên quan đến một trong bốn lĩnh vực ưu tiên của quỹ</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 12 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.trudeaufoundation.ca">www.trudeaufoundation.ca</a></p>

<h3>6. Học bổng York University International Student Scholarship</h3>
<p><strong>Giá trị:</strong> CAD$60,000-100,000 (15,000-25,000/năm trong 4 năm)</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học mới nhập học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>GPA từ 85% trở lên</li>
  <li>Hoạt động lãnh đạo và đóng góp cộng đồng</li>
  <li>Đăng ký nhập học trước hạn chót</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 2 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.yorku.ca">www.yorku.ca</a></p>

<h3>7. Học bổng UBC International Major Entrance Scholarship (IMES)</h3>
<p><strong>Giá trị:</strong> CAD$5,000-40,000</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học mới nhập học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>Thành tích học tập xuất sắc</li>
  <li>Kỹ năng lãnh đạo</li>
  <li>Tham gia hoạt động cộng đồng</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 12 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.ubc.ca">www.ubc.ca</a></p>

<h3>8. Học bổng McGill University Major Entrance Scholarships</h3>
<p><strong>Giá trị:</strong> CAD$3,000-12,000/năm, có thể gia hạn</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học mới nhập học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>GPA từ 95% trở lên</li>
  <li>Hoạt động lãnh đạo nổi bật</li>
  <li>Đóng góp cho cộng đồng</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Tháng 12 hàng năm</p>
<p><strong>Website:</strong> <a href="https://www.mcgill.ca">www.mcgill.ca</a></p>

<h3>9. Học bổng Ontario Graduate Scholarship (OGS)</h3>
<p><strong>Giá trị:</strong> CAD$15,000/năm</p>
<p><strong>Đối tượng:</strong> Sinh viên thạc sĩ và tiến sĩ tại các trường ở Ontario</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>GPA từ 80% trở lên trong hai năm gần nhất</li>
  <li>Đã được nhận vào chương trình sau đại học tại Ontario</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Khác nhau tùy theo trường, thường vào tháng 1-2</p>
<p><strong>Website:</strong> <a href="https://osap.gov.on.ca">osap.gov.on.ca</a></p>

<h3>10. Học bổng Humber College International Entrance Scholarships</h3>
<p><strong>Giá trị:</strong> CAD$2,000-4,000</p>
<p><strong>Đối tượng:</strong> Sinh viên đại học và cao đẳng mới nhập học</p>
<p><strong>Yêu cầu:</strong></p>
<ul>
  <li>GPA từ 75% trở lên</li>
  <li>Đã được nhận vào học tại Humber College</li>
</ul>
<p><strong>Hạn nộp hồ sơ:</strong> Xét tự động khi đăng ký nhập học</p>
<p><strong>Website:</strong> <a href="https://international.humber.ca">international.humber.ca</a></p>

<h2 id="section-3">Quy trình đăng ký học bổng hiệu quả</h2>

<h3>1. Chuẩn bị hồ sơ</h3>
<p>Một bộ hồ sơ cạnh tranh thường bao gồm:</p>
<ul>
  <li>Bảng điểm và chứng chỉ học thuật</li>
  <li>Chứng chỉ tiếng Anh (IELTS/TOEFL)</li>
  <li>Thư giới thiệu (2-3 thư)</li>
  <li>Thư trình bày mục tiêu học tập (Statement of Purpose)</li>
  <li>CV/Resume chi tiết về thành tích học tập và hoạt động ngoại khóa</li>
  <li>Các giải thưởng và thành tích nổi bật</li>
</ul>

<h3>2. Viết thư trình bày mục tiêu học tập xuất sắc</h3>
<p>Thư trình bày mục tiêu học tập (SOP) là một trong những yếu tố quan trọng nhất trong hồ sơ xin học bổng. Hãy đảm bảo thư của bạn:</p>
<ul>
  <li>Cá nhân hóa cho từng chương trình học bổng</li>
  <li>Thể hiện rõ mục tiêu học tập và nghề nghiệp</li>
  <li>Nêu bật các thành tích và kinh nghiệm liên quan</li>
  <li>Giải thích lý do bạn xứng đáng nhận học bổng</li>
  <li>Trình bày kế hoạch đóng góp sau khi hoàn thành chương trình học</li>
</ul>

<h3>3. Thời gian nộp hồ sơ</h3>
<p>Hầu hết các học bổng lớn tại Canada có thời hạn nộp hồ sơ từ 8-12 tháng trước khi khóa học bắt đầu. Việc lập kế hoạch sớm là vô cùng quan trọng:</p>
<ul>
  <li>Bắt đầu tìm hiểu về học bổng: 12-18 tháng trước khi dự định nhập học</li>
  <li>Chuẩn bị và hoàn thiện hồ sơ: 3-6 tháng trước hạn nộp</li>
  <li>Nộp hồ sơ: ít nhất 1 tuần trước hạn chót</li>
</ul>

<h2 id="section-4">Lời khuyên từ chuyên gia</h2>

<p>Chúng tôi đã phỏng vấn chuyên gia tư vấn du học Canada - Tiến sĩ Nguyễn Văn A, giám đốc tư vấn tại VietAuAcademy và cựu học bổng Vanier, chia sẻ một số lời khuyên quý báu:</p>

<blockquote>
"Sinh viên Việt Nam thường mắc sai lầm khi chỉ tập trung vào điểm số mà không chú trọng đủ vào hoạt động ngoại khóa và kỹ năng lãnh đạo. Hội đồng xét duyệt học bổng Canada đánh giá cao những ứng viên toàn diện, không chỉ xuất sắc trong học tập mà còn có đóng góp cho cộng đồng và tiềm năng trở thành nhà lãnh đạo tương lai."
</blockquote>

<p>Một số lời khuyên cụ thể:</p>
<ol>
  <li><strong>Đầu tư thời gian nghiên cứu:</strong> Tìm hiểu kỹ về từng học bổng và điều chỉnh hồ sơ cho phù hợp</li>
  <li><strong>Nâng cao tiếng Anh:</strong> Đạt điểm IELTS tối thiểu 7.0 để cạnh tranh hiệu quả</li>
  <li><strong>Tham gia hoạt động tình nguyện và lãnh đạo:</strong> Xây dựng hồ sơ toàn diện</li>
  <li><strong>Kết nối với cựu sinh viên:</strong> Học hỏi kinh nghiệm từ những người đã thành công</li>
  <li><strong>Nộp hồ sơ sớm:</strong> Tránh các vấn đề kỹ thuật vào phút chót</li>
  <li><strong>Chuẩn bị kỹ cho phỏng vấn:</strong> Một số học bổng yêu cầu phỏng vấn trực tiếp hoặc qua video</li>
</ol>

<h2 id="section-5">Kết luận</h2>

<p>Canada tiếp tục là một trong những điểm đến du học hấp dẫn nhất cho sinh viên Việt Nam với chất lượng giáo dục hàng đầu và nhiều cơ hội học bổng giá trị. Với sự chuẩn bị kỹ lưỡng và chiến lược phù hợp, cơ hội nhận học bổng du học Canada là hoàn toàn trong tầm tay.</p>

<p>Tại VietAuAcademy, chúng tôi cung cấp dịch vụ tư vấn chuyên nghiệp giúp bạn tối đa hóa cơ hội nhận học bổng. Đội ngũ tư vấn viên của chúng tôi, với nhiều cựu học bổng Canada, sẽ hỗ trợ bạn từ khâu chọn trường, ngành học đến hoàn thiện hồ sơ học bổng cạnh tranh.</p>

<p>Để được tư vấn cụ thể về các học bổng Canada phù hợp với hồ sơ của bạn, hãy liên hệ với chúng tôi qua form liên hệ hoặc số hotline 19001000.</p>`,
        author: mockUsers[1].name,
        publishedAt: "2025-02-15",
        imageUrl: "/images/blogs/canada.jpg",
        category: "Học bổng",
        slug: "hoc-bong-du-hoc-canada",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog3",
        title: "Hướng dẫn chi tiết du học Đức miễn học phí năm 2025",
        excerpt: "Khám phá chính sách miễn học phí tại Đức, các trường đại học công lập hàng đầu và quy trình đăng ký du học tiết kiệm chi phí hiệu quả nhất.",
        content: `<h2 id="section-1">Chính sách miễn học phí tại Đức - Lợi thế đặc biệt cho sinh viên quốc tế</h2>

<p>Đức là một trong số ít những quốc gia phát triển vẫn duy trì chính sách giáo dục đại học miễn phí hoặc chi phí thấp cho cả sinh viên trong nước và quốc tế. Chính sách này xuất phát từ triết lý giáo dục của Đức, coi giáo dục là quyền cơ bản của con người và là trách nhiệm của nhà nước.</p>

<p>Hiện nay, 15 trong số 16 bang của Đức vẫn áp dụng chính sách miễn học phí cho chương trình đại học và sau đại học tại các trường công lập. Chỉ riêng bang Baden-Württemberg áp dụng học phí đối với sinh viên quốc tế là 1,500 Euro/học kỳ (khoảng 3,000 Euro/năm), nhưng vẫn thấp hơn nhiều so với chi phí tại Mỹ, Úc, Anh hay Canada.</p>

<p>Khi theo học tại Đức, sinh viên chỉ cần đóng phí đăng ký (Semesterbeitrag) dao động từ 100-350 Euro/học kỳ tùy trường. Khoản phí này bao gồm:</p>
<ul>
  <li>Phí hành chính</li>
  <li>Phí đóng góp cho tổ chức sinh viên</li>
  <li>Phí sử dụng phương tiện công cộng trong khu vực (vé học kỳ)</li>
</ul>

<p>Chính sách miễn học phí này áp dụng cho hầu hết các chương trình giảng dạy bằng tiếng Đức và nhiều chương trình bằng tiếng Anh tại các trường đại học công lập.</p>

<h2 id="section-2">Các trường đại học công lập hàng đầu tại Đức</h2>

<p>Đức có hơn 400 trường đại học được công nhận, trong đó khoảng 300 trường là công lập. Dưới đây là một số trường đại học công lập hàng đầu của Đức với chính sách miễn học phí:</p>

<h3>1. Ludwig Maximilians University Munich (LMU)</h3>
<p><strong>Thành phố:</strong> Munich</p>
<p><strong>Xếp hạng quốc tế:</strong> Top 50 thế giới</p>
<p><strong>Chuyên ngành mạnh:</strong> Y học, Luật, Vật lý, Khoa học xã hội</p>
<p><strong>Phí đăng ký:</strong> Khoảng 130 Euro/học kỳ</p>
<p><strong>Chương trình tiếng Anh:</strong> Có nhiều chương trình thạc sĩ</p>

<h3>2. Technical University of Munich (TUM)</h3>
<p><strong>Thành phố:</strong> Munich</p>
<p><strong>Xếp hạng quốc tế:</strong> Top 50 thế giới</p>
<p><strong>Chuyên ngành mạnh:</strong> Kỹ thuật, Khoa học máy tính, Khoa học tự nhiên</p>
<p><strong>Phí đăng ký:</strong> Khoảng 145 Euro/học kỳ</p>
<p><strong>Chương trình tiếng Anh:</strong> Nhiều chương trình đại học và sau đại học</p>

<h3>3. Heidelberg University</h3>
<p><strong>Thành phố:</strong> Heidelberg</p>
<p><strong>Xếp hạng quốc tế:</strong> Top 60 thế giới</p>
<p><strong>Chuyên ngành mạnh:</strong> Y học, Khoa học tự nhiên, Nhân văn</p>
<p><strong>Phí đăng ký:</strong> Khoảng 160 Euro/học kỳ</p>
<p><strong>Chương trình tiếng Anh:</strong> Có nhiều chương trình thạc sĩ và tiến sĩ</p>

<h3>4. Humboldt University of Berlin</h3>
<p><strong>Thành phố:</strong> Berlin</p>
<p><strong>Xếp hạng quốc tế:</strong> Top 100 thế giới</p>
<p><strong>Chuyên ngành mạnh:</strong> Nhân văn, Khoa học xã hội, Luật</p>
<p><strong>Phí đăng ký:</strong> Khoảng 315 Euro/học kỳ (bao gồm vé phương tiện công cộng)</p>
<p><strong>Chương trình tiếng Anh:</strong> Có một số chương trình sau đại học</p>

<h3>5. RWTH Aachen University</h3>
<p><strong>Thành phố:</strong> Aachen</p>
<p><strong>Xếp hạng quốc tế:</strong> Top 150 thế giới</p>
<p><strong>Chuyên ngành mạnh:</strong> Kỹ thuật, Công nghệ, Khoa học máy tính</p>
<p><strong>Phí đăng ký:</strong> Khoảng 290 Euro/học kỳ</p>
<p><strong>Chương trình tiếng Anh:</strong> Nhiều chương trình thạc sĩ</p>

<h2 id="section-3">Điều kiện và yêu cầu du học Đức</h2>

<p>Để du học Đức với chính sách miễn học phí, sinh viên Việt Nam cần đáp ứng các yêu cầu sau:</p>

<h3>1. Yêu cầu học thuật</h3>
<ul>
  <li><strong>Bậc đại học:</strong> Tốt nghiệp THPT và hoàn thành 1 năm đại học tại Việt Nam hoặc đạt chứng chỉ Studienkolleg (khóa dự bị đại học)</li>
  <li><strong>Bậc thạc sĩ:</strong> Có bằng cử nhân liên quan đến ngành học</li>
  <li><strong>Bậc tiến sĩ:</strong> Có bằng thạc sĩ và đề cương nghiên cứu được chấp thuận</li>
</ul>

<h3>2. Yêu cầu ngôn ngữ</h3>
<p><strong>Đối với chương trình giảng dạy bằng tiếng Đức:</strong></p>
<ul>
  <li>Chứng chỉ TestDaF từ cấp độ 4 trở lên (trong tất cả các kỹ năng)</li>
  <li>Hoặc DSH-2/DSH-3</li>
  <li>Hoặc Goethe-Zertifikat C1/C2</li>
  <li>Hoặc telc Deutsch C1 Hochschule</li>
</ul>

<p><strong>Đối với chương trình giảng dạy bằng tiếng Anh:</strong></p>
<ul>
  <li>IELTS Academic từ 6.0-6.5 trở lên (tùy chương trình)</li>
  <li>Hoặc TOEFL iBT từ 80-100 điểm (tùy chương trình)</li>
  <li>Hoặc Cambridge English: Advanced (CAE) / Proficiency (CPE)</li>
</ul>

<h3>3. Yêu cầu tài chính</h3>
<p>Để xin visa du học Đức, sinh viên phải chứng minh khả năng tài chính đủ để chi trả chi phí sinh hoạt tại Đức, hiện tại là 11,208 Euro/năm (934 Euro/tháng x 12 tháng). Có nhiều cách để chứng minh tài chính:</p>

<ul>
  <li>Mở tài khoản ký quỹ (Blocked Account) tại Đức với số tiền 11,208 Euro</li>
  <li>Học bổng chính thức từ tổ chức được công nhận tại Đức</li>
  <li>Cam kết tài trợ từ công dân Đức hoặc người nước ngoài có giấy phép cư trú dài hạn tại Đức</li>
</ul>

<h2 id="section-4">Quy trình đăng ký du học Đức chi tiết</h2>

<p>Quy trình đăng ký du học Đức thường kéo dài từ 6-12 tháng, vì vậy sinh viên nên lập kế hoạch sớm. Dưới đây là các bước chi tiết:</p>

<h3>1. Chọn trường và chương trình học (12-18 tháng trước khi bắt đầu)</h3>
<ul>
  <li>Nghiên cứu kỹ các trường đại học và chương trình phù hợp</li>
  <li>Kiểm tra yêu cầu đầu vào cụ thể của từng chương trình</li>
  <li>Xác định yêu cầu ngôn ngữ và chuẩn bị học ngôn ngữ nếu cần</li>
</ul>

<h3>2. Chuẩn bị và nộp hồ sơ đăng ký (6-12 tháng trước khi bắt đầu)</h3>
<p>Hồ sơ thường bao gồm:</p>
<ul>
  <li>Đơn đăng ký online hoặc giấy (tùy trường)</li>
  <li>Bằng tốt nghiệp và bảng điểm (có công chứng và dịch thuật)</li>
  <li>Chứng chỉ ngôn ngữ</li>
  <li>Sơ yếu lý lịch (CV) theo format Europass</li>
  <li>Thư động lực (Motivation Letter)</li>
  <li>Thư giới thiệu (nếu yêu cầu)</li>
  <li>Bản sao hộ chiếu</li>
  <li>Ảnh hộ chiếu</li>
</ul>

<p><strong>Lưu ý về thời hạn nộp hồ sơ:</strong></p>
<ul>
  <li>Học kỳ mùa đông (bắt đầu tháng 10): Hạn nộp hồ sơ thường là 15/01 đến 15/07</li>
  <li>Học kỳ mùa hè (bắt đầu tháng 4): Hạn nộp hồ sơ thường là 15/07 đến 15/01</li>
</ul>

<h3>3. Xác minh bằng cấp (nếu cần)</h3>
<p>Sinh viên quốc tế thường phải nộp hồ sơ qua:</p>
<ul>
  <li>Uni-assist (dịch vụ xác minh bằng cấp quốc tế): Phí khoảng 75 Euro cho đơn đăng ký đầu tiên và 30 Euro cho mỗi đơn tiếp theo</li>
  <li>Hoặc trực tiếp cho trường (một số trường không yêu cầu qua Uni-assist)</li>
</ul>

<h3>4. Nhận thư mời nhập học (3-6 tháng trước khi bắt đầu)</h3>

<h3>5. Đăng ký học khóa dự bị tiếng (nếu cần)</h3>
<p>Nếu chưa đạt yêu cầu ngôn ngữ, sinh viên có thể đăng ký:</p>
<ul>
  <li>Khóa học tiếng Đức tại các trường đại học (khoảng 500-1,000 Euro/khóa)</li>
  <li>Hoặc các viện Goethe tại Đức (khoảng 700-1,500 Euro/khóa)</li>
</ul>

<h3>6. Mở tài khoản ký quỹ và xin visa (3-4 tháng trước khi bắt đầu)</h3>
<p>Các bước xin visa du học Đức:</p>
<ul>
  <li>Đặt lịch hẹn tại Đại sứ quán/Lãnh sự quán Đức</li>
  <li>Chuẩn bị hồ sơ visa: thư mời nhập học, chứng minh tài chính, bảo hiểm y tế, hộ chiếu, ảnh, v.v.</li>
  <li>Phỏng vấn visa (nếu được yêu cầu)</li>
  <li>Thời gian xử lý visa: 2-3 tháng</li>
</ul>

<h3>7. Tìm nhà ở (2-3 tháng trước khi bắt đầu)</h3>
<ul>
  <li>Ký túc xá sinh viên (Studentenwerk): 200-350 Euro/tháng</li>
  <li>Căn hộ chung (WG - Wohngemeinschaft): 300-450 Euro/tháng</li>
  <li>Thuê phòng riêng/căn hộ: 400-800 Euro/tháng (tùy thành phố)</li>
</ul>

<h3>8. Đăng ký nhập học và đóng phí học kỳ (1-2 tháng trước khi bắt đầu)</h3>

<h3>9. Mua bảo hiểm y tế (trước khi đến Đức)</h3>
<p>Bảo hiểm y tế bắt buộc cho sinh viên tại Đức, chi phí khoảng 110-120 Euro/tháng.</p>

<h2 id="section-5">Chi phí sinh hoạt tại Đức</h2>

<p>Mặc dù được miễn học phí, sinh viên vẫn cần chuẩn bị chi phí sinh hoạt tại Đức. Chi phí trung bình hàng tháng:</p>

<ul>
  <li><strong>Nhà ở:</strong> 300-600 Euro (tùy thành phố và loại hình)</li>
  <li><strong>Thực phẩm:</strong> 200-250 Euro</li>
  <li><strong>Bảo hiểm y tế:</strong> 110-120 Euro</li>
  <li><strong>Phương tiện công cộng:</strong> Đã bao gồm trong phí học kỳ</li>
  <li><strong>Internet và điện thoại:</strong> 30-50 Euro</li>
  <li><strong>Sách vở và vật dụng học tập:</strong> 40-50 Euro</li>
  <li><strong>Giải trí và chi phí khác:</strong> 100-150 Euro</li>
</ul>

<p>Tổng chi phí hàng tháng: 780-1,220 Euro (tùy thành phố và lối sống)</p>

<p>Chi phí sinh hoạt ở các thành phố nhỏ (như Leipzig, Dresden) thường thấp hơn so với các thành phố lớn (như Munich, Frankfurt, Hamburg, Berlin).</p>

<h2 id="section-6">Cơ hội làm thêm và hỗ trợ tài chính</h2>

<h3>1. Quy định làm thêm cho sinh viên quốc tế</h3>
<p>Sinh viên quốc tế tại Đức được phép làm việc:</p>
<ul>
  <li>120 ngày làm việc toàn thời gian (8 giờ/ngày) hoặc</li>
  <li>240 ngày làm việc bán thời gian (4 giờ/ngày) trong một năm</li>
</ul>

<p>Mức lương trung bình cho công việc sinh viên: 10-15 Euro/giờ (có thể kiếm được 500-800 Euro/tháng khi làm việc bán thời gian).</p>

<h3>2. Học bổng cho sinh viên quốc tế</h3>
<p>Một số tổ chức cung cấp học bổng cho sinh viên Việt Nam tại Đức:</p>
<ul>
  <li><strong>DAAD (Cơ quan Trao đổi Hàn lâm Đức):</strong> Nhiều loại học bổng khác nhau</li>
  <li><strong>Quỹ Friedrich Ebert, Konrad Adenauer, Heinrich Böll:</strong> Học bổng cho các lĩnh vực cụ thể</li>
  <li><strong>Erasmus Mundus:</strong> Cho chương trình thạc sĩ quốc tế</li>
  <li><strong>Học bổng của các trường đại học:</strong> Nhiều trường có học bổng riêng cho sinh viên quốc tế xuất sắc</li>
</ul>

<h3>3. Các hỗ trợ khác</h3>
<ul>
  <li><strong>Giảm giá sinh viên:</strong> Giảm giá vé tàu, bảo tàng, rạp chiếu phim, v.v.</li>
  <li><strong>Căng tin sinh viên (Mensa):</strong> Bữa ăn với giá từ 3-5 Euro</li>
  <li><strong>Hỗ trợ nhà ở:</strong> Một số bang có chương trình hỗ trợ tiền thuê nhà cho sinh viên</li>
</ul>

<h2 id="section-7">Cơ hội việc làm và định cư sau tốt nghiệp</h2>

<p>Đức là một trong những quốc gia có chính sách hậu tốt nghiệp hấp dẫn nhất cho sinh viên quốc tế:</p>

<h3>1. Visa tìm việc sau tốt nghiệp</h3>
<p>Sinh viên tốt nghiệp được cấp visa tìm việc làm lên đến 18 tháng để tìm việc phù hợp với chuyên môn đào tạo.</p>

<h3>2. Cơ hội việc làm</h3>
<p>Đức đang thiếu hụt nhân lực có kỹ năng trong nhiều lĩnh vực:</p>
<ul>
  <li>Kỹ sư (cơ khí, điện, phần mềm)</li>
  <li>Công nghệ thông tin</li>
  <li>Y tế và điều dưỡng</li>
  <li>Khoa học tự nhiên</li>
  <li>Tài chính và kế toán</li>
</ul>

<p>Mức lương khởi điểm trung bình cho sinh viên tốt nghiệp: 45,000-55,000 Euro/năm (tùy ngành và khu vực).</p>

<h3>3. Cơ hội định cư</h3>
<p>Sau khi làm việc tại Đức với visa lao động trong 2 năm, sinh viên quốc tế có thể xin thẻ cư trú dài hạn (EU Blue Card hoặc Settlement Permit). Sau 6-8 năm sinh sống hợp pháp tại Đức, có thể đủ điều kiện xin quốc tịch Đức.</p>

<h2 id="section-8">Kết luận và lời khuyên</h2>

<p>Du học Đức miễn học phí là một trong những lựa chọn du học tiết kiệm chi phí nhất, đồng thời vẫn đảm bảo chất lượng giáo dục đẳng cấp thế giới. Mặc dù vậy, sinh viên cần chuẩn bị kỹ về ngôn ngữ, tài chính và kế hoạch học tập để có thể tận dụng tối đa cơ hội này.</p>

<p>Một số lời khuyên cuối cùng:</p>
<ol>
  <li><strong>Đầu tư học tiếng Đức:</strong> Mặc dù có nhiều chương trình bằng tiếng Anh, việc thông thạo tiếng Đức sẽ mở ra nhiều cơ hội học tập, việc làm và hòa nhập</li>
  <li><strong>Cân nhắc các thành phố vừa và nhỏ:</strong> Chi phí sinh hoạt thấp hơn, cơ hội nhận học bổng và chỗ ở trong ký túc xá cao hơn</li>
  <li><strong>Lên kế hoạch tài chính dài hạn:</strong> Chuẩn bị tài chính cho ít nhất năm đầu tiên, sau đó có thể kết hợp làm thêm</li>
  <li><strong>Tận dụng cơ hội thực tập:</strong> Nhiều chương trình học tại Đức có học kỳ thực tập (Praxissemester), đây là cơ hội tốt để có kinh nghiệm và kết nối nghề nghiệp</li>
  <li><strong>Tham gia mạng lưới sinh viên quốc tế:</strong> Cộng đồng sinh viên Việt Nam tại Đức khá lớn và có nhiều hội sinh viên tích cực</li>
</ol>

<p>Để biết thêm thông tin chi tiết về du học Đức miễn học phí, vui lòng liên hệ với VietAuAcademy để được tư vấn cá nhân hóa phù hợp với hồ sơ và kế hoạch của bạn.</p>`,
        author: mockUsers[2].name,
        publishedAt: "2025-03-20",
        imageUrl: "/images/blogs/germany.jpg",
        category: "Thông tin",
        slug: "du-hoc-duc-mien-hoc-phi",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog4",
        title: "Cơ hội việc làm tại Nhật Bản",
        excerpt: "Việc làm sau khi du học Nhật Bản.",
        content: "Nội dung chi tiết về việc làm tại Nhật Bản...",
        author: mockUsers[3].name,
        publishedAt: "2025-04-25",
        imageUrl: "/images/blogs/japan.jpg",
        category: "Việc làm",
        slug: "co-hoi-viec-lam-nhat-ban",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog5",
        title: "Du học Hàn Quốc và định cư",
        excerpt: "Cơ hội định cư sau du học Hàn Quốc.",
        content: "Nội dung chi tiết về định cư Hàn Quốc...",
        author: mockUsers[4].name,
        publishedAt: "2025-05-30",
        imageUrl: "/images/blogs/korea.jpg",
        category: "Định cư",
        slug: "du-hoc-han-quoc-va-dinh-cu",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog6",
        title: "Du học Đài Loan dễ dàng",
        excerpt: "Các bước du học Đài Loan.",
        content: "Nội dung chi tiết về du học Đài Loan...",
        author: mockUsers[5].name,
        publishedAt: "2025-06-05",
        imageUrl: "/images/blogs/taiwan.jpg",
        category: "Thông tin",
        slug: "du-hoc-dai-loan-de-dang",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog7",
        title: "Du học Mỹ cần chuẩn bị gì?",
        excerpt: "Chuẩn bị du học Mỹ.",
        content: "Nội dung chi tiết về chuẩn bị du học Mỹ...",
        author: mockUsers[6].name,
        publishedAt: "2025-07-10",
        imageUrl: "/images/blogs/usa.jpg",
        category: "Chuẩn bị",
        slug: "du-hoc-my-can-chuan-bi-gi",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog8",
        title: "Du học Pháp và học bổng",
        excerpt: "Học bổng du học Pháp.",
        content: "Nội dung chi tiết về học bổng Pháp...",
        author: mockUsers[7].name,
        publishedAt: "2025-08-15",
        imageUrl: "/images/blogs/france.jpg",
        category: "Học bổng",
        slug: "du-hoc-phap-va-hoc-bong",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog9",
        title: "Du học Singapore và cơ hội việc làm",
        excerpt: "Việc làm sau du học Singapore.",
        content: "Nội dung chi tiết về việc làm Singapore...",
        author: mockUsers[8].name,
        publishedAt: "2025-09-20",
        imageUrl: "/images/blogs/singapore.jpg",
        category: "Việc làm",
        slug: "du-hoc-singapore-va-co-hoi-viec-lam",
        status: EStatus.ACTIVE,
    },
    {
        id: "blog10",
        title: "Du học Thụy Sĩ và trải nghiệm",
        excerpt: "Trải nghiệm du học Thụy Sĩ.",
        content: "Nội dung chi tiết về trải nghiệm Thụy Sĩ...",
        author: mockUsers[9].name,
        publishedAt: "2025-10-25",
        imageUrl: "/images/blogs/switzerland.jpg",
        category: "Trải nghiệm",
        slug: "du-hoc-thuy-si-va-trai-nghiem",
        status: EStatus.ACTIVE,
    },
];

// Job mock data
export const mockJobs: IJob[] = [
    {
        id: "job1",
        title: "Nhân viên văn phòng Úc",
        country: "Australia",
        imageUrl: "/images/jobs/australia.jpg",
        positions: 5,
        location: "Sydney",
        salary: "$3,000/month",
        applicationDeadline: "2025-02-01",
        estimatedDeparture: "2025-03-01",
        requirements: ["Tiếng Anh tốt", "Kinh nghiệm văn phòng"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc văn phòng tại Úc.",
        company: "AUS Office",
        workType: "Full-time",
        featured: true,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Văn phòng hiện đại",
        trainingPeriod: "1 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job2",
        title: "Nhân viên nhà hàng Canada",
        country: "Canada",
        imageUrl: "/images/jobs/canada.jpg",
        positions: 3,
        location: "Toronto",
        salary: "$2,800/month",
        applicationDeadline: "2025-03-01",
        estimatedDeparture: "2025-04-01",
        requirements: ["Tiếng Anh cơ bản", "Kinh nghiệm nhà hàng"],
        benefits: ["Bảo hiểm", "Ăn trưa miễn phí"],
        description: "Công việc nhà hàng tại Canada.",
        company: "CAN Restaurant",
        workType: "Part-time",
        featured: false,
        workingHours: "30h/tuần",
        overtime: "Không",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Nhà hàng sang trọng",
        trainingPeriod: "2 tuần",
        status: EStatus.ACTIVE,
    },
    {
        id: "job3",
        title: "Kỹ sư Đức",
        country: "Germany",
        imageUrl: "/images/jobs/germany.jpg",
        positions: 2,
        location: "Berlin",
        salary: "$4,000/month",
        applicationDeadline: "2025-04-01",
        estimatedDeparture: "2025-05-01",
        requirements: ["Tiếng Đức B1", "Bằng kỹ sư"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc kỹ sư tại Đức.",
        company: "GER Engineering",
        workType: "Full-time",
        featured: true,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Xưởng hiện đại",
        trainingPeriod: "2 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job4",
        title: "Nhân viên khách sạn Nhật Bản",
        country: "Japan",
        imageUrl: "/images/jobs/japan.jpg",
        positions: 4,
        location: "Tokyo",
        salary: "$2,500/month",
        applicationDeadline: "2025-05-01",
        estimatedDeparture: "2025-06-01",
        requirements: ["Tiếng Nhật N3", "Kinh nghiệm khách sạn"],
        benefits: ["Bảo hiểm", "Ăn trưa miễn phí"],
        description: "Công việc khách sạn tại Nhật Bản.",
        company: "JPN Hotel",
        workType: "Full-time",
        featured: false,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Khách sạn 5 sao",
        trainingPeriod: "1 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job5",
        title: "Nhân viên sản xuất Hàn Quốc",
        country: "South Korea",
        imageUrl: "/images/jobs/korea.jpg",
        positions: 6,
        location: "Seoul",
        salary: "$2,700/month",
        applicationDeadline: "2025-06-01",
        estimatedDeparture: "2025-07-01",
        requirements: ["Tiếng Hàn TOPIK 3", "Kinh nghiệm sản xuất"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc sản xuất tại Hàn Quốc.",
        company: "KOR Factory",
        workType: "Full-time",
        featured: true,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Nhà máy hiện đại",
        trainingPeriod: "2 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job6",
        title: "Nhân viên văn phòng Đài Loan",
        country: "Taiwan",
        imageUrl: "/images/jobs/taiwan.jpg",
        positions: 2,
        location: "Taipei",
        salary: "$2,600/month",
        applicationDeadline: "2025-07-01",
        estimatedDeparture: "2025-08-01",
        requirements: ["Tiếng Trung TOCFL 3", "Kinh nghiệm văn phòng"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc văn phòng tại Đài Loan.",
        company: "TWN Office",
        workType: "Part-time",
        featured: false,
        workingHours: "30h/tuần",
        overtime: "Không",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Văn phòng hiện đại",
        trainingPeriod: "1 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job7",
        title: "Nhân viên nhà hàng Mỹ",
        country: "USA",
        imageUrl: "/images/jobs/usa.jpg",
        positions: 3,
        location: "New York",
        salary: "$3,200/month",
        applicationDeadline: "2025-08-01",
        estimatedDeparture: "2025-09-01",
        requirements: ["Tiếng Anh tốt", "Kinh nghiệm nhà hàng"],
        benefits: ["Bảo hiểm", "Ăn trưa miễn phí"],
        description: "Công việc nhà hàng tại Mỹ.",
        company: "USA Restaurant",
        workType: "Full-time",
        featured: true,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Nhà hàng sang trọng",
        trainingPeriod: "2 tuần",
        status: EStatus.ACTIVE,
    },
    {
        id: "job8",
        title: "Nhân viên khách sạn Pháp",
        country: "France",
        imageUrl: "/images/jobs/france.jpg",
        positions: 2,
        location: "Paris",
        salary: "$2,900/month",
        applicationDeadline: "2025-09-01",
        estimatedDeparture: "2025-10-01",
        requirements: ["Tiếng Pháp B2", "Kinh nghiệm khách sạn"],
        benefits: ["Bảo hiểm", "Ăn trưa miễn phí"],
        description: "Công việc khách sạn tại Pháp.",
        company: "FRA Hotel",
        workType: "Full-time",
        featured: false,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Khách sạn 5 sao",
        trainingPeriod: "1 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job9",
        title: "Nhân viên sản xuất Singapore",
        country: "Singapore",
        imageUrl: "/images/jobs/singapore.jpg",
        positions: 4,
        location: "Singapore",
        salary: "$2,800/month",
        applicationDeadline: "2025-10-01",
        estimatedDeparture: "2025-11-01",
        requirements: ["Tiếng Anh tốt", "Kinh nghiệm sản xuất"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc sản xuất tại Singapore.",
        company: "SG Factory",
        workType: "Full-time",
        featured: true,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Nhà máy hiện đại",
        trainingPeriod: "2 tháng",
        status: EStatus.ACTIVE,
    },
    {
        id: "job10",
        title: "Nhân viên văn phòng Thụy Sĩ",
        country: "Switzerland",
        imageUrl: "/images/jobs/switzerland.jpg",
        positions: 2,
        location: "Zurich",
        salary: "$3,100/month",
        applicationDeadline: "2025-11-01",
        estimatedDeparture: "2025-12-01",
        requirements: ["Tiếng Anh B2", "Kinh nghiệm văn phòng"],
        benefits: ["Bảo hiểm", "Thưởng"],
        description: "Công việc văn phòng tại Thụy Sĩ.",
        company: "SUI Office",
        workType: "Full-time",
        featured: false,
        workingHours: "40h/tuần",
        overtime: "Có",
        accommodation: "Có hỗ trợ",
        workEnvironment: "Văn phòng hiện đại",
        trainingPeriod: "1 tháng",
        status: EStatus.ACTIVE,
    },
];

// Contact mock data
export const mockContacts: IContact[] = [
    {
        id: "contact1",
        name: "Nguyen Van A",
        email: "nva@example.com",
        phone: "0912345678",
        program: mockPrograms[0],
        message: "Tôi muốn biết thêm về chương trình Úc.",
        resolvedBy: mockUsers[0].name,
        resolvedAt: "2025-01-15",
        createdAt: "2025-01-10",
        updatedAt: "2025-01-15",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact2",
        name: "Tran Thi B",
        email: "ttb@example.com",
        phone: "0923456789",
        program: mockPrograms[1],
        message: "Tôi muốn đăng ký chương trình Canada.",
        resolvedBy: mockUsers[1].name,
        resolvedAt: "2025-02-20",
        createdAt: "2025-02-15",
        updatedAt: "2025-02-20",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact3",
        name: "Le Van C",
        email: "lvc@example.com",
        phone: "0934567890",
        program: mockPrograms[2],
        message: "Tôi cần tư vấn về du học Đức.",
        resolvedBy: mockUsers[2].name,
        resolvedAt: "2025-03-25",
        createdAt: "2025-03-20",
        updatedAt: "2025-03-25",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact4",
        name: "Pham Thi D",
        email: "ptd@example.com",
        phone: "0945678901",
        program: mockPrograms[3],
        message: "Tôi muốn hỏi về chương trình Nhật Bản.",
        resolvedBy: mockUsers[3].name,
        resolvedAt: "2025-04-30",
        createdAt: "2025-04-25",
        updatedAt: "2025-04-30",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact5",
        name: "Vo Van E",
        email: "vve@example.com",
        phone: "0956789012",
        program: mockPrograms[4],
        message: "Tôi muốn biết về du học Hàn Quốc.",
        resolvedBy: mockUsers[4].name,
        resolvedAt: "2025-05-05",
        createdAt: "2025-05-01",
        updatedAt: "2025-05-05",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact6",
        name: "Dang Thi F",
        email: "dtf@example.com",
        phone: "0967890123",
        program: mockPrograms[5],
        message: "Tôi muốn hỏi về chương trình Đài Loan.",
        resolvedBy: mockUsers[5].name,
        resolvedAt: "2025-06-10",
        createdAt: "2025-06-05",
        updatedAt: "2025-06-10",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact7",
        name: "Bui Van G",
        email: "bvg@example.com",
        phone: "0978901234",
        program: mockPrograms[6],
        message: "Tôi muốn đăng ký chương trình Mỹ.",
        resolvedBy: mockUsers[6].name,
        resolvedAt: "2025-07-15",
        createdAt: "2025-07-10",
        updatedAt: "2025-07-15",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact8",
        name: "Ho Thi H",
        email: "hth@example.com",
        phone: "0989012345",
        program: mockPrograms[7],
        message: "Tôi muốn hỏi về chương trình Pháp.",
        resolvedBy: mockUsers[7].name,
        resolvedAt: "2025-08-20",
        createdAt: "2025-08-15",
        updatedAt: "2025-08-20",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact9",
        name: "Nguyen Van I",
        email: "nvi@example.com",
        phone: "0990123456",
        program: mockPrograms[8],
        message: "Tôi muốn biết về du học Singapore.",
        resolvedBy: mockUsers[8].name,
        resolvedAt: "2025-09-25",
        createdAt: "2025-09-20",
        updatedAt: "2025-09-25",
        status: EContactStatus.RESOLVED,
    },
    {
        id: "contact10",
        name: "Phan Thi J",
        email: "ptj@example.com",
        phone: "0911234567",
        program: mockPrograms[9],
        message: "Tôi muốn hỏi về chương trình Thụy Sĩ.",
        resolvedBy: mockUsers[9].name,
        resolvedAt: "2025-10-30",
        createdAt: "2025-10-25",
        updatedAt: "2025-10-30",
        status: EContactStatus.RESOLVED,
    },
];

// FAQ mock data
export const mockFaqs: IFAQ[] = [
    {
        id: "faq1",
        question: "Điều kiện du học Úc là gì?",
        answer: "Cần IELTS 6.0 và tốt nghiệp THPT.",
        category: "Úc",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq2",
        question: "Học phí du học Canada bao nhiêu?",
        answer: "Khoảng $25,000/năm.",
        category: "Canada",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq3",
        question: "Du học Đức có miễn học phí không?",
        answer: "Có, nhiều trường miễn học phí.",
        category: "Đức",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq4",
        question: "Cần chứng chỉ gì để du học Nhật Bản?",
        answer: "Cần N3 tiếng Nhật.",
        category: "Nhật Bản",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq5",
        question: "Cơ hội việc làm sau du học Hàn Quốc?",
        answer: "Nhiều cơ hội việc làm và định cư.",
        category: "Hàn Quốc",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq6",
        question: "Du học Đài Loan cần chứng chỉ gì?",
        answer: "Cần TOCFL 3.",
        category: "Đài Loan",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq7",
        question: "Du học Mỹ cần chuẩn bị gì?",
        answer: "Cần SAT và tốt nghiệp THPT.",
        category: "Mỹ",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq8",
        question: "Học phí du học Pháp bao nhiêu?",
        answer: "Khoảng $22,000/năm.",
        category: "Pháp",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq9",
        question: "Du học Singapore cần IELTS bao nhiêu?",
        answer: "Cần IELTS 6.0.",
        category: "Singapore",
        status: EStatus.ACTIVE,
    },
    {
        id: "faq10",
        question: "Du học Thụy Sĩ cần chứng chỉ gì?",
        answer: "Cần B2 tiếng Anh.",
        category: "Thụy Sĩ",
        status: EStatus.ACTIVE,
    },
];

export const mockStats = {
  totalVisitors: 12543,
  uniqueVisitors: 8742,
  pageViews: 45892,
  avgSessionDuration: "3m 42s",
  bounceRate: "32.4%",
  topPages: [
    { name: "Homepage", views: 12450 },
    { name: "Programs", views: 8765 },
    { name: "Jobs", views: 6543 },
    { name: "Contact", views: 4321 },
    { name: "FAQ", views: 3210 },
  ],
  recentActivity: [
    { id: 1, action: "New user registered", time: "2 min ago" },
    { id: 2, action: "Job application submitted", time: "15 min ago" },
    { id: 3, action: "Contact form submitted", time: "1 hour ago" },
    { id: 4, action: "New blog post published", time: "3 hours ago" },
  ],
};