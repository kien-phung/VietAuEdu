import React, { Suspense, useState, useEffect } from "react";
import ProgramCard from "@/components/common/programs/ProgramCard";
import ProgramFilters from "@/components/programs/ProgramFilters";
import { Metadata } from "next";
import { useProgramStore } from "@/utils/stores/programStore";

export const metadata: Metadata = {
  title:
    "Chương Trình Du Học - VietAuEdu | Du Học Hàn Quốc, Nhật Bản, Đài Loan",
  description:
    "Khám phá các cơ hội du học tại các quốc gia phát triển với chất lượng giáo dục hàng đầu thế giới. Tìm hiểu về học phí, điều kiện và lợi ích.",
  keywords:
    "chương trình du học, du học Hàn Quốc, du học Nhật Bản, du học Đài Loan, du học Đức, du học Úc",
};

// ISR: Revalidate every 2 hours for program updates
export const revalidate = 7200;

const countries = [
  { value: "", label: "Tất cả quốc gia" },
  { value: "Hàn Quốc", label: "Hàn Quốc" },
  { value: "Nhật Bản", label: "Nhật Bản" },
  { value: "Đài Loan", label: "Đài Loan" },
  { value: "Đức", label: "Đức" },
  { value: "Úc", label: "Úc" },
  { value: "Mỹ", label: "Mỹ" },
];

const tuitionRanges = [
  { value: "", label: "Tất cả mức học phí" },
  { value: "0-10000", label: "Dưới 10,000 USD" },
  { value: "10000-20000", label: "10,000 - 20,000 USD" },
  { value: "20000-30000", label: "20,000 - 30,000 USD" },
  { value: "30000+", label: "Trên 30,000 USD" },
];

interface ProgramsPageProps {
  searchParams: Promise<{ country?: string }>;
}

export default function ProgramsPage({ searchParams }: ProgramsPageProps) {
  const { getAllPrograms } = useProgramStore();

  const [resolvedSearchParams, setResolvedSearchParams] = useState<{
    country?: string;
  }>({});
  const [programs, setPrograms] = useState<IProgram[]>([]);

  useEffect(() => {
    const resolveParams = async () => {
      const params = await searchParams;
      setResolvedSearchParams(params);
    };
    resolveParams();
  }, [searchParams]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllPrograms();
      const data = response.data?.programs;
      setPrograms(data || []);
    };

    fetchData();
  }, [getAllPrograms]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header - SSR for SEO */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Chương Trình Du Học
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Khám phá các cơ hội du học tại các quốc gia phát triển với chất
              lượng giáo dục hàng đầu thế giới
            </p>
          </div>
        </div>
      </section>

      {/* Featured Programs Preview - SSR for SEO */}
      <section className="py-8 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Chương trình nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs
              .filter((p) => p.featured)
              .slice(0, 3)
              .map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
          </div>
        </div>
      </section>

      {/* Client-side Interactive Filters and Programs List */}
      <Suspense
        fallback={
          <div className="py-12">
            <div className="container mx-auto px-4">
              <div className="animate-pulse space-y-4">
                <div className="h-20 bg-gray-200 rounded"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-80 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        }
      >
        <ProgramFilters
          initialPrograms={programs}
          countries={countries}
          tuitionRanges={tuitionRanges}
          initialCountry={resolvedSearchParams.country || ""}
        />
      </Suspense>
    </div>
  );
}
