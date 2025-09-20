// components/sections/AboutSection.tsx
"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Học sinh thành công",
    value: "500+",
    color: "text-primary",
  },
  {
    icon: Globe,
    label: "Quốc gia hợp tác",
    value: "6",
    color: "text-secondary",
  },
  {
    icon: Award,
    label: "Tỷ lệ visa thành công",
    value: "98%",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    label: "Năm kinh nghiệm",
    value: "12+",
    color: "text-secondary",
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Kết Nối Giáo Dục & Nâng Tầm Cuộc Sống
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-8">
              <p>
                Trong suốt quá trình thành lập và phát triển, Việt Âu không
                ngừng tìm kiếm các trường học, các công ty uy tín tại các nước:
                Đài Loan, Nhật Bản, Hàn Quốc, Đức, Mỹ, Úc.
              </p>
              <p>
                Khẳng định vị thế của một đơn vị Tuyển chọn, Đào tạo và Chuyển
                giao nguồn nhân lực chất lượng tại Việt Nam.
              </p>
              <p>
                Chúng tôi hướng dẫn và hỗ trợ sinh viên hoàn thiện hồ sơ xin
                visa một cách chính xác và hiệu quả, đảm bảo bạn có đủ giấy tờ
                cần thiết để được xét duyệt thành công.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardContent className="pt-6">
                  <stat.icon
                    className={`w-12 h-12 mx-auto mb-4 ${stat.color}`}
                  />
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
