"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  DollarSign,
  Award,
  CheckCircle,
  Users,
  Calendar,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useProgramStore } from "@/utils/stores/programStore";

export default function ProgramDetailPage() {
  const { getProgram, isLoading } = useProgramStore();

  const params = useParams();
  const router = useRouter();
  const [program, setProgram] = useState<IProgram | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const programId = params.id as string;
      const response = await getProgram(programId);
      const data = response.data?.program;
      setProgram(data || null);
    };

    fetchData();
  }, [getProgram, params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Không tìm thấy chương trình
          </h1>
          <Link href="/programs">
            <Button>Quay lại danh sách chương trình</Button>
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
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>{program.country}</span>
                {program.featured && (
                  <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    Nổi bật
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {program.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">
                    {program.duration}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                  <DollarSign className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium">{program.tuition}</span>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={program.imageUrl}
                alt={program.title}
                width={400}
                height={300}
                className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                  Điều Kiện Tuyển Sinh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Lợi Ích Chương Trình
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* IProgram Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Thông Tin Chi Tiết
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Về Chương Trình
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Chương trình {program.title} được thiết kế để cung cấp cho
                    sinh viên những kiến thức chuyên sâu và kỹ năng thực tiễn
                    cần thiết trong môi trường quốc tế. Với đội ngũ giảng viên
                    giàu kinh nghiệm và cơ sở vật chất hiện đại, chương trình
                    cam kết mang lại chất lượng giáo dục cao nhất.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Cơ Hội Nghề Nghiệp
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Sau khi tốt nghiệp, sinh viên sẽ có cơ hội làm việc tại các
                    công ty đa quốc gia, tổ chức quốc tế hoặc tiếp tục nghiên
                    cứu và phát triển sự nghiệp học thuật. Mạng lưới alumni rộng
                    khắp sẽ hỗ trợ sinh viên trong việc tìm kiếm cơ hội việc
                    làm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Tư Vấn Nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Hotline 24/7</p>
                    <p className="font-semibold text-primary">0782 748 863</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold">
                      hainguyenhoang1205@gmail.com
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full"
                  onClick={() => setShowContactForm(!showContactForm)}
                >
                  Đăng ký tư vấn
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Thống Kê Nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Sinh viên đã tốt nghiệp
                    </span>
                  </div>
                  <span className="font-semibold text-primary">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Kỳ nhập học</span>
                  </div>
                  <span className="font-semibold">Tháng 3, 9</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      Tỷ lệ việc làm
                    </span>
                  </div>
                  <span className="font-semibold text-primary">95%</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            {showContactForm && (
              <Card>
                <CardHeader>
                  <CardTitle>Đăng Ký Tư Vấn</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="tel"
                      placeholder="Số điện thoại"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <textarea
                      placeholder="Câu hỏi của bạn"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    ></textarea>
                    <Button type="submit" className="w-full">
                      Gửi thông tin
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
