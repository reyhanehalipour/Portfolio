// src/data/certData.ts
export type Certificdata = {
  id: string;

  description: string;
  imageSrc: string; // مسیر تصویر، مثلا /images/leed.png
  alt?: string;
};

const certData: Certificdata[] = [
  {
    id: "leed",

    description: "Our team includes LEED-accredited professionals.",
    imageSrc: "/images/Certific2.jpg",
    alt: "LEED logo",
  },
  {
    id: "passive-house",

    description:
      "Achieved a Just label from the International Living Future Institute in 2023.",
    imageSrc: "/images/Certific3.jpg",
    alt: "Passive House logo",
  },
  {
    id: "nglcc",

    description: "Our team includes certified Passive House consultants.",
    imageSrc: "/images/Certific5.jpg",
    alt: "NGLCC logo",
  },
  {
    id: "just-label-2023",

    description: "Our team includes LEED-accredited professionals.",
    imageSrc: "/images/Certific4.jpg",
    alt: "JUST label",
  },
  {
    id: "gray-award",

    description:
      "Honored as a finalist for residential landscape design",
    imageSrc: "/images/Certific.jpg",
    alt: "Gray Awards",
  },
];

export default certData;
