import BlogSection from "@/components/Blog/BlogSection";
import HeroSection from "@/share/HeroSection";
import React from "react";

export default function page() {
  return (
    <div>
      <HeroSection
        backgroundImage={"/images/home/heroimg2.jpg"}
        title={"Blog"}
        description="Learn more about architecture, interior design, and landscape architecture from the B&V Team.
Our blog is a friendly resource for anyone wondering how to approach their project, seeking answers for their design questions, or simply eager for a peek inside our world."
      />
      <BlogSection />
    </div>
  );
}
