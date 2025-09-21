import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Users, BookOpen } from "lucide-react";
import { Metadata } from "next";
import FAQContent from "@/components/faq/FAQContent";
import { useFAQStore } from "@/utils/stores/faqStore";

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

// SSG: This page will be pre-rendered at build time
export default function FAQPage() {
  const { getAllFAQs } = useFAQStore();

  const [faqs, setFaqs] = useState<IFAQ[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllFAQs();
      const data = response.data?.faqs;
      setFaqs(data || []);
    };

    fetchData();
  }, [getAllFAQs]);

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
