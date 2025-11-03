"use client";
import React from "react";
import { useRouter } from "next/navigation";

type CleverButtonProps = {
  disabled?: boolean;
  title: string; // متن دکمه
  link?: string; // آدرس لینک برای ناوبری
  onClick?: () => void; // تابع برای اکشن خاص
  className?: string; // کلاس اضافه برای استایل دلخواه
};

const Button: React.FC<CleverButtonProps> = ({
  title,
  link,
  onClick,
  disabled,
  className = "",
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`bg-white border !border-green hover:bg-green text-green  hover:text-white font-semibold py-2 px-5 rounded-sm transition-colors duration-300 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
