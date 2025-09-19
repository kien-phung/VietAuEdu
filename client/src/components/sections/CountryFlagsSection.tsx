"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Country {
  name: string;
  flagSvg: string;
  queryParam: string;
  englishName: string;
}

const countries: Country[] = [
  {
    name: "Hàn Quốc",
    flagSvg: "/svg/south-korea_flag.svg",
    queryParam: "Hàn Quốc",
    englishName: "Korea",
  },
  {
    name: "Nhật Bản",
    flagSvg: "/svg/japan_flag.svg",
    queryParam: "Nhật Bản",
    englishName: "Japan",
  },
  {
    name: "Đài Loan",
    flagSvg: "/svg/taiwan_flag.svg",
    queryParam: "Đài Loan",
    englishName: "Taiwan",
  },
  {
    name: "Đức",
    flagSvg: "/svg/germany_flag.svg",
    queryParam: "Đức",
    englishName: "Germany",
  },
  {
    name: "Úc",
    flagSvg: "/svg/australia_flag.svg",
    queryParam: "Úc",
    englishName: "Australia",
  },
  {
    name: "Canada",
    flagSvg: "/svg/canada_flag.svg",
    queryParam: "Canada",
    englishName: "Canada",
  },
];

export default function CountryFlagsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Các Quốc Gia Đối Tác
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá các chương trình du học tại 6 quốc gia hàng đầu với nhiều
            cơ hội phát triển
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {countries.map((country) => (
            <Link
              key={country.name}
              href={`/programs?country=${encodeURIComponent(
                country.queryParam
              )}`}
              className="group block"
            >
              <div
                className={`relative hover:bg-primary/90 rounded-2xl p-6 pt-8 pb-4 h-48 flex flex-col items-center justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:brightness-110`}
              >
                {/* Flag SVG at top */}
                <div className="group-hover:scale-110 transition-transform duration-300 mt-2">
                  <Image
                    src={country.flagSvg}
                    alt={`${country.name} flag`}
                    width={80}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Country name label at bottom */}
                <div className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 mt-auto">
                  <span className="text-sm font-semibold text-gray-800">
                    {country.englishName}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/programs"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
          >
            Xem Tất Cả Chương Trình
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
