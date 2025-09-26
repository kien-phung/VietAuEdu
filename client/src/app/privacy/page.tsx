import React from "react";
import { Metadata } from "next";

// Import client component
import PrivacyPolicyPageClient from "@/components/common/privacy/PrivacyPolicyPageClient";

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Chính Sách Bảo Mật | Việt Âu Academy",
  description:
    "Chính sách bảo mật của Việt Âu Academy giải thích cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân của bạn khi sử dụng dịch vụ của chúng tôi.",
  keywords:
    "chính sách bảo mật, quyền riêng tư, bảo vệ dữ liệu, Việt Âu Academy, thông tin cá nhân, quyền người dùng",
  openGraph: {
    title: "Chính Sách Bảo Mật | Việt Âu Academy",
    description:
      "Chính sách bảo mật của Việt Âu Academy giải thích cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân của bạn.",
    images: [
      {
        url: "/images/office.svg",
        width: 800,
        height: 600,
        alt: "Việt Âu Academy Office",
      },
    ],
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageClient />;
}
