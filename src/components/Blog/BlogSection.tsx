'use client'
import { useMemo } from "react";
import BlogCard from "@/components/Blog/BlogCard";
import { mockBlogPosts } from "../../../mockData/mockBlogPosts";

export default function BlogSection() {
  const blogCards = useMemo(() => {
    return mockBlogPosts.map((post) => <BlogCard key={post.id} {...post} />);
  }, []); 

  return (
    <section className="max-w-5xl mx-auto p-6 space-y-6">
      {blogCards}
    </section>
  );
}
