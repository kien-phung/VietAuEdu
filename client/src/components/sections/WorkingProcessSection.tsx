"use client";

import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Đăng Ký Nhận Tư Vấn",
    description:
      "Chuyên viên tư vấn hướng dẫn chi tiết về chương trình Thực Tập Sinh kỹ năng, bao gồm: điều kiện tham gia, ngành nghề tuyển dụng, chính sách hỗ trợ khi tham gia chương trình.",
  },
  {
    number: "02",
    title: "Khám Sức Khỏe",
    description:
      "Người lao động được yêu cầu khám sức khỏe tại bệnh viện do Nhà nước chỉ định và có thể tham gia vào chương trình Thực tập sinh khi được xác nhận đủ điều kiện sức...",
  },
  {
    number: "03",
    title: "Đào Tạo Ngoại Ngữ",
    description:
      "Người lao động sẽ được đào tạo tiếng Nhật sơ cấp trong vòng 3 tháng. Bên cạnh đó, Người lao động cũng sẽ rèn luyện nếp sống, văn hóa trong thời gian học",
  },
  {
    number: "04",
    title: "Phỏng Vấn Với Nghiệp Đoàn",
    description:
      "Được sắp xếp phỏng vấn với các nghiệp đoàn. Thông tin tuyển dụng được đăng tải tại website, fanpage và bảng thông báo tại trường.",
  },
  {
    number: "05",
    title: "Xử Lý Hồ Sơ",
    description:
      "Khi trúng tuyển, người lao động tiếp tục học nâng cao tiếng Nhật tại trường trong thời gian xin tư cách lưu trú tại Nhật Bản. Thời gian xử lý hồ sơ từ 3-4 tháng.",
  },
  {
    number: "06",
    title: "Xuất Cảnh - Làm Việc",
    description:
      "Chuẩn bị các hồ sơ cần thiết và hướng dẫn thủ tục xuất cảnh. Đồng thời, chăm sóc Thực tập sinh trong suốt thời gian làm việc.",
  },
];

export default function WorkingProcessSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/working-process-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-lg font-medium tracking-wider">
              WORKING PROCESS
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Quy Trình Làm Việc Của Giáo Dục Quốc Tế Việt Âu
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex items-center bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95"
            >
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Number Circle */}
              <div className="ml-6 flex-shrink-0">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
