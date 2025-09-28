import { Metadata } from "next";
import HomePageClient from "@/components/common/home/HomePageClient";

// SEO Metadata for homepage - This works in server components
export const metadata: Metadata = {
  title: "VietAuAcademy - Giáo Dục Quốc Tế Việt Âu | Du Học Chất Lượng Cao",
  description:
    "Kết nối giáo dục & nâng tầm cuộc sống. Chương trình du học chất lượng cao tại Hàn Quốc, Nhật Bản, Đài Loan, Đức, Mỹ, Úc với học bổng hấp dẫn.",
  keywords:
    "du học, giáo dục quốc tế, học bổng, Hàn Quốc, Nhật Bản, Đài Loan, Đức, Úc, Mỹ, VietAuAcademy",
  openGraph: {
    title: "VietAuAcademy - Giáo Dục Quốc Tế Việt Âu",
    description:
      "Khám phá cơ hội du học tại các quốc gia hàng đầu với VietAuAcademy",
    type: "website",
    url: "https://VietAuAcademy.com",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
