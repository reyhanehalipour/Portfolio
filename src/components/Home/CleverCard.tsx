import React from "react";
import Image from "next/image";

type CleverCardProps = {
  imageSrc: string;      // مسیر عکس
  alt?: string;          // متن جایگزین عکس
  title: string;         // عنوان کارت
  description: string;   // توضیحات زیر عنوان
  className?: string;    // استایل اختیاری
};

const CleverCard: React.FC<CleverCardProps> = ({
  imageSrc,
  alt = "card image",
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`w-3/4 h-[400px] shadow-2xl rounded-lg overflow-hidden bg-white ${className}`}
    >
      {/* بخش تصویر */}
      <div className="relative w-full h-1/2">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* بخش متن */}
      <div className="p-4 flex flex-col gap-2 text-gray-800">
        <h3 className="text-lg font-semibold text-green-600">{title}</h3>
        <p className="text-sm leading-relaxed overflow-y-hidden">{description}</p>
      </div>
    </div>
  );
};

export default CleverCard;
