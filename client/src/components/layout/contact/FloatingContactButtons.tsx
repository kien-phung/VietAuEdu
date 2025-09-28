"use client";

import React from "react";
import { PHONE } from "@/utils/services/constants";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
      {/* Zalo Button */}
      <Link
        href={`https://zalo.me/${PHONE.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {/* Animated red border */}
        <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-pulse"></div>

        <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center z-10">
          <Image
            src="/images/zalo_icon.png"
            alt="Zalo"
            width={36}
            height={36}
            className="w-9 h-9 object-contain"
          />
        </div>

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat qua Zalo
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </Link>

      {/* Phone Button */}
      <Link
        href={`tel:${PHONE.replace(/\D/g, "")}`}
        className="group relative w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {/* Animated red border */}
        <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75"></div>
        <div className="absolute inset-0 rounded-full border-2 border-red-400 animate-pulse"></div>

        <Phone className="relative w-6 h-6 text-white z-10" />

        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Gọi điện ngay
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </Link>
    </div>
  );
}
