import { Metadata } from "next";
import JobsPageClient from "@/components/common/job/JobsPageClient";

export const metadata: Metadata = {
  title:
    "Cơ Hội Việc Làm Quốc Tế - VietAuAcademy | Việc Làm Nhật Bản, Hàn Quốc",
  description:
    "Khám phá các cơ hội việc làm quốc tế với mức lương hấp dẫn tại Nhật Bản, Hàn Quốc, Đài Loan và các nước khác. Hỗ trợ hoàn thiện hồ sơ và visa.",
  keywords:
    "việc làm quốc tế, việc làm Nhật Bản, việc làm Hàn Quốc, việc làm Đài Loan, việc làm Đức, xuất khẩu lao động",
  openGraph: {
    title: "Cơ Hội Việc Làm Quốc Tế - VietAuAcademy",
    description:
      "Khám phá các cơ hội việc làm quốc tế tại các nước phát triển với mức lương hấp dẫn",
    type: "website",
  },
};

export default function JobOpportunitiesPage() {
  return <JobsPageClient />;
}
