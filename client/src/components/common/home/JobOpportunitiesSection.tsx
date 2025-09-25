"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const jobOpportunities: IJob[] = [
  {
    id: "1",
    title: "CHẾ BIẾN NƯƠNG SẢN - Japan",
    country: "Japan",
    imageUrl: "/images/jobs/agricultural-processing.jpg",
    positions: 3,
    location: "KAGOSHIMA",
    salary: "147.715 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
  },
  {
    id: "2",
    title: "Vệ Sinh Khách Sạn - Japan",
    country: "Japan",
    imageUrl: "/images/jobs/hotel-cleaning.jpg",
    positions: 3,
    location: "OITA",
    salary: "163.400 Yên/Tháng",
    applicationDeadline: "03/10/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
  },
  {
    id: "3",
    title: "CHẾ BIẾN THỰC PHẨM - Japan",
    country: "Japan",
    imageUrl: "/images/jobs/food-processing.jpg",
    positions: 2,
    location: "KUMAMOTO",
    salary: "153.000 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
  },
  {
    id: "4",
    title: "XÂY DỰNG - Japan",
    country: "Japan",
    imageUrl: "/images/jobs/construction.jpg",
    positions: 1,
    location: "KAGOSHIMA",
    salary: "155.481 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
  },
];

const countries = ["Japan", "Korea", "Germany", "Australia", "Taiwan"];

export default function JobOpportunitiesSection() {
  const [selectedCountry, setSelectedCountry] = useState("Japan");

  const filteredJobs = jobOpportunities.filter(
    (job) => job.country === selectedCountry
  );

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-primary text-sm mr-2">💼</span>
            <span className="text-primary font-semibold tracking-wider text-sm">
              JOB OPPORTUNITIES
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Cơ Hội Việc Làm <span className="text-primary">Tại Các Nước.</span>
          </h2>

          {/* Country Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCountry === country
                    ? "bg-primary text-white shadow-lg"
                    : "border-2 border-primary text-primary hover:bg-red-50"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="flex">
                {/* Image */}
                <div className="w-1/3 relative">
                  <div className="aspect-square relative">
                    <Image
                      src={
                        job.imageUrl && job.imageUrl.trim() !== ""
                          ? job.imageUrl
                          : "/images/placeholder-job.jpg"
                      }
                      alt={job.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-2/3 p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {job.title}
                  </h3>

                  <div className="space-y-3">
                    {/* Positions */}
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-primary mr-2">👥</span>
                      <span className="text-sm">Số lượng: {job.positions}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-primary mr-2">📍</span>
                      <span className="text-sm">Khu vực: {job.location}</span>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-primary mr-2">💰</span>
                      <span className="text-sm">Lương: {job.salary}</span>
                    </div>

                    {/* Deadline */}
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="text-primary mr-2">⏰</span>
                      <span className="text-sm">
                        Ngày thi tuyển: {job.applicationDeadline}
                      </span>
                    </div>

                    {/* Departure */}
                    <div className="flex items-start text-gray-700 dark:text-gray-300">
                      <span className="text-primary mr-2 mt-0.5">✈️</span>
                      <span className="text-sm">
                        Dự kiến bay: {job.estimatedDeparture}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/programs"
            className="inline-flex items-center px-8 py-3 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Xem Tất Cả
          </Link>
        </div>
      </div>
    </section>
  );
}
