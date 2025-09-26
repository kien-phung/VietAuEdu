import { Metadata } from "next";
import ProgramDetailPageClient from "@/components/common/programs/[id]/ProgramDetailPageClient";

// Dynamic metadata generation for each program
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Sử dụng params._id để lấy dữ liệu chương trình từ API
  const id = params.id;

  // Trong tương lai, khi có API thực, bạn có thể fetch dữ liệu như sau:
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/programs/${id}`);
  // const program = await response.json();

  // Default metadata trong trường hợp không fetch được dữ liệu
  return {
    title: `Chương Trình Du Học ${id} | Việt Âu Academy`,
    description: `Thông tin chi tiết về chương trình du học ${id}, điều kiện tuyển sinh, lợi ích và cơ hội nghề nghiệp.`,
    keywords:
      "du học, chương trình du học, học bổng, điều kiện du học, Việt Âu Academy",
    openGraph: {
      title: `Chương Trình Du Học ${id} | Việt Âu Academy`,
      description: `Thông tin chi tiết về chương trình du học ${id}, điều kiện tuyển sinh, lợi ích và cơ hội nghề nghiệp.`,
      images: [
        {
          url: "/images/placeholder-program.jpg",
          width: 800,
          height: 600,
          alt: `Chương trình du học ${id} tại Việt Âu Academy`,
        },
      ],
      type: "website",
    },
  };
}

export default function ProgramDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <ProgramDetailPageClient programId={params.id} />;
}
