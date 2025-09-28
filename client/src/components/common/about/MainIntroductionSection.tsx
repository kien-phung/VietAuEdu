"use client";

import React from "react";
import { COMPANY } from "@/utils/services/constants";
import { motion } from "framer-motion";

interface IMainIntroductionSection {
  introRef: React.RefObject<HTMLDivElement | null>;
  introInView: boolean;
}

export default function MainIntroductionSection({
  introRef,
  introInView,
}: IMainIntroductionSection) {
  return (
    <section
      ref={introRef}
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              introInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Về Chúng Tôi
          </motion.h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={
                introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {`Công ty Giáo dục Quốc tế ${COMPANY} là đơn vị hàng đầu trong lĩnh vực đào tạo, tuyển chọn và chuyển giao nguồn nhân lực chất lượng cao cho các thị trường lao động quốc tế. Với nhiều năm kinh nghiệm hoạt động trong lĩnh vực này, ${COMPANY} đã hỗ trợ hàng ngàn học viên và người lao động Việt Nam thành công tại các quốc gia phát triển như Nhật Bản, Hàn Quốc, Đài Loan, Úc và Đức.`}
            </motion.p>
            <motion.p
              className="mb-6 text-primary"
              initial={{ opacity: 0, x: 20 }}
              animate={
                introInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
              }
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {`Sứ mệnh của chúng tôi không chỉ là mang đến cơ hội du học và làm việc nước ngoài, mà còn xây dựng nền tảng kiến thức, kỹ năng cần thiết để học viên tự tin bước ra thế giới. Với đội ngũ chuyên gia dày dặn kinh nghiệm, ${COMPANY} cam kết mang đến dịch vụ tốt nhất, từ khâu tư vấn, đào tạo ngôn ngữ đến hỗ trợ định hướng nghề nghiệp.`}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
