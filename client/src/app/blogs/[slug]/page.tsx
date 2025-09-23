import { notFound } from "next/navigation";
import { Metadata } from "next";
import { useBlogStore } from "@/utils/stores/blogStore";
import BlogDetailClient from "../../../components/common/blogs/BlogDetailClient";

// SSG: Generate static pages for all blog posts
export async function generateStaticParams() {
  const { blogs } = useBlogStore.getState();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog post (SEO)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const { getBlogsBySlug } = useBlogStore.getState();
    const response = await getBlogsBySlug(`/blogs/${resolvedParams.slug}`);

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

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const { getBlogsBySlug } = useBlogStore.getState();
  const response = await getBlogsBySlug(`/blogs/${resolvedParams.slug}`);
  const blog = response.data?.blog;

  if (!blog) {
    notFound();
  }

  return <BlogDetailClient blog={blog as IBlog} />;
}