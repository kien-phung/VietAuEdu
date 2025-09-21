import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, BookOpen } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { mockData } from "@/utils/services/mockData";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import BlogInteractions from "@/components/common/blogs/BlogInteractions";
import { useBlogStore } from "@/utils/stores/blogStore";

// SSG: Generate static pages for all blog posts
export async function generateStaticParams() {
  const blogs = mockData.blogs;

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog post (SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { getBlogsBySlug } = useBlogStore.getState();
    const response = await getBlogsBySlug(`/blogs/${params.slug}`);

    if (!response.data?.blog) {
      return {
        title: "Bài viết không tồn tại - VietAuEdu",
      };
    }

    const blog = response.data.blog as IBlog;

    return {
      title: `${blog.title} - VietAuEdu Blog`,
      description: blog.excerpt,
      keywords: `${blog.category}, du học, VietAuEdu, ${blog.title}`,
      openGraph: {
        title: blog.title,
        description: blog.excerpt,
        type: "article",
        publishedTime: blog.publishedAt,
        authors: [blog.author],
        images: [blog.imageUrl],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title,
        description: blog.excerpt,
        images: [blog.imageUrl],
      },
    };
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
    // Fallback to default metadata if API call fails
    return {
      title: "Bài viết - VietAuEdu Blog",
      description: "Khám phá các bài viết về du học và học bổng tại VietAuEdu",
    };
  }
}

export default function BlogDetailPage() {
  const { getBlogsBySlug } = useBlogStore();

  const params = useParams();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const programId = params.slug as string;
      const response = await getBlogsBySlug(programId);
      const data = response.data?.blog;
      setBlog(data || null);
      setIsLoading(false);
    };

    fetchData();
  }, [getBlogsBySlug, params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!blog) {
    notFound();
  }

  // Get related posts from same category
  const relatedPosts = mockData.blogs
    .filter((p) => p.category === blog.category && p.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header - SSR for SEO */}
      <section className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
        <div className="container mx-auto px-4 py-6">
          <Link href="/blogs">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-3">
            <Card>
              <div className="relative">
                <Image
                  src={blog.imageUrl}
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
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {blog.title}
                </h1>

                {/* Excerpt */}
                <div className="text-lg text-gray-600 dark:text-gray-300 mb-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border-l-4 border-primary">
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

                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6 space-y-2">
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
                    <p className="text-gray-700 dark:text-gray-300">
                      Nên chuẩn bị hồ sơ trước ít nhất 3 tháng so với thời điểm
                      dự kiến nhập học. Điều này giúp bạn có đủ thời gian để bổ
                      sung các giấy tờ còn thiếu nếu cần.
                    </p>
                  </div>
                </div>

                {/* Social Actions - Client Component */}
                <BlogInteractions initialLikes={42} blogTitle={blog.title} />
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
                        href={`/blogs/${relatedPost.slug}`}
                      >
                        <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <Image
                            src={relatedPost.imageUrl}
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
