"use client";

import React from "react";
import PofroCard from "./PofroCard";
import { portfolioData, PortfolioItem } from "../../../mockData/portfodata";
import Link from "next/link";

const PortfolioFilterTabs: React.FC = () => {
  return (
    <section className="py-12 w-[90%] mx-auto">
      {/* شبکه کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {portfolioData.map((item: PortfolioItem) => (
          <Link
            key={item.id}
            href={`/portfolio/${item.slug}`}
            className="block w-full hover:opacity-90 transition"
          >
            <PofroCard
              imageSrc={item.imageSrc[0]}
              alt={item.alt}
              title={item.title}
              description={item.excerpt}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PortfolioFilterTabs;
