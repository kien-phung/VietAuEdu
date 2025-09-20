import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import OnlyClientSide from "@/components/layout/OnlyClientSide";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "VietAuEdu - Giáo Dục Quốc Tế Việt Âu",
  description:
    "Kết nối giáo dục & nâng tầm cuộc sống. Chương trình du học chất lượng cao tại Hàn Quốc, Nhật Bản, Đài Loan, Đức, Mỹ, Úc.",
  keywords: "du học, giáo dục quốc tế, Hàn Quốc, Nhật Bản, Đài Loan, học bổng",
  authors: [{ name: "VietAuEdu Team" }],
  icons: {
    icon: "/images/logo1.png",
    shortcut: "/images/logo1.png",
    apple: "/images/logo1.png",
  },
  openGraph: {
    title: "VietAuEdu - Giáo Dục Quốc Tế Việt Âu",
    description: "Kết nối giáo dục & nâng tầm cuộc sống",
    url: "https://vietauedu.com",
    siteName: "VietAuEdu",
    locale: "vi_VN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider>
          <OnlyClientSide>
            <Navbar />
          </OnlyClientSide>

          <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
            {children}
          </main>

          <OnlyClientSide>
            <Footer />
          </OnlyClientSide>

          {/* Floating Contact Buttons */}
          <OnlyClientSide>
            <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
              {/* Zalo Button */}
              <Link
                href="https://zalo.me/0782748863"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-16 h-16 bg-primary hover:bg-primary/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Image
                    src="/images/zalo_icon.png"
                    alt="Zalo"
                    width={36}
                    height={36}
                    className="w-9 h-9"
                  />
                </div>
              </Link>

              {/* Phone Button */}
              <Link
                href="tel:0782748863"
                className="group relative w-14 h-14 bg-secondary hover:bg-secondary/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-6 h-6 text-white" />
              </Link>
            </div>
          </OnlyClientSide>
        </ThemeProvider>
      </body>
    </html>
  );
}
