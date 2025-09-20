"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  Search,
  Filter,
  ChevronRight,
  Phone,
  Mail,
} from "lucide-react";

interface JobOpportunity {
  id: string;
  title: string;
  country: string;
  image: string;
  positions: number;
  location: string;
  salary: string;
  applicationDeadline: string;
  estimatedDeparture: string;
  requirements: string[];
  benefits: string[];
  description: string;
  company: string;
  workType: string;
  featured?: boolean;
}

const jobOpportunities: JobOpportunity[] = [
  {
    id: "1",
    title: "Chế Biến Nông Sản",
    country: "Japan",
    image: "/images/jobs/agricultural-processing.jpg",
    positions: 3,
    location: "KAGOSHIMA",
    salary: "147.715 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
    requirements: [
      "Nam/Nữ 18-35 tuổi",
      "Sức khỏe tốt",
      "Không yêu cầu kinh nghiệm",
    ],
    benefits: ["Lương ổn định", "Bảo hiểm y tế", "Nhà ở miễn phí"],
    description: "Làm việc tại nhà máy chế biến nông sản hiện đại",
    company: "ABC Foods Co., Ltd",
    workType: "Toàn thời gian",
    featured: true,
  },
  {
    id: "2",
    title: "Vệ Sinh Khách Sạn",
    country: "Japan",
    image: "/images/jobs/hotel-cleaning.jpg",
    positions: 3,
    location: "OITA",
    salary: "163.400 Yên/Tháng",
    applicationDeadline: "03/10/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
    requirements: ["Nữ 20-40 tuổi", "Cẩn thận, tỉ mỉ", "Tiếng Nhật cơ bản"],
    benefits: ["Lương cao", "Môi trường sạch sẽ", "Được đào tạo"],
    description: "Vệ sinh phòng khách sạn 4 sao",
    company: "Oita Grand Hotel",
    workType: "Toàn thời gian",
  },
  {
    id: "3",
    title: "Chế Biến Thực Phẩm",
    country: "Japan",
    image: "/images/jobs/food-processing.jpg",
    positions: 2,
    location: "KUMAMOTO",
    salary: "153.000 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
    requirements: ["Nam/Nữ 18-32 tuổi", "Không sợ lạnh", "Có trách nhiệm"],
    benefits: ["Ăn trưa miễn phí", "Thưởng hiệu suất", "Nghỉ phép có lương"],
    description: "Chế biến và đóng gói thực phẩm đông lạnh",
    company: "Kumamoto Food Industries",
    workType: "Ca làm việc",
  },
  {
    id: "4",
    title: "Xây Dựng",
    country: "Japan",
    image: "/images/jobs/construction.jpg",
    positions: 1,
    location: "KAGOSHIMA",
    salary: "155.481 Yên/Tháng",
    applicationDeadline: "26/09/2025",
    estimatedDeparture: "4 - 6 tháng sau khi thi đỗ phỏng vấn",
    requirements: ["Nam 18-35 tuổi", "Khỏe mạnh", "Không sợ độ cao"],
    benefits: ["Lương theo năng lực", "Bảo hiểm tai nạn", "Phụ cấp kỹ thuật"],
    description: "Thi công xây dựng công trình dân dụng",
    company: "Kagoshima Construction Co.",
    workType: "Toàn thời gian",
    featured: true,
  },
  {
    id: "5",
    title: "Điện Tử",
    country: "Korea",
    image: "/images/jobs/electronics.jpg",
    positions: 5,
    location: "SEOUL",
    salary: "1.800.000 Won/Tháng",
    applicationDeadline: "15/10/2025",
    estimatedDeparture: "3 - 5 tháng sau khi thi đỗ phỏng vấn",
    requirements: ["Nam/Nữ 20-30 tuổi", "Tốt nghiệp THPT", "Khéo léo"],
    benefits: ["Lương cao", "Làm việc hiện đại", "Cơ hội thăng tiến"],
    description: "Lắp ráp linh kiện điện tử tại nhà máy Samsung",
    company: "Samsung Electronics",
    workType: "Toàn thời gian",
  },
  {
    id: "6",
    title: "Chăm Sóc Người Già",
    country: "Germany",
    image: "/images/jobs/elderly-care.jpg",
    positions: 2,
    location: "BERLIN",
    salary: "2.500 EUR/Tháng",
    applicationDeadline: "20/10/2025",
    estimatedDeparture: "6 - 8 tháng sau khi thi đỗ phỏng vấn",
    requirements: ["Nữ 22-40 tuổi", "Có chứng chỉ điều dưỡng", "Tiếng Đức B1"],
    benefits: ["Lương cao nhất", "Phúc lợi tốt", "Cơ hội định cư"],
    description: "Chăm sóc người cao tuổi tại viện dưỡng lão",
    company: "Berlin Care Center",
    workType: "Toàn thời gian",
  },
];

const countries = [
  "Tất cả",
  "Japan",
  "Korea",
  "Germany",
  "Australia",
  "Taiwan",
];

const workTypes = ["Tất cả", "Toàn thời gian", "Ca làm việc", "Bán thời gian"];

export default function JobOpportunitiesPage() {
  const [selectedCountry, setSelectedCountry] = useState("Tất cả");
  const [selectedWorkType, setSelectedWorkType] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobOpportunities.filter((job) => {
    const matchesCountry =
      selectedCountry === "Tất cả" || job.country === selectedCountry;
    const matchesWorkType =
      selectedWorkType === "Tất cả" || job.workType === selectedWorkType;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCountry && matchesWorkType && matchesSearch;
  });

  const featuredJobs = jobOpportunities.filter((job) => job.featured);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Featured Jobs Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Việc Làm <span className="text-primary">Nổi Bật</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Các vị trí việc làm được ưu tiên và có mức lương hấp dẫn nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {featuredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 relative"
              >
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Nổi bật
                </div>

                <div className="flex">
                  <div className="w-1/3 relative">
                    <div className="aspect-square relative">
                      <Image
                        src={job.image}
                        alt={job.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-2/3 p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">
                      {job.title} - {job.country}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-700 text-sm">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span>Số lượng: {job.positions}</span>
                      </div>

                      <div className="flex items-center text-gray-700 text-sm">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>Khu vực: {job.location}</span>
                      </div>

                      <div className="flex items-center text-gray-700 text-sm">
                        <DollarSign className="w-4 h-4 text-primary mr-2" />
                        <span>Lương: {job.salary}</span>
                      </div>
                    </div>

                    <Link
                      href={`/jobs/${job.id}`}
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

      {/* Search and Filter Section */}
      <section id="jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tìm Kiếm <span className="text-primary">Việc Làm</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm kiếm việc làm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Country Filter */}
              <div>
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Work Type Filter */}
              <div>
                <select
                  value={selectedWorkType}
                  onChange={(e) => setSelectedWorkType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {workTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setSelectedCountry("Tất cả");
                  setSelectedWorkType("Tất cả");
                  setSearchTerm("");
                }}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                <Filter className="w-4 h-4 inline mr-2" />
                Đặt lại
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Tìm thấy{" "}
              <span className="font-bold text-primary">
                {filteredJobs.length}
              </span>{" "}
              việc làm
            </p>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {job.country}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{job.company}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-700 text-sm">
                      <MapPin className="w-4 h-4 text-primary mr-2" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <DollarSign className="w-4 h-4 text-primary mr-2" />
                      <span>{job.salary}</span>
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span>Hạn: {job.applicationDeadline}</span>
                    </div>

                    <div className="flex items-center text-gray-700 text-sm">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <span>{job.workType}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {job.benefits.slice(0, 2).map((benefit, index) => (
                      <span
                        key={index}
                        className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/jobs/${job.id}`}
                    className="block w-full bg-primary hover:bg-primary/90 text-white text-center py-3 rounded-lg font-medium transition-colors duration-300"
                  >
                    Ứng Tuyển Ngay
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Không tìm thấy việc làm phù hợp
              </p>
              <p className="text-gray-400">Hãy thử thay đổi bộ lọc tìm kiếm</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Không Tìm Thấy Việc Làm Phù Hợp?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Để lại thông tin liên hệ, chúng tôi sẽ tư vấn và thông báo khi có cơ
            hội việc làm phù hợp với bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Liên Hệ Tư Vấn
            </Link>
            <Link
              href="/register"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Đăng Ký Nhận Thông Báo
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Liên Hệ <span className="text-primary">Tư Vấn</span>
            </h2>
            <p className="text-xl text-gray-600">
              Đội ngũ chuyên viên sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Hotline</h3>
              <p className="text-primary font-semibold">0902 020 050</p>
              <p className="text-gray-600 text-sm">24/7 - Miễn phí tư vấn</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-primary font-semibold">
                info@giaoducvietau.com
              </p>
              <p className="text-gray-600 text-sm">Phản hồi trong 24h</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Văn Phòng</h3>
              <p className="text-gray-700 text-sm">
                287 Khuông Việt, P. Phú Trung
              </p>
              <p className="text-gray-700 text-sm">Q. Tân Phú, TP. HCM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
