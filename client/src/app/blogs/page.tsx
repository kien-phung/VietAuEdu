"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Calendar, User, TrendingUp } from "lucide-react";
import BlogCard from "@/components/common/BlogCard";
import { mockData } from "@/utils/services/mockData";
import { useSystemStore } from "@/utils/stores/systemStore";
import Image from "next/image";

const categories = [
  { value: "", label: "Tất cả danh mục" },
  { value: "Visa & Thủ tục", label: "Visa & Thủ tục" },
  { value: "Chương trình học", label: "Chương trình học" },
  { value: "Chi phí du học", label: "Chi phí du học" },
  { value: "Học bổng", label: "Học bổng" },
  { value: "Kinh nghiệm", label: "Kinh nghiệm" },
  { value: "Hồ sơ du học", label: "Hồ sơ du học" },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<IBlog[]>([]);
  const [featuredPost, setFeaturedPost] = useState<IBlog | null>(null);
  const { blogs, handleSetBlogs } = useSystemStore();

  useEffect(() => {
    if (blogs.length === 0) {
      handleSetBlogs(mockData.blogs);
    }
  }, [blogs.length, handleSetBlogs]);

  useEffect(() => {
    if (blogs.length > 0) {
      setFeaturedPost(blogs[0]);

      let filtered = blogs;

      if (searchTerm) {
        filtered = filtered.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter(
          (post) => post.category === selectedCategory
        );
      }

      setFilteredPosts(filtered);
    }
  }, [blogs, searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Tin Tức & Blog
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cập nhật thông tin mới nhất về du học và chia sẻ kinh nghiệm từ
              các chuyên gia
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white dark:bg-gray-800 transition-colors">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-8">
              <TrendingUp className="w-5 h-5 text-primary mr-2" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Bài viết nổi bật
              </h2>
            </div>

            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={500}
                    height={300}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(featuredPost.publishedAt).toLocaleDateString(
                          "vi-VN"
                        )}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <Button className="self-start">Đọc thêm</Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700 transition-colors">
        <div className="container mx-auto px-4">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>

                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Button variant="outline" onClick={clearFilters}>
                  Xóa bộ lọc
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-300">
              Tìm thấy{" "}
              <span className="font-semibold text-primary">
                {filteredPosts.length}
              </span>{" "}
              bài viết
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Không tìm thấy bài viết nào
              </h3>
              <p className="text-gray-600 mb-6">
                Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm
              </p>
              <Button onClick={clearFilters}>Xóa tất cả bộ lọc</Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
