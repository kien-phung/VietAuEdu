"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ThemeToggleButton } from "./ThemeToggleButton";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors">
      {/* Top bar */}
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

      {/* Main navbar */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/images/logo1.png"}
              alt={`Japan flag`}
              width={40}
              height={30}
              className="object-contain"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side: Theme Toggle + CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggleButton />
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Tư vấn miễn phí
            </Button>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggleButton />
            <button
              type="button"
              className="p-2 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mounted && (
        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      )}
    </header>
  );
}
