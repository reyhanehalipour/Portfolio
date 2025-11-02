import React from "react";
import Image from "next/image";

type CertificBoxProps = {
  description: string; // توضیح یا متن زیر عنوان
  imageSrc: string; // مسیر عکس
  alt?: string; // متن جایگزین عکس (اختیاری)
  className?: string; // برای استایل سفارشی اختیاری
};

const CertificBox: React.FC<CertificBoxProps> = ({
  description,
  imageSrc,
  alt = "certificate image",
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col  text-white items-center text-center gap-3 p-5 rounded-xl  transition-shadow duration-300 ${className}`}
    >
      <div className="w-20 h-20 relative">
        <Image src={imageSrc} alt={alt} fill className="object-contain" />
      </div>

      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default CertificBox;
