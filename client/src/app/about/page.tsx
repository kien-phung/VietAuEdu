"use client";

import React, { useRef } from "react";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  Heart,
  CheckCircle,
  Star,
} from "lucide-react";
import { useInView } from "framer-motion";

// Import section components
import StatsSection from "@/components/common/about/StatsSection";
import MainIntroductionSection from "@/components/common/about/MainIntroductionSection";
import WhyChooseUsSection from "@/components/common/about/WhyChooseUsSection";
import ServicesSection from "@/components/common/about/ServicesSection";
import CommitmentsSection from "@/components/common/about/CommitmentsSection";
import CTASection from "@/components/common/about/CTASection";
import ContactInfoSection from "@/components/common/about/ContactInfoSection";

// Static data - moved to build time for instant loading
const getAboutPageData = () => {
  return {
    stats: [
      { number: "10+", label: "Năm kinh nghiệm", icon: Award },
      { number: "5000+", label: "Học viên thành công", icon: Users },
      { number: "6", label: "Quốc gia đối tác", icon: Globe },
      { number: "99%", label: "Tỷ lệ hài lòng", icon: Star },
    ],
    whyChooseUs: [
      {
        title: "Chuyên Môn Cao",
        description:
          "Đội ngũ tư vấn viên của Việt Âu đều là những chuyên gia có kiến thức sâu rộng về hệ thống giáo dục, thị trường lao động và các thủ tục hành chính tại nhiều quốc gia.",
        icon: GraduationCap,
      },
      {
        title: "Mạng Lưới Đối Tác Rộng Khắp",
        description:
          "Việt Âu có quan hệ hợp tác chặt chẽ với các trường đại học, tổ chức giáo dục, doanh nghiệp lớn tại Nhật Bản, Hàn Quốc, Đức, Úc, và Đài Loan.",
        icon: Globe,
      },
      {
        title: "Dịch Vụ Trọn Gói",
        description:
          "Chúng tôi cung cấp dịch vụ trọn gói từ tư vấn chọn trường, hỗ trợ xin visa, đặt vé máy bay, sắp xếp chỗ ở cho đến định hướng nghề nghiệp.",
        icon: CheckCircle,
      },
      {
        title: "Cam Kết Chất Lượng",
        description:
          "Việt Âu luôn đặt chất lượng dịch vụ lên hàng đầu. Chúng tôi không ngừng cải tiến và nâng cao chất lượng dịch vụ nhằm đáp ứng tối đa nhu cầu của học viên.",
        icon: Award,
      },
      {
        title: "Chi Phí Hợp Lý",
        description:
          "Hiểu rõ những lo lắng về chi phí của học viên và gia đình, Việt Âu cam kết cung cấp các gói dịch vụ với chi phí cạnh tranh nhất trên thị trường.",
        icon: Heart,
      },
      {
        title: "Hỗ Trợ 24/7",
        description:
          "Đội ngũ tư vấn viên của Việt Âu luôn làm việc với tinh thần trách nhiệm cao, tận tâm hỗ trợ khách hàng 24/7.",
        icon: Users,
      },
    ],
    services: [
      {
        title: "Tư Vấn Du Học",
        features: [
          "Lựa chọn trường và ngành học phù hợp",
          "Hỗ trợ xin học bổng",
          "Hướng dẫn thủ tục xin visa",
          "Chuẩn bị hồ sơ du học",
        ],
      },
      {
        title: "Tư Vấn Việc Làm Quốc Tế",
        features: [
          "Cập nhật thông tin thị trường lao động",
          "Kết nối nhà tuyển dụng uy tín",
          "Hỗ trợ tìm việc làm nước ngoài",
          "Định hướng nghề nghiệp",
        ],
      },
      {
        title: "Đào Tạo Ngoại Ngữ",
        features: [
          "Khóa học tiếng Nhật, Hàn, Đức, Anh",
          "Đào tạo kỹ năng mềm",
          "Luyện thi chứng chỉ quốc tế",
          "Giao tiếp thực tế",
        ],
      },
    ],
    commitments: [
      {
        title: "Minh Bạch",
        description:
          "Mọi thông tin về quy trình và chi phí đều được công khai rõ ràng",
      },
      {
        title: "Chuyên Nghiệp",
        description:
          "Đội ngũ tư vấn viên luôn làm việc với tinh thần trách nhiệm cao",
      },
      {
        title: "Hiệu Quả",
        description: "Cam kết giúp bạn đạt được mục tiêu nhanh chóng, hiệu quả",
      },
      {
        title: "Uy Tín",
        description:
          "Với nhiều năm hoạt động, đã xây dựng được uy tín vững chắc trên thị trường",
      },
    ],
  };
};

export default function AboutPage() {
  const { stats, whyChooseUs, services, commitments } = getAboutPageData();

  // Refs for sections
  const statsRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const commitmentsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);

  // InView states
  const statsInView = useInView(statsRef, { amount: 0.3 });
  const introInView = useInView(introRef, { amount: 0.3 });
  const whyChooseUsInView = useInView(whyChooseUsRef, { amount: 0.3 });
  const servicesInView = useInView(servicesRef, { amount: 0.3 });
  const commitmentsInView = useInView(commitmentsRef, { amount: 0.3 });
  const ctaInView = useInView(ctaRef, { amount: 0.3 });
  const contactInfoInView = useInView(contactInfoRef, { amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <StatsSection
        stats={stats}
        statsRef={statsRef}
        statsInView={statsInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <MainIntroductionSection introRef={introRef} introInView={introInView} />

      <WhyChooseUsSection
        whyChooseUs={whyChooseUs}
        whyChooseUsRef={whyChooseUsRef}
        whyChooseUsInView={whyChooseUsInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ServicesSection
        services={services}
        servicesRef={servicesRef}
        servicesInView={servicesInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <CommitmentsSection
        commitments={commitments}
        commitmentsRef={commitmentsRef}
        commitmentsInView={commitmentsInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <CTASection
        ctaRef={ctaRef}
        ctaInView={ctaInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <ContactInfoSection
        contactInfoRef={contactInfoRef}
        contactInfoInView={contactInfoInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </main>
  );
}
