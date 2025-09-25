"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Define commitment item structure
interface CommitmentItem {
  title: string;
  description: string;
}

interface ICommitmentsSection {
  commitments: CommitmentItem[];
  commitmentsRef: React.RefObject<HTMLDivElement | null>;
  commitmentsInView: boolean;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function CommitmentsSection({
  commitments,
  commitmentsRef,
  commitmentsInView,
  containerVariants,
  itemVariants,
}: ICommitmentsSection) {
  return (
    <section
      ref={commitmentsRef}
      className="py-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={
            commitmentsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              commitmentsInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
          >
            Cam Kết Của <span className="text-primary">Việt Âu</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={commitmentsInView ? "visible" : "hidden"}
        >
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <CheckCircle className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                initial={{ opacity: 0 }}
                animate={commitmentsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                {commitment.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-300 text-sm"
                initial={{ opacity: 0 }}
                animate={commitmentsInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                {commitment.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
