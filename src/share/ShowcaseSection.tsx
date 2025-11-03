import Button from "@/share/Button";
import CleverCard from "@/components/Home/CleverCard";
import React from "react";
import { CardItem } from "../../mockData/carddata";

type ShowcaseSectionProps = {
  title: string; // تیتر اصلی
  subtitle: string; // توضیح کوتاه زیر تیتر
  paragraph1: string; // پاراگراف سمت چپ
  paragraph2: string; // پاراگراف سمت راست
  buttonTitle: string; // متن دکمه
  cardsCount?: number; // تعداد کارت‌ها (پیش‌فرض: 4)
  cardsData?: CardItem[];
};

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  subtitle,
  paragraph1,
  paragraph2,
  buttonTitle,

  cardsData = [],
}) => {
  return (
    <section className="py-10  mx-10  text-left flex flex-col gap-8">
      {/* عنوان بخش */}
      <h2 className="text-green w-[90%] font-bold mx-10 text-3xl leading-snug">{title}</h2>

      {/* توضیح کوتاه زیر عنوان */}
      <p className="font-thin  w-[90%] text-2xl">{subtitle}</p>

      {/* محتوای بخش */}
      <div className="grid sm:grid-cols-2 justify-items-center mx-auto gap-4">
        {/* دو پاراگراف توضیح */}
        <p className="w-3/4">{paragraph1}</p>
        <p className="w-3/4">{paragraph2}</p>

        {/* کارت‌ها */}
        {cardsData.map((card) => (
          <CleverCard
            key={card.id}
            imageSrc={card.imageSrc}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}

        {/* دکمه */}
        <div className="col-span-2 mt-4">
          <Button title={buttonTitle} />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
