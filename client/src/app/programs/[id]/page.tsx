import { Metadata } from "next";
import ProgramDetailPageClient from "@/components/common/programs/[id]/ProgramDetailPageClient";
import { COMPANY } from "@/utils/services/constants";

// Dynamic metadata generation for each program
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // Giải quyết promise để lấy params
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Default metadata trong trường hợp không fetch được dữ liệu
  return {
    title: `Chương Trình Du Học ${id} | ${COMPANY}`,
    description: `Thông tin chi tiết về chương trình du học ${id}, điều kiện tuyển sinh, lợi ích và cơ hội nghề nghiệp.`,
    keywords: `du học, chương trình du học, học bổng, điều kiện du học, ${COMPANY}`,
    openGraph: {
      title: `Chương Trình Du Học ${id} | ${COMPANY}`,
      description: `Thông tin chi tiết về chương trình du học ${id}, điều kiện tuyển sinh, lợi ích và cơ hội nghề nghiệp.`,
      images: [
        {
          url: "/images/placeholder-program.jpg",
          width: 800,
          height: 600,
          alt: `Chương trình du học ${id} tại ${COMPANY}`,
        },
      ],
      type: "website",
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <ProgramDetailPageClient programId={resolvedParams.id} />;
}
