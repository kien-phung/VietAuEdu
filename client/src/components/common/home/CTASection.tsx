"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: "url(/images/cta-background.jpg)",
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
        </div>
      </div>
    </section>
  );
}
