"use client";

import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function FloatingButtons() {
  return (
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
            loading="lazy"
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
  );
}
