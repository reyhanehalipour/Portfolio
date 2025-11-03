"use client";

import React, { useMemo } from "react";
import PofroCard from "./PotfoCard";
import { portfolioData, PortfolioItem } from "../../../mockData/portfodata";
import Link from "next/link";

const PortfolioFilterTabs: React.FC = () => {
  const portfolioCards = useMemo(() => {
    return portfolioData.map((item: PortfolioItem) => (
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
    ));
  }, []);

  return (
    <section className="py-12 w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {portfolioCards}
      </div>
    </section>
  );
};

export default PortfolioFilterTabs;
