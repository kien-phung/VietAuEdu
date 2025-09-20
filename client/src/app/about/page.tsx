import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  Heart,
  CheckCircle,
  Phone,
  MapPin,
  Star,
} from "lucide-react";
import { Metadata } from "next";

// SEO optimization for About page
export const metadata: Metadata = {
  title: "Về Chúng Tôi - VietAuEdu | Công Ty Giáo Dục Quốc Tế Việt Âu",
  description:
    "Công ty Giáo dục Quốc tế Việt Âu - Đơn vị hàng đầu trong lĩnh vực tư vấn du học với hơn 10 năm kinh nghiệm. Đã hỗ trợ hàng ngàn học sinh thành công tại các quốc gia phát triển.",
  keywords:
    "về VietAuEdu, công ty giáo dục quốc tế Việt Âu, tư vấn du học, kinh nghiệm du học, dịch vụ du học",
  openGraph: {
    title: "Về Chúng Tôi - VietAuEdu",
    description:
      "Tìm hiểu về VietAuEdu - Đơn vị tư vấn du học hàng đầu với 10+ năm kinh nghiệm",
    type: "website",
  },
};

// Static data - moved to build time for instant loading
const getAboutPageData = () => {
  return {
    stats: [
      { number: "10+", label: "Năm kinh nghiệm", icon: Award },
      { number: "5000+", label: "Học viên thành công", icon: Users },
      { number: "6", label: "Quốc gia đối tác", icon: Globe },
      { number: "99%", label: "Tỷ lệ hài lòng", icon: Star },
    ],
    whyChooseUs: [
      {
        title: "Chuyên Môn Cao",
        description:
          "Đội ngũ tư vấn viên của Việt Âu đều là những chuyên gia có kiến thức sâu rộng về hệ thống giáo dục, thị trường lao động và các thủ tục hành chính tại nhiều quốc gia.",
        icon: GraduationCap,
      },
      {
        title: "Mạng Lưới Đối Tác Rộng Khắp",
        description:
          "Việt Âu có quan hệ hợp tác chặt chẽ với các trường đại học, tổ chức giáo dục, doanh nghiệp lớn tại Nhật Bản, Hàn Quốc, Đức, Úc, và Đài Loan.",
        icon: Globe,
      },
      {
        title: "Dịch Vụ Trọn Gói",
        description:
          "Chúng tôi cung cấp dịch vụ trọn gói từ tư vấn chọn trường, hỗ trợ xin visa, đặt vé máy bay, sắp xếp chỗ ở cho đến định hướng nghề nghiệp.",
        icon: CheckCircle,
      },
      {
        title: "Cam Kết Chất Lượng",
        description:
          "Việt Âu luôn đặt chất lượng dịch vụ lên hàng đầu. Chúng tôi không ngừng cải tiến và nâng cao chất lượng dịch vụ nhằm đáp ứng tối đa nhu cầu của học viên.",
        icon: Award,
      },
      {
        title: "Chi Phí Hợp Lý",
        description:
          "Hiểu rõ những lo lắng về chi phí của học viên và gia đình, Việt Âu cam kết cung cấp các gói dịch vụ với chi phí cạnh tranh nhất trên thị trường.",
        icon: Heart,
      },
      {
        title: "Hỗ Trợ 24/7",
        description:
          "Đội ngũ tư vấn viên của Việt Âu luôn làm việc với tinh thần trách nhiệm cao, tận tâm hỗ trợ khách hàng 24/7.",
        icon: Users,
      },
    ],
    services: [
      {
        title: "Tư Vấn Du Học",
        features: [
          "Lựa chọn trường và ngành học phù hợp",
          "Hỗ trợ xin học bổng",
          "Hướng dẫn thủ tục xin visa",
          "Chuẩn bị hồ sơ du học",
        ],
      },
      {
        title: "Tư Vấn Việc Làm Quốc Tế",
        features: [
          "Cập nhật thông tin thị trường lao động",
          "Kết nối nhà tuyển dụng uy tín",
          "Hỗ trợ tìm việc làm nước ngoài",
          "Định hướng nghề nghiệp",
        ],
      },
      {
        title: "Đào Tạo Ngoại Ngữ",
        features: [
          "Khóa học tiếng Nhật, Hàn, Đức, Anh",
          "Đào tạo kỹ năng mềm",
          "Luyện thi chứng chỉ quốc tế",
          "Giao tiếp thực tế",
        ],
      },
    ],
    commitments: [
      {
        title: "Minh Bạch",
        description:
          "Mọi thông tin về quy trình và chi phí đều được công khai rõ ràng",
      },
      {
        title: "Chuyên Nghiệp",
        description:
          "Đội ngũ tư vấn viên luôn làm việc với tinh thần trách nhiệm cao",
      },
      {
        title: "Hiệu Quả",
        description: "Cam kết giúp bạn đạt được mục tiêu nhanh chóng, hiệu quả",
      },
      {
        title: "Uy Tín",
        description:
          "Với nhiều năm hoạt động, đã xây dựng được uy tín vững chắc trên thị trường",
      },
    ],
  };
};

// SSG: This page will be pre-rendered at build time
export default function AboutPage() {
  const { stats, whyChooseUs, services, commitments } = getAboutPageData();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Về Chúng Tôi
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-xl mb-6">
                Công ty Giáo dục Quốc tế Việt Âu là đơn vị hàng đầu trong lĩnh
                vực đào tạo, tuyển chọn và chuyển giao nguồn nhân lực chất lượng
                cao cho các thị trường lao động quốc tế. Với nhiều năm kinh
                nghiệm hoạt động trong lĩnh vực này, Việt Âu đã hỗ trợ hàng ngàn
                học viên và người lao động Việt Nam thành công tại các quốc gia
                phát triển như Nhật Bản, Hàn Quốc, Đài Loan, Úc và Đức.
              </p>
              <p className="mb-6">
                Sứ mệnh của chúng tôi không chỉ là mang đến cơ hội du học và làm
                việc nước ngoài, mà còn xây dựng nền tảng kiến thức, kỹ năng cần
                thiết để học viên tự tin bước ra thế giới. Với đội ngũ chuyên
                gia dày dặn kinh nghiệm, Việt Âu cam kết mang đến dịch vụ tốt
                nhất, từ khâu tư vấn, đào tạo ngôn ngữ đến hỗ trợ định hướng
                nghề nghiệp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tại Sao Nên Chọn <span className="text-primary">Việt Âu?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Chúng tôi mang đến những lợi thế vượt trội giúp bạn thành công
              trong hành trình du học và làm việc quốc tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Các Dịch Vụ <span className="text-primary">Chính</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dịch vụ toàn diện từ tư vấn đến hỗ trợ thực hiện giấc mơ du học và
              làm việc nước ngoài
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cam Kết Của <span className="text-primary">Việt Âu</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {commitment.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sẵn Sàng Bắt Đầu Hành Trình Của Bạn?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Công ty Giáo dục Quốc tế Việt Âu không chỉ là nơi hỗ trợ bạn hiện
            thực hóa ước mơ du học và làm việc tại nước ngoài mà còn là người
            bạn đồng hành đáng tin cậy trên hành trình ấy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Liên Hệ Ngay
            </Link>
            <Link
              href="/programs"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Xem Chương Trình
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Thông Tin <span className="text-primary">Liên Hệ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Trụ Sở Chính Hà Nội
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Tòa nhà E38 Yên Hòa, Vũ Phạm Hàm, Yên Hòa, Cầu Giấy, Hà Nội
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Trụ Sở Chính TP.HCM
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                287 Khuông Việt, P. Phú Trung, Q. Tân Phú, TP. HCM
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Hotline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                0902 020 050
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                24/7 - Miễn phí tư vấn
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
