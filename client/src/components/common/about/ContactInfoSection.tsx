"use client";

import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { ADDRESS, EMAIL, PHONE } from "@/utils/services/constants";

interface IContactInfoSection {
  contactInfoRef: React.RefObject<HTMLDivElement | null>;
  contactInfoInView: boolean;
  containerVariants: Variants;
  itemVariants: Variants;
}

export default function ContactInfoSection({
  contactInfoRef,
  contactInfoInView,
  containerVariants,
  itemVariants,
}: IContactInfoSection) {
  return (
    <section
      ref={contactInfoRef}
      className="py-16 bg-white dark:bg-gray-800 transition-colors"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={
            contactInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold text-primary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              contactInfoInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">Liên Hệ Với Chúng Tôi</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={contactInfoInView ? "visible" : "hidden"}
        >
          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <motion.div
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Địa chỉ
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
             {ADDRESS}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <motion.div
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Điện thoại
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {PHONE}
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-2xl text-center"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <motion.div
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="w-8 h-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold text-primary mb-2">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {EMAIL}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
