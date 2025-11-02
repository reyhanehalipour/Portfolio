export type aboutdata = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
};

const aboutdata: aboutdata[] = [
  {
    id: "passive-house",
    title: "about",
    description:
      "Board & Vellum is composed of a close-knit team of creative professionals, collaborating on architecture, interior design, and landscape architecture. We believe engaging our design teams should not only bring success to your project, but that the experience should be a delight.",

    imageSrc: "/images/about1.jpg",
    alt: "Passive House logo",
  },
  {
    id: "nglcc",
    title: "Sustainability",
    description:
      "Our team has sustainability credentials and experience in a variety of green building certifications, which we leverage to inform and elevate all our projects, whether or not a project seeks certification.",
    imageSrc: "/images/about2.jpg",
    alt: "NGLCC logo",
  },
];

export default aboutdata;
