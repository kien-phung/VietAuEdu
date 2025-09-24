"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StudyProgram {
  id: string;
  title: string;
  image: string;
  icon: string;
  description?: string;
}

const studyPrograms: StudyProgram[] = [
  {
    id: "representatives",
    title: "Các học viên tiêu biểu của Việt Âu",
    image: "/images/study-abroad/representatives.jpg",
    icon: "📋",
  },
  {
    id: "language",
    title: "Hệ Ngôn Ngữ",
    image: "/images/study-abroad/language.jpg",
    icon: "🗣️",
  },
  {
    id: "college",
    title: "Học Cao Đẳng",
    image: "/images/study-abroad/college.jpg",
    icon: "🎓",
  },
  {
    id: "university",
    title: "Học Đại Học",
    image: "/images/study-abroad/university.jpg",
    icon: "✏️",
  },
  {
    id: "masters",
    title: "Học Thạc Sĩ",
    image: "/images/study-abroad/masters.jpg",
    icon: "🎓",
  },
];

export default function StudyAbroadSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="text-primary text-lg mr-2">🏛️</span>
                <span className="text-primary font-semibold tracking-wider">
                  STUDY ABROAD
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Du Học Việt Âu
                <br />
                Mở Ra <span className="text-primary">Chân Trời Mới.</span>
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Việt Âu luôn là đơn vị hàng đầu trong việc đưa ra những chính
                sách hỗ trợ du học sinh khi lựa chọn du học tại các nước.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Top Row */}
              <div className="space-y-4">
                {/* Representatives Card - Large */}
                <div className="relative group cursor-pointer">
                  <div className="relative h-48 sm:h-40 rounded-2xl overflow-hidden">
                    <Image
                      src={studyPrograms[0].image}
                      alt={studyPrograms[0].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xl">
                          {studyPrograms[0].icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {studyPrograms[0].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* College Card */}
                <div className="relative group cursor-pointer">
                  <div className="relative h-32 sm:h-28 rounded-2xl overflow-hidden">
                    <Image
                      src={studyPrograms[2].image}
                      alt={studyPrograms[2].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className="absolute top-3 right-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">
                          {studyPrograms[2].icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-base">
                        {studyPrograms[2].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* Language Card */}
                <div className="relative group cursor-pointer">
                  <div className="relative h-32 sm:h-28 rounded-2xl overflow-hidden">
                    <Image
                      src={studyPrograms[1].image}
                      alt={studyPrograms[1].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className="absolute top-3 right-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">
                          {studyPrograms[1].icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-base">
                        {studyPrograms[1].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* CTA Card */}
                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 sm:p-6 h-40 sm:h-48 flex flex-col justify-center text-white text-center">
                  <div className="mb-3 sm:mb-2">
                    <h3 className="font-bold text-base sm:text-xl leading-tight px-1">
                      Miễn phí 100% phí dịch vụ hỗ sơ & tư vấn du học.
                    </h3>
                  </div>

                  <Link
                    href="/contact"
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full text-center transition-colors duration-300 w-fit text-sm sm:py-3 sm:px-6 sm:text-base mx-auto"
                  >
                    Đăng Ký Ngay
                  </Link>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="col-span-2 grid grid-cols-2 gap-4">
                {/* University Card */}
                <div className="relative group cursor-pointer">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image
                      src={studyPrograms[3].image}
                      alt={studyPrograms[3].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className="absolute top-3 right-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">
                          {studyPrograms[3].icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-base">
                        {studyPrograms[3].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Masters Card */}
                <div className="relative group cursor-pointer">
                  <div className="relative h-32 rounded-2xl overflow-hidden">
                    <Image
                      src={studyPrograms[4].image}
                      alt={studyPrograms[4].title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                    {/* Icon */}
                    <div className="absolute top-3 right-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">
                          {studyPrograms[4].icon}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-base">
                        {studyPrograms[4].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
