"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// Define stat item structure
interface StatItem {
  number: string;
  label: string;
  icon: React.ElementType;
}

interface IStatsSection {
  stats: StatItem[];
  statsRef: React.RefObject<HTMLDivElement | null>;
  statsInView: boolean;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function StatsSection({
  stats,
  statsRef,
  statsInView,
  containerVariants,
  itemVariants,
}: IStatsSection) {
  return (
    <section
      ref={statsRef}
      className="py-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <motion.div
                className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  statsInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
