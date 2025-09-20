import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, Users, BookOpen } from "lucide-react";
import { Metadata } from "next";
import FAQContent from "@/components/faq/FAQContent";

// SEO optimization for FAQ page
export const metadata: Metadata = {
  title: "Hỏi & Đáp Du Học - VietAuEdu | Câu Hỏi Thường Gặp",
  description:
    "Tìm câu trả lời cho mọi thắc mắc về du học và xuất khẩu lao động. Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.",
  keywords:
    "hỏi đáp du học, câu hỏi thường gặp, FAQ du học, tư vấn du học, visa du học, học bổng du học",
  openGraph: {
    title: "Hỏi & Đáp Du Học - VietAuEdu",
    description:
      "Tìm hiểu thông tin chi tiết về du học qua các câu hỏi thường gặp",
    type: "website",
  },
};

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  publishedAt: string;
}

// Static data for SSG
const getFAQData = () => {
  const faqs: FAQ[] = [
    {
      id: "1",
      question:
        "Sau Khi Du Học Xong, Có Hỗ Trợ Việc Làm Tại Nước Sở Tại Không?",
      answer:
        "Giáo Dục Quốc Tế Việt Âu tự hào là đơn vị cung cấp các dịch vụ hỗ trợ du học toàn diện, không chỉ giúp sinh viên tìm được cơ hội học tập tốt mà còn hỗ trợ họ trong việc tìm kiếm việc làm sau khi du học xong. Chúng tôi có mạng lưới đối tác doanh nghiệp tại các quốc gia như Nhật Bản, Hàn Quốc, Đức, Úc và Canada.",
      category: "Hỗ trợ sau du học",
      publishedAt: "03/12/2024",
    },
    {
      id: "2",
      question: "Việt Âu Hỗ Trợ Những Gì Trong Quá Trình Xin Visa Du Học?",
      answer:
        "Xin visa du học là một trong những bước quan trọng nhất trong hành trình du học. Chúng tôi hỗ trợ chuẩn bị hồ sơ, hướng dẫn phỏng vấn, và theo dõi tiến trình xử lý visa cho đến khi bạn nhận được kết quả.",
      category: "Visa và thủ tục",
      publishedAt: "03/12/2024",
    },
    {
      id: "3",
      question: "Có Cần Chứng Chỉ Ngôn Ngữ Khi Du Học Không?",
      answer:
        "Câu trả lời phụ thuộc vào quốc gia bạn dự định du học và yêu cầu của trường. Đối với các nước như Mỹ, Úc, Canada thì cần IELTS/TOEFL, còn Nhật Bản cần JLPT, Hàn Quốc cần TOPIK.",
      category: "Yêu cầu học tập",
      publishedAt: "03/12/2024",
    },
    {
      id: "4",
      question: "Điều Kiện Để Nhận Học Bổng Du Học Là Gì?",
      answer:
        "Điều kiện thường bao gồm: GPA cao (từ 3.0 trở lên), chứng chỉ ngôn ngữ quốc tế, thư giới thiệu từ giáo viên, và hoạt động ngoại khóa phong phú.",
      category: "Học bổng",
      publishedAt: "03/12/2024",
    },
    {
      id: "5",
      question: "Chi Phí Du Học Khoảng Bao Nhiêu?",
      answer:
        "Chi phí du học khác nhau tùy quốc gia: Úc (25-45k USD/năm), Mỹ (30-70k USD/năm), Canada (20-40k USD/năm), Đức (0-3k EUR/năm), Nhật Bản (8-15k USD/năm).",
      category: "Chi phí",
      publishedAt: "03/12/2024",
    },
    {
      id: "6",
      question: "Quy Trình Làm Hồ Sơ Du Học Như Thế Nào?",
      answer:
        "Quy trình gồm: Tư vấn và đánh giá hồ sơ → Chuẩn bị giấy tờ → Dịch thuật và công chứng → Nộp hồ sơ → Phỏng vấn → Nhận kết quả.",
      category: "Thủ tục hồ sơ",
      publishedAt: "03/12/2024",
    },
  ];

  const categories = [
    "Tất cả",
    "Hỗ trợ sau du học",
    "Visa và thủ tục",
    "Yêu cầu học tập",
    "Học bổng",
    "Chi phí",
    "Thủ tục hồ sơ",
  ];

  const stats = [
    { number: "500+", label: "Câu hỏi đã trả lời", icon: MessageCircle },
    { number: "24/7", label: "Hỗ trợ tư vấn", icon: Phone },
    { number: "100%", label: "Miễn phí tư vấn", icon: Users },
    { number: "10+", label: "Năm kinh nghiệm", icon: BookOpen },
  ];

  return { faqs, categories, stats };
};

// SSG: This page will be pre-rendered at build time
export default function FAQPage() {
  const { faqs, categories, stats } = getFAQData();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section - SSR for SEO */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hỏi & Đáp</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tìm câu trả lời cho mọi thắc mắc về du học và xuất khẩu lao động.
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - SSR for SEO */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Interactive Section - Client Component */}
      <FAQContent initialFAQs={faqs} categories={categories} />

      {/* Contact CTA - SSR */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Chưa Tìm Thấy Câu Trả Lời?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Liên hệ trực tiếp với đội ngũ chuyên gia của chúng tôi để nhận tư
            vấn miễn phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Liên Hệ Ngay
            </Link>
            <a
              href="tel:0782748863"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Gọi Ngay: 0782 748 863
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
