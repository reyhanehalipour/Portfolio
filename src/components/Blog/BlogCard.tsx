import React from "react";
import Image from "next/image";
import Button from "@/share/Button";

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  onReadMore?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  excerpt,
  onReadMore,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* متن */}
      <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{excerpt}</p>
        </div>
        <Button
          title="Read More"
          onClick={onReadMore}
          className="self-start  hover:bg-green text-green px-5 py-2 rounded-full transition-colors"
        />
      </div>
      {/* تصویر */}
      <div className="w-full sm:w-1/2 h-56 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default BlogCard;
