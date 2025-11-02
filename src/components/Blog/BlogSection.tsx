'use client'
import BlogCard from "@/components/Blog/BlogCard";
import { mockBlogPosts } from "../../../mockData/mockBlogPosts";


export default function BlogSection() {
  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      {mockBlogPosts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </section>
  );
}
