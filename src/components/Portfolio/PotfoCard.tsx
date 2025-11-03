import React from "react";
import Image from "next/image";

type PofroCardProps = {
  imageSrc: string;
  alt?: string;
  title: string;
  description: string;
  className?: string;
};

const PotfoCard: React.FC<PofroCardProps> = React.memo(
  ({ imageSrc, alt = "card image", title, description, className = "" }) => {
    return (
      <div
        className={`w-[350px] h-[400px] shadow-2xl mx-auto overflow-hidden bg-gray ${className}`}
      >
        {/* بخش تصویر */}
        <div className="relative w-full h-1/2">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover"
            priority={false}
            loading="lazy"
          />
        </div>

        {/* بخش متن */}
        <div className="p-4 flex text-left flex-col gap-2 text-white">
          <h3 className="text-lg font-semibold text-green">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }
);

export default PotfoCard;
