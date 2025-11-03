"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeroBox from "./HeroBox";

const images = [
  "/images/heroimg1.jpg",
  "/images/heroimg2.jpg",
  "/images/heroimg3.jpg",
  "/images/heroimg4.jpg",
  "/images/heroimg5.jpg",
  "/images/heroimg6.jpg",
];

export default function HerHomeoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // تغییر عکس هر 5 ثانیه
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] md:h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image
            src={src}
            alt={`تصویر شماره ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* لایه‌ی تیره */}
      <div className="absolute inset-0 bg-black/30 z-30" />

      {/* متن روی تصویر */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-40">
        <HeroBox />
      </div>
    </section>
  );
}
