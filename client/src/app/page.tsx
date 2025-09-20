"use client";

import React, { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import { mockData } from "@/utils/services/mockData";
import { useSystemStore } from "@/utils/stores/systemStore";
import CountryFlagsSection from "@/components/sections/CountryFlagsSection";
import WorkingProcessSection from "@/components/sections/WorkingProcessSection";
import StudyAbroadSection from "@/components/sections/StudyAbroadSection";
import JobOpportunitiesSection from "@/components/sections/JobOpportunitiesSection";
import LanguageTrainingSection from "@/components/sections/LanguageTrainingSection";

export default function HomePage() {
  const {
    programs,
    handleSetUser,
    handleSetBlogs,
    handleSetPrograms,
    handleSetLoading,
    handleSetError,
  } = useSystemStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        handleSetLoading(true);
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // handleSetUser(mockData.user);
        handleSetPrograms(mockData.programs);
        handleSetBlogs(mockData.blogs);
        handleSetError(null);
      } catch (error) {
        handleSetError("Không thể tải dữ liệu");
        console.log(error);
      } finally {
        handleSetLoading(false);
      }
    };

    if (programs.length === 0) {
      fetchData();
    }
  }, [
    programs.length,
    handleSetUser,
    handleSetPrograms,
    handleSetBlogs,
    handleSetLoading,
    handleSetError,
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WorkingProcessSection />
      <CountryFlagsSection />
      <StudyAbroadSection />
      <JobOpportunitiesSection />
      <ProgramsSection programs={programs.filter((p) => p.featured)} />
      <LanguageTrainingSection />
      <CTASection />
    </>
  );
}
