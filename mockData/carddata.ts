// src/data/cardsData.ts
export type CardItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string; 
  alt?: string;
};

const cardsData: CardItem[] = [
  {
    id: "custom-res",
    title: "Custom Residential",
    description:
      "We offer custom residential architecture, interior design, and landscape architecture services for new construction and remodels.",
    imageSrc: "/images/imgcard1.jpg",
    alt: "Custom Residential",
  },
  {
    id: "multifamily",
    title: "Multifamily Housing",
    description:
      "Design for mixed-use developments, apartment and condo buildings, and townhomes with a focus on community and livability.",
    imageSrc: "/images/imgcard2.jpg",
    alt: "Multifamily Housing",
  },
  {
    id: "commercial",
    title: "Commercial Design",
    description:
      "Hospitality, retail and office interiors that balance brand, function, and delight for users and visitors.",
    imageSrc: "/images/imgcard3.jpg",
    alt: "Commercial Design",
  },
  {
    id: "community",
    title: "Community Projects",
    description:
      "Master-planning, campus design for non-profits, and public parks that support people-first outdoor spaces.",
    imageSrc: "/images/imgcard4.jpg",
    alt: "Community Projects",
  },
];

export default cardsData;
