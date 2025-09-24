"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { ThemeToggleButton } from "../theme/ThemeToggleButton";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Chương trình", href: "/programs" },
  { name: "Việc làm", href: "/jobs" },
  { name: "Tin tức", href: "/blogs" },
  { name: "Hỏi đáp", href: "/faq" },
  { name: "Liên hệ", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
        {/* Top bar - SSR only for faster rendering */}
        <div className="bg-primary dark:bg-primary text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Phone size={14} />
                  <span>0782 748 863</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail size={14} />
                  <span>hainguyenhoang1205@gmail.com</span>
                </div>
              </div>
              <div className="hidden md:block">
                <span>12+ năm kinh nghiệm trong ngành</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar - Pure SSR for instant loading */}
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - SSR */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo1.png"
                alt="VietAuEdu Logo"
                width={40}
                height={30}
                className="object-contain"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Việt Âu Edu
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Giáo dục quốc tế
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - SSR */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch={true}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right side - SSR CTA button and theme toggle */}
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggleButton />
              <Link href={"/contact"} prefetch={true}>
                <Button size="lg" variant="secondary">
                  Tư vấn miễn phí
                </Button>
              </Link>
            </div>

            {/* Mobile controls - theme toggle and menu */}
            <div className="lg:hidden flex items-center space-x-2">
              <ThemeToggleButton />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
