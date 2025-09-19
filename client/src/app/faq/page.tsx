"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Calendar,
  Users,
  BookOpen,
} from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  publishedAt: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Sau Khi Du Học Xong, Có Hỗ Trợ Việc Làm Tại Nước Sở Tại Không?",
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

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tất cả" || faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Hỏi & Đáp</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Tìm câu trả lời cho mọi thắc mắc về du học và xuất khẩu lao động.
              Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm kiếm câu hỏi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:ring-4 focus:ring-white/20 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Danh Mục <span className="text-primary">Câu Hỏi</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary border border-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Tìm thấy{" "}
                <span className="font-bold text-primary">
                  {filteredFAQs.length}
                </span>{" "}
                câu hỏi
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm text-primary font-medium">
                          {faq.category}
                        </span>
                        <span className="text-sm text-gray-400 ml-2">•</span>
                        <span className="text-sm text-gray-400 ml-2 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {faq.publishedAt}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="ml-4">
                      {openFAQ === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-primary" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {openFAQ === faq.id && (
                    <div className="px-6 pb-6">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Không Tìm Thấy Câu Trả Lời?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên viên tư vấn của chúng tôi sẵn sàng giải đáp mọi thắc
            mắc của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Đặt Câu Hỏi
            </Link>
            <a
              href="tel:0782748863"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Gọi: 0902 020 050
            </a>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cần Hỗ Trợ <span className="text-primary">Thêm?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hotline</h3>
              <p className="text-primary font-semibold text-lg">0902 020 050</p>
              <p className="text-gray-600 text-sm">24/7 - Miễn phí tư vấn</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-primary font-semibold">
                info@giaoducvietau.com
              </p>
              <p className="text-gray-600 text-sm">Phản hồi trong 24h</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Chat Online</h3>
              <p className="text-primary font-semibold">Tư vấn trực tuyến</p>
              <p className="text-gray-600 text-sm">Thứ 2 - CN: 8:30 - 21:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
