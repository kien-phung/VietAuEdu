"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BlogInteractions from "@/components/common/blogs/BlogInteractions";
import { useBlogStore } from "@/utils/stores/blogStore";

export default function BlogDetailClient({ blog }: { blog: IBlog }) {
  // Get related posts from same category
  const { blogs } = useBlogStore.getState();
  const relatedPosts = blogs
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
                  src={
                    blog.imageUrl && blog.imageUrl.trim() !== ""
                      ? blog.imageUrl
                      : "/images/placeholder-blog.jpg"
                  }
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
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
                    <span>
                      {Math.ceil(blog.content.length / 1000)} phút đọc
                    </span>
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
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
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
                    src="/images/placeholder/author-avatar.jpg"
                    alt={blog.author}
                    className="w-12 h-12 rounded-full object-cover"
                    width={60}
                    height={60}
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder-blog.jpg";
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                      {blog.author}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Chuyên gia tư vấn du học
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Tác giả của bài viết &ldquo;{blog.title}&rdquo; và nhiều bài
                  viết chuyên sâu khác về du học.
                </p>
                <Link href={`/blogs?author=${encodeURIComponent(blog.author)}`}>
                  <Button variant="outline" size="sm" className="w-full">
                    Xem thêm bài viết
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Bài viết liên quan
                </CardTitle>
              </CardHeader>
              <CardContent>
                {relatedPosts.length > 0 ? (
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blogs/${relatedPost.slug}`}
                      >
                        <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                          <Image
                            src={
                              relatedPost.imageUrl ||
                              "/images/placeholder-blog.jpg"
                            }
                            alt={relatedPost.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded-lg"
                            onError={(e) => {
                              e.currentTarget.src =
                                "/images/placeholder-blog.jpg";
                            }}
                          />
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-gray-100 text-sm leading-tight mb-1 line-clamp-2">
                              {relatedPost.title}
                            </h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(
                                relatedPost.publishedAt
                              ).toLocaleDateString("vi-VN")}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                    Không có bài viết liên quan.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Đăng ký nhận tin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Nhận thông tin mới nhất về {blog.category.toLowerCase()} và
                  học bổng
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.currentTarget.email.value;
                    alert(`Đăng ký thành công với email: ${email}!`);
                    e.currentTarget.reset();
                  }}
                  className="space-y-3"
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="Email của bạn"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-800"
                    required
                  />
                  <Button type="submit" className="w-full">
                    Đăng ký
                  </Button>
                </form>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
