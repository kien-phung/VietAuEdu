"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PHONE, COMPANY } from "@/utils/services/constants";

const features = [
  {
    title: "Uy Tín Tin Cậy",
    items: ["Hợp tác với các đối tác uy tín", "Phản hồi tích cực từ học viên"],
  },
  {
    title: "Chi Phí Thấp",
    items: ["Học bổng đa dạng, dễ tiếp cận", "Chi phí dịch vụ minh bạch"],
  },
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left side with images */}
          <div className="lg:col-span-2 relative flex flex-col space-y-6">
            {/* Top image */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Image
                src="/images/about1.jpg"
                alt={`${COMPANY} Academy Team`}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Red box with 12 years experience */}
            <motion.div
              className="absolute top-32 right-0 lg:right-0 bg-primary text-white p-6 rounded-lg shadow-lg z-10 w-48 md:w-60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="text-5xl font-bold">12</div>
              <div className="text-sm font-medium mt-1">Năm Kinh Nghiệm</div>
              <div className="text-sm font-medium">Trong Ngành</div>
            </motion.div>

            {/* Bottom image */}
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg mt-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Image
                src="/images/about2.jpg"
                alt={`${COMPANY} Academy Office`}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Right side with content */}
          <div className="lg:col-span-3">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <span className="text-primary">WHY CHOOSE US</span>
            </motion.div>

            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: false }}
            >
              Kết Nối Giáo Dục & Nâng Tầm Cuộc Sống
            </motion.h2>

            <motion.div
              className="space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <p>
                {`Trong suốt quá trình thành lập và phát triển, ${COMPANY} không ngừng tìm kiếm các trường học, các công ty uy tín tại các nước: Đài Loan, Nhật Bản, Hàn Quốc, Đức, Mỹ, Úc.`}
              </p>
              <p>
                Khẳng định vị thế của một đơn vị Tuyển chọn, Đào tạo và Chuyển
                giao nguồn nhân lực chất lượng tại Việt Nam.
              </p>
            </motion.div>

            {/* Feature boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3`}
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-2"
              >
                GIỚI THIỆU
              </Button>

              <div className="flex items-center">
                <p className="text-gray-500 dark:text-gray-400 mr-2">
                  Bạn cần tư vấn?
                </p>
                <p className="text-primary font-bold text-xl">{PHONE}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
