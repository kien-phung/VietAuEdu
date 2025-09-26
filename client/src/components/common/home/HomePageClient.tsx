"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import HeroSection from "@/components/common/home/HeroSection";
import ProgramsSection from "@/components/common/home/ProgramsSection";
import AboutSection from "@/components/common/home/AboutSection";
import CountryFlagsSection from "@/components/common/home/CountryFlagsSection";
import SlideshowSection from "@/components/common/home/SlideshowSection";
import { SectionSkeleton } from "@/components/common/home/SectionSkeleton";
import ContactInfoSection from "@/components/common/about/ContactInfoSection";
import dynamic from "next/dynamic";

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

export default function HomePageClient() {
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const contactInfoInView = useInView(contactInfoRef, { amount: 0.3 });
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
      <ContactInfoSection
        contactInfoRef={contactInfoRef}
        contactInfoInView={contactInfoInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
    </>
  );
}
