"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { COMPANY } from "@/utils/services/constants";

interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface IWhyChooseUsSection {
  whyChooseUs: WhyChooseUsItem[];
  whyChooseUsRef: React.RefObject<HTMLDivElement | null>;
  whyChooseUsInView: boolean;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function WhyChooseUsSection({
  whyChooseUs,
  whyChooseUsRef,
  whyChooseUsInView,
  containerVariants,
  itemVariants,
}: IWhyChooseUsSection) {
  return (
    <section
      ref={whyChooseUsRef}
      className="py-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={
            whyChooseUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={
              whyChooseUsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tại Sao Nên Chọn <span className="text-primary">{COMPANY}?</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={whyChooseUsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Chúng tôi mang đến những lợi thế vượt trội giúp bạn thành công trong
            hành trình du học và làm việc quốc tế
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={whyChooseUsInView ? "visible" : "hidden"}
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                initial={{ opacity: 0 }}
                animate={whyChooseUsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={whyChooseUsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
