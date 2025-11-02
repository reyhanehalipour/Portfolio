"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface PortfolioCarouselProps {
  images: string[];
  alt?: string;
}

const PortfolioCarousel = ({ images, alt }: PortfolioCarouselProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="swiper-pagination  bg-green mt-4"></div>
      </Swiper>

      <div className="flex justify-between mt-2">
        <div className="swiper-button-prev-custom text-green text-3xl cursor-pointer select-none">
          ‹
        </div>
        <div className="swiper-button-next-custom text-green text-3xl cursor-pointer select-none">
          ›
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
