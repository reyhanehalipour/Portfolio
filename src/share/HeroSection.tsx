"use client";
import React from "react";
import Image from "next/image";

interface BlurredHeaderProps {
  title: string;
  description?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<BlurredHeaderProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <section className="relative w-full h-[50vh] md:h-[80vh] ">
      {/* تصویر پس‌زمینه */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100 z-20">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover backdrop-blur-sm  "
          priority
        />
      </div>
      {/* متن روی تصویر */}
      <div className="absolute inset-0 flex flex-col justify-center items-end text-left  text-white z-40 px-10 max-w-3xl">
        <h1 className="text-3xl md:text-6xl  text-left font-bold mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-base md:text-xl text-gray-200">{description}</p>
        )}
      </div>

      {/* لایه‌ی تار/تیره */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-50" />
    </section>
  );
};

export default HeroSection;
