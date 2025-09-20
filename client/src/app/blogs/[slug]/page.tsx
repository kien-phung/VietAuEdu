"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Facebook,
  Twitter,
  Link2,
  BookOpen,
  MessageCircle,
  Heart,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { mockData } from "@/utils/services/mockData";
import Link from "next/link";
import Image from "next/image";

export default function BlogDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const slug = params.slug as string;
    const foundPost = mockData.blogs.find((p) => p.slug === slug);

    if (foundPost) {
      setBlog(foundPost);
      // Get related posts from same category
      const related = mockData.blogs
        .filter(
          (p) => p.category === foundPost.category && p.id !== foundPost.id
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }

    setIsLoading(false);
  }, [params.slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || "";

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          "_blank"
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link đã được sao chép!");
        break;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Không tìm thấy bài viết
          </h1>
          <Link href="/blog">
            <Button>Quay lại blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Quay lại
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <Card>
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                  width={400}
                  height={300}
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </div>
              </div>

              <CardContent className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(blog.publishedAt).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 phút đọc</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                {/* Excerpt */}
                <div className="text-lg text-gray-600 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                  {blog.excerpt}
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Visa du học là một trong những bước quan trọng nhất trong
                    hành trình du học của bạn. Việc chuẩn bị hồ sơ visa cẩn thận
                    và đầy đủ sẽ quyết định phần lớn đến khả năng thành công của
                    bạn trong việc được cấp visa.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    1. Chuẩn bị hồ sơ visa du học Hàn Quốc
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Hồ sơ visa du học Hàn Quốc bao gồm nhiều loại giấy tờ quan
                    trọng. Mỗi loại giấy tờ đều có vai trò riêng trong việc
                    chứng minh năng lực học tập và tài chính của bạn.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Giấy tờ học vấn
                  </h3>

                  <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                    <li>
                      Bằng tốt nghiệp và bảng điểm đã được công chứng, hợp pháp
                      hóa lãnh sự
                    </li>
                    <li>
                      Chứng chỉ tiếng Hàn (TOPIK) hoặc tiếng Anh (IELTS/TOEFL)
                    </li>
                    <li>Thư giới thiệu từ giáo viên hoặc cơ quan công tác</li>
                    <li>Kế hoạch học tập (Study Plan) được viết chi tiết</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Chứng minh tài chính
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Đây là phần quan trọng nhất trong hồ sơ visa. Bạn cần chứng
                    minh khả năng chi trả cho việc học tập và sinh hoạt tại Hàn
                    Quốc trong suốt thời gian du học.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
                    2. Quy trình nộp hồ sơ và phỏng vấn
                  </h2>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sau khi chuẩn bị đầy đủ hồ sơ, bạn sẽ tiến hành nộp hồ sơ
                    tại Lãnh sự quán Hàn Quốc. Quá trình này thường mất từ 7-10
                    ngày làm việc để có kết quả.
                  </p>

                  <div className="bg-primary/10 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-primary mb-2">
                      💡 Mẹo từ chuyên gia:
                    </h4>
                    <p className="text-gray-700">
                      Nên chuẩn bị hồ sơ trước ít nhất 3 tháng so với thời điểm
                      dự kiến nhập học. Điều này giúp bạn có đủ thời gian để bổ
                      sung các giấy tờ còn thiếu nếu cần.
                    </p>
                  </div>
                </div>

                {/* Social Actions */}
                <div className="flex items-center justify-between pt-8 border-t border-gray-200 mt-8">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-colors ${
                        isLiked
                          ? "bg-red-50 text-red-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                      />
                      <span>{likes}</span>
                    </button>

                    <div className="flex items-center space-x-1 text-gray-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>24 bình luận</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 mr-2">Chia sẻ:</span>
                    <button
                      onClick={() => handleShare("facebook")}
                      className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="p-2 bg-sky-50 text-sky-600 rounded-full hover:bg-sky-100"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare("copy")}
                      className="p-2 bg-gray-50 text-gray-600 rounded-full hover:bg-gray-100"
                    >
                      <Link2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author Card */}
            <Card>
              <CardHeader>
                <CardTitle>Tác giả</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-3">
                  <Image
                    src="/api/placeholder/60/60"
                    alt={blog.author}
                    className="w-12 h-12 rounded-full object-cover"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {blog.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Chuyên gia tư vấn du học
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Với hơn 8 năm kinh nghiệm trong lĩnh vực tư vấn du học, tôi đã
                  hỗ trợ hàng trăm sinh viên thực hiện ước mơ du học.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Xem thêm bài viết
                </Button>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Bài viết liên quan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                      >
                        <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div>
                            <h5 className="font-medium text-gray-900 text-sm leading-tight mb-1 line-clamp-2">
                              {relatedPost.title}
                            </h5>
                            <p className="text-xs text-gray-500">
                              {new Date(
                                relatedPost.publishedAt
                              ).toLocaleDateString("vi-VN")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Đăng ký nhận tin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Nhận thông tin mới nhất về du học và học bổng
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button className="w-full">Đăng ký</Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
