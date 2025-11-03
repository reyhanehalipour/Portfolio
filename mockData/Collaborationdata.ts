// src/data/certData.ts
export type Collaborationdata = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  alt?: string;
};

const Collaborationdata: Collaborationdata[] = [
  {
    id: "passive-house",
    title: "Architecture",
    description:
      "Across the spectrum from urban to rural, beautiful, well-designed homes and buildings, both public and private, enhance daily life and support vibrant communities",
    imageSrc: "/images/home/Collaboration1.jpg",
    alt: "Passive House logo",
  },
  {
    id: "nglcc",
    title: "Interior Design",
    description:
      "From deeply personal spaces to dynamic shared environments, interior design has immediate and direct impact on the perception of a space, elevating the experience and engaging the senses.",
    imageSrc: "/images/home/CollaborationSection4.jpg",
    alt: "NGLCC logo",
  },
  {
    id: "just-label-2023",
    title: "Sustainable Practice",
    description:
      "Resilient design principles underpin all our work. Global impact or personal wellness, high-tech or passive design — wherever your focus lies, we’ll meet you where you are to curate a tailor-made strategy for your project",
    imageSrc: "/images/home/CollaborationSection2.jpg",
    alt: "JUST label",
  },
  {
    id: "gray-award",
    title: "Landscape Architecture",
    description:
      "From our own backyards to shared communal spaces, to everyone’s public parks, beautiful outdoor spaces resonate with our basic human instincts, revitalizing, comforting, and invigorating us through the experience.",
    imageSrc: "/images/home/CollaborationSection.jpg",
    alt: "Gray Awards",
  },
];

export default Collaborationdata;
