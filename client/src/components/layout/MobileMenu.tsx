"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Chương trình", href: "/programs" },
  { name: "Tin tức", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Liên hệ", href: "/contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "fixed right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-secondary hover:bg-secondary/90">
                <Link
                  href="/contact"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Tư vấn miễn phí
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
