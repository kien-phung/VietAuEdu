import ProgramsPageClient from "@/components/common/programs/ProgramsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Chương Trình Du Học - VietAuAcademy | Du Học Hàn Quốc, Nhật Bản, Đài Loan",
  description:
    "Khám phá các cơ hội du học tại các quốc gia phát triển với chất lượng giáo dục hàng đầu thế giới. Tìm hiểu về học phí, điều kiện và lợi ích.",
  keywords:
    "chương trình du học, du học Hàn Quốc, du học Nhật Bản, du học Đài Loan, du học Đức, du học Úc",
};

// ISR: Revalidate every 2 hours for program updates
export const revalidate = 7200;

interface ProgramsPageProps {
  searchParams: Promise<{ country?: string }>;
}

export default async function ProgramsPage({
  searchParams,
}: ProgramsPageProps) {
  const resolvedParams = await searchParams;

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

      {/* Client-side Interactive Content */}
      <ProgramsPageClient initialCountry={resolvedParams.country || ""} />
    </div>
  );
}
