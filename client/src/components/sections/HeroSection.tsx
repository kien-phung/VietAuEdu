"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/common/VideoModal";
import Image from "next/image";

export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoButtonClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kết Nối Giáo Dục &{" "}
                <span className="text-primary">Nâng Tầm</span> Cuộc Sống
              </h1>
              <p className="text-xl text-gray-600 mt-6">
                Bạn đang mơ ước học tiếp Thạc sĩ tại Hàn Quốc và có cơ hội phát
                triển sự nghiệp trong môi trường quốc tế hiện đại? Giáo Dục Quốc
                Tế Việt Âu mang đến cho bạn những cơ hội du học chưa từng có!
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-4 rounded-full">
                <span className="text-2xl font-bold text-primary">12+</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Năm Kinh Nghiệm</p>
                <p className="text-gray-600">Trong Ngành Giáo Dục</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 flex items-center"
                >
                  Tư vấn miễn phí
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-2 hover:bg-gray-50 flex items-center"
                onClick={handleVideoButtonClick}
              >
                <Play className="mr-2 w-5 h-5" />
                Xem video giới thiệu
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Học sinh thành công</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-gray-600">Quốc gia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">
                  Tỷ lệ visa thành công
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/api/placeholder/600/500"
                width={600}
                height={500}
                alt="Du học quốc tế"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="group-hover:scale-110 transition-transform duration-300 mt-2">
                    <Image
                      src={"/svg/south-korea_flag.svg"}
                      alt={`South Korea flag`}
                      width={40}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-sm">Hàn Quốc</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="group-hover:scale-110 transition-transform duration-300 mt-2">
                    <Image
                      src={"/svg/japan_flag.svg"}
                      alt={`Japan flag`}
                      width={40}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium text-sm">Nhật Bản</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-6 scale-105 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full"></div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={handleCloseVideoModal}
        videoSrc="/videos/gioi_thieu.mp4"
        title="Video Giới Thiệu VietAu Academy"
      />
    </section>
  );
}
