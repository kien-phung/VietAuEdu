"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProgramCard from "@/components/common/programs/ProgramCard";
import Link from "next/link";
import { mockData } from "@/utils/services/mockData";

interface ProgramsSectionProps {
  programs?: IProgram[];
}

export default function ProgramsSection({
  programs = mockData.programs,
}: ProgramsSectionProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Chương Trình Du Học Nổi Bật
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Khám phá các cơ hội du học tại các quốc gia phát triển với chất
            lượng giáo dục hàng đầu thế giới
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.slice(0, 3).map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white"
            >
              Xem tất cả tin tức
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
