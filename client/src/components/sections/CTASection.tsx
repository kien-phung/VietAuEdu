"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";
// Removed import of PLACE_HODLER_URL

interface CTASectionProps {
  backgroundImage?: string;
}

export default function CTASection({ backgroundImage }: CTASectionProps) {
  // Default background image
  const defaultBackgroundImage = "/images/cta-background.jpg";
  const bgImage = backgroundImage || defaultBackgroundImage;

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Sẵn Sàng Bắt Đầu Hành Trình Du Học?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
            Đừng để ước mơ chỉ là ước mơ. Hãy liên hệ với chúng tôi ngay hôm nay
            để được tư vấn miễn phí và chi tiết nhất
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Gọi điện tư vấn</h3>
              <p className="opacity-90 mb-4">Liên hệ hotline 24/7</p>
              <Button variant="secondary" size="sm">
                0782 748 863
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MessageCircle className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Chat trực tuyến</h3>
              <p className="opacity-90 mb-4">Tư vấn qua Zalo/Facebook</p>
              <Button variant="secondary" size="sm">
                Chat ngay
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Đặt lịch hẹn</h3>
              <p className="opacity-90 mb-4">Gặp mặt tư vấn trực tiếp</p>
              <Button variant="secondary" size="sm">
                Đặt lịch
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Tư Vấn Miễn Phí</h3>
            <p className="opacity-90 mb-6">
              Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí trong 24h
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:border-white/50"
              />
              <select className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50">
                <option value="">Chọn chương trình</option>
                <option value="Hàn Quốc">Du học Hàn Quốc</option>
                <option value="Nhật Bản">Du học Nhật Bản</option>
                <option value="Đài Loan">Du học Đài Loan</option>
                <option value="Đức">Du học Đức</option>
              </select>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="w-full mt-6 bg-white text-primary hover:bg-gray-100"
            >
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
