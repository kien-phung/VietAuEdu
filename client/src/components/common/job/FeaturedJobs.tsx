import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, MapPin, DollarSign, ChevronRight } from "lucide-react";

interface FeaturedJobsProps {
  featuredJobs: IJob[];
}

export default function FeaturedJobs({ featuredJobs }: FeaturedJobsProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Việc Làm <span className="text-primary">Nổi Bật</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Các vị trí việc làm được ưu tiên và có mức lương hấp dẫn nhất
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-600 relative"
            >
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                Nổi bật
              </div>

              <div className="flex">
                <div className="w-1/3 relative">
                  <div className="aspect-square relative">
                    <Image
                      src={job.imageUrl ?? "/images/default-job.png"}
                      alt={job.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-2/3 p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
                    {job.title} - {job.country}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                      <Users className="w-4 h-4 text-primary mr-2" />
                      <span>Số lượng: {job.positions}</span>
                    </div>

                    <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span>Khu vực: {job.location}</span>
                    </div>

                    <div className="flex items-center text-gray-700 dark:text-gray-300 text-sm">
                      <DollarSign className="w-4 h-4 text-primary mr-2" />
                      <span>Lương: {job.salary}</span>
                    </div>
                  </div>

                  <Link
                    href={`/jobs/${job._id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    Xem chi tiết <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
