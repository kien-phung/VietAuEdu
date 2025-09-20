import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src={"/images/logo1.png"}
                alt={`Japan flag`}
                width={40}
                height={30}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Việt Âu</h3>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Giáo dục quốc tế
                </p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Kết nối giáo dục & nâng tầm cuộc sống. Chúng tôi mang đến cơ hội
              du học chất lượng cao tại các nước phát triển.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Chương trình du học
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Tin tức - Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Câu hỏi thường gặp
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Liên hệ tư vấn
                </Link>
              </li>
            </ul>
          </div>

          {/* Study Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Chương trình</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs?country=Hàn Quốc"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Du học Hàn Quốc
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?country=Nhật Bản"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Du học Nhật Bản
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?country=Đài Loan"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Du học Đài Loan
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?country=Đức"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Du học Đức
                </Link>
              </li>
              <li>
                <Link
                  href="/programs?country=Úc"
                  className="text-gray-300 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Du học Úc
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Thông tin liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300 dark:text-gray-400">
                  0782 748 863
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300 dark:text-gray-400">
                  hainguyenhoang1205@gmail.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-gray-300 dark:text-gray-400">
                  Tầng 1, Trường đại học Sài Gòn, 273 An Dương Vương, Q.5,
                  TP.HCM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2024 Giáo Dục Quốc Tế Việt Âu. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 dark:text-gray-500 hover:text-primary text-sm transition-colors"
              >
                Chính sách bảo mật
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 dark:text-gray-500 hover:text-primary text-sm transition-colors"
              >
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
