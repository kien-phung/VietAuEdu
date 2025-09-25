import React from "react";
import HeroSection from "@/components/common/home/HeroSection";
import ProgramsSection from "@/components/common/home/ProgramsSection";
import AboutSection from "@/components/common/home/AboutSection";
import CountryFlagsSection from "@/components/common/home/CountryFlagsSection";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import SlideshowSection from "@/components/common/home/SlideshowSection";
import { SectionSkeleton } from "@/components/common/home/SectionSkeleton";

// Dynamic imports for non-critical sections to reduce initial bundle
const WorkingProcessSection = dynamic(
  () => import("@/components/common/home/WorkingProcessSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const StudyAbroadSection = dynamic(
  () => import("@/components/common/home/StudyAbroadSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const JobOpportunitiesSection = dynamic(
  () => import("@/components/common/home/JobOpportunitiesSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

// SEO Metadata for homepage
export const metadata: Metadata = {
  title: "VietAuEdu - Giáo Dục Quốc Tế Việt Âu | Du Học Chất Lượng Cao",
  description:
    "Kết nối giáo dục & nâng tầm cuộc sống. Chương trình du học chất lượng cao tại Hàn Quốc, Nhật Bản, Đài Loan, Đức, Mỹ, Úc với học bổng hấp dẫn.",
  keywords:
    "du học, giáo dục quốc tế, học bổng, Hàn Quốc, Nhật Bản, Đài Loan, Đức, Úc, Mỹ, VietAuEdu",
  openGraph: {
    title: "VietAuEdu - Giáo Dục Quốc Tế Việt Âu",
    description:
      "Khám phá cơ hội du học tại các quốc gia hàng đầu với VietAuEdu",
    type: "website",
    url: "https://vietauedu.com",
  },
};

// Static data for critical sections (SSG)
// const getCriticalData = () => {
//   return {
//     featuredPrograms: mockData.programs.filter((p) => p.featured),
//     stats: {
//       studentsCount: 500,
//       countriesCount: 6,
//       successRate: 98,
//     },
//   };
// };

// Loading component for non-critical sections with proper dimensions


export default function HomePage() {
  return (
    <>
      {/* Critical above-fold content - SSR for instant display */}
      <HeroSection />
      <SlideshowSection
        autoPlay={true}
        interval={5000}
        showIndicators={true}
        showNavigation={true}
      />
      <AboutSection />

      {/* Progressive loading sections with immediate skeleton */}
      <WorkingProcessSection />
      <CountryFlagsSection />
      <StudyAbroadSection />
      <JobOpportunitiesSection />

      {/* Critical content for SEO - SSR */}
      <ProgramsSection />

      {/* <LanguageTrainingSection /> */}
      {/* <CTASection /> */}
    </>
  );
}
