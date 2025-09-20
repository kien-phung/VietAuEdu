"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  DollarSign,
  Users,
  Calendar,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Building,
} from "lucide-react";
import { useParams } from "next/navigation";

// This would normally come from an API or database
const getJobById = (id: string): IJob => {
  const jobs: IJob[] = [
    {
      id: "1",
      title: "Chế Biến Nông Sản",
      country: "Japan",
      imageUrl: "/images/jobs/agricultural-processing.jpg",
      positions: 3,
      location: "KAGOSHIMA",
      salary: "147.715 Yên/Tháng",
      applicationDeadline: "26/09/2025",
      estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
      requirements: [
        "Nam/Nữ 18-35 tuổi",
        "Sức khỏe tốt",
        "Không yêu cầu kinh nghiệm",
        "Có thể làm việc ca đêm",
      ],
      benefits: [
        "Lương ổn định",
        "Bảo hiểm y tế",
        "Nhà ở miễn phí",
        "Ăn trưa miễn phí",
        "Thưởng cuối năm",
      ],
      description:
        "Làm việc tại nhà máy chế biến nông sản hiện đại với công nghệ tiên tiến. Công việc bao gồm kiểm tra chất lượng, đóng gói và vận chuyển sản phẩm.",
      company: "ABC Foods Co., Ltd",
      workType: "Toàn thời gian",
      featured: true,
      workingHours: "8:00 - 17:00 (Thứ 2 - Thứ 6)",
      overtime: "1.25x lương cơ bản",
      accommodation: "Ký túc xá công ty hoặc hỗ trợ thuê nhà",
      workEnvironment: "Nhà máy hiện đại, điều hòa không khí",
      trainingPeriod: "2 tuần đào tạo có lương",
    },
    // Add more jobs as needed
  ];

  return jobs.find((job) => job.id === id) as IJob;
};

export default function JobDetailPage() {
  const params = useParams();
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    const id = params.id as string;
    const foundJob = getJobById(id);

    if (foundJob) {
      setJob(foundJob);
    }
  }, [params.id, params.slug]);
  // const job = getJobById(params.id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Không tìm thấy việc làm
          </h1>
          <Link href="/jobs" className="text-primary hover:underline">
            Quay lại danh sách việc làm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/jobs"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại danh sách việc làm
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src={job.imageUrl}
                  alt={job.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <Building className="w-5 h-5 mr-2" />
                    <span className="text-lg">{job.company}</span>
                  </div>
                </div>
                {job.featured && (
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium">
                    Nổi bật
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">{job.location}</div>
                    <div className="text-sm text-gray-500">{job.country}</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <DollarSign className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">{job.salary}</div>
                    <div className="text-sm text-gray-500">Lương cơ bản</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Users className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">{job.positions} vị trí</div>
                    <div className="text-sm text-gray-500">Đang tuyển</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">{job.applicationDeadline}</div>
                    <div className="text-sm text-gray-500">Hạn ứng tuyển</div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
              >
                Ứng Tuyển Ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Mô Tả Công Việc
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {job.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Thời gian làm việc
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.workingHours}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Làm thêm giờ
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.overtime}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Chỗ ở
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.accommodation}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                      Đào tạo
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {job.trainingPeriod}
                    </p>
                  </div>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Yêu Cầu Ứng Viên
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Quyền Lợi & Phúc Lợi
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Apply */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Ứng Tuyển Nhanh
                </h3>
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Ứng Tuyển Ngay
                  </Link>

                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>Hoặc gọi trực tiếp</span>
                    </div>
                    <a
                      href="tel:0782748863"
                      className="text-primary font-bold text-lg hover:underline"
                    >
                      0902 020 050
                    </a>
                  </div>
                </div>
              </div>

              {/* Job Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Thông Tin Việc Làm
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Loại hình:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {job.workType}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Xuất cảnh:
                    </span>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {job.estimatedDeparture}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Môi trường:
                    </span>
                    <span className="font-medium text-sm text-gray-900 dark:text-white">
                      {job.workEnvironment}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Cần Hỗ Trợ?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Đội ngũ tư vấn viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-primary mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      0902 020 050
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-primary mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">
                      info@giaoducvietau.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
