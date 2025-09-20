import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import { mockData } from "@/utils/services/mockData";
import CountryFlagsSection from "@/components/sections/CountryFlagsSection";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// Dynamic imports for non-critical sections to reduce initial bundle
const WorkingProcessSection = dynamic(
  () => import("@/components/sections/WorkingProcessSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const StudyAbroadSection = dynamic(
  () => import("@/components/sections/StudyAbroadSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const JobOpportunitiesSection = dynamic(
  () => import("@/components/sections/JobOpportunitiesSection"),
  {
    loading: () => <SectionSkeleton />,
    ssr: true,
  }
);

const LanguageTrainingSection = dynamic(
  () => import("@/components/sections/LanguageTrainingSection"),
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
const getCriticalData = () => {
  return {
    featuredPrograms: mockData.programs.filter((p) => p.featured),
    stats: {
      studentsCount: 500,
      countriesCount: 6,
      successRate: 98,
    },
  };
};

// Loading component for non-critical sections with proper dimensions
function SectionSkeleton() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { featuredPrograms, stats } = getCriticalData();

  return (
    <>
      {/* Critical above-fold content - SSR for instant display */}
      <HeroSection stats={stats} />
      <AboutSection />

      {/* Progressive loading sections with immediate skeleton */}
      <WorkingProcessSection />
      <CountryFlagsSection />
      <StudyAbroadSection />
      <JobOpportunitiesSection />

      {/* Critical content for SEO - SSR */}
      <ProgramsSection programs={featuredPrograms} />

      <LanguageTrainingSection />
      <CTASection />
    </>
  );
}
