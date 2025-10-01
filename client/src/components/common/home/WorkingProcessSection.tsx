"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COMPANY } from "@/utils/services/constants";

interface IProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: IProcessStep[] = [
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
  const ref = useRef(null);
  // Cấu hình để animation chạy mỗi khi section xuất hiện với tối thiểu 30% nội dung
  const isInView = useInView(ref, {
    amount: 0.3, // Hiển thị ít nhất 30% của section để kích hoạt animation
    margin: "100px 0px", // Kích hoạt trước khi section xuất hiện hoàn toàn để animation mượt hơn
  });

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
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
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-8 h-8 border-2 border-primary rounded-full flex items-center justify-center mr-3">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>
            <span className="text-primary text-lg font-medium tracking-wider">
              WORKING PROCESS
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Quy Trình Làm Việc Của Giáo Dục Quốc Tế {COMPANY}
          </motion.h2>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="flex flex-col sm:flex-row items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/95 dark:hover:bg-gray-800/95"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: isInView ? 0.6 + index * 0.15 : 0, // Staggered delay only when appearing
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Number Circle */}
              <motion.div
                className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: isInView ? 0.7 + index * 0.15 : 0,
                }}
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-4 border-primary">
                  <motion.span
                    className="text-2xl font-bold text-primary"
                    animate={isInView ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: isInView ? 1 + index * 0.15 : 0,
                    }}
                  >
                    {step.number}
                  </motion.span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="text-center sm:text-left"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: isInView ? 0.8 + index * 0.15 : 0,
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
