// portfolioData.ts
export type PortfolioItem = {
  id: string;
  title: string;
  slug?: string;
  category?: string;
  status?: string;
  excerpt: string;
  imageSrc: string[];
  alt?: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: "rhapsody-in-walnut",
    title: "Rhapsody in Walnut",
    slug: "rhapsody-in-walnut",
    category: "Custom Residential",
    status: "New",
    excerpt:
      "A modern update brings this traditional, historic house into the 21st century with a balanced and approachable eclectic style.",

    imageSrc: [
      "/images/portfolio/imgpofrocard.jpg",
      "/images/portfolio/imgpofrocard.jpg",
      "/images/portfolio/imgpofrocard.jpg",
      "/images/portfolio/imgpofrocard.jpg",
    ],
    alt: "Rhapsody in Walnut – Custom Home Remodel",
  },
  {
    id: "queen-anne-commercial-conversion",
    title: "Queen Anne Commercial Conversion",
    slug: "queen-anne-commercial-conversion",
    category: "Adaptive Reuse",
    status: "Under Construction",
    excerpt:
      "A commercial-to-residential conversion transforming an unassuming building into a sustainable and vibrant multifamily community.",

    imageSrc: [
      "/images/portfolio/imgpofrocard1.jpg",
      "/images/portfolio/imgpofrocard1.1.jpg",
      "/images/portfolio/imgpofrocard1.2.jpg",
      "/images/portfolio/imgpofrocard1.3.jpg",
    ],
    alt: "Queen Anne Commercial Conversion",
  },
  {
    id: "landscape-at-makai-house",
    title: "Landscape at Makai House",
    slug: "landscape-at-makai-house",
    category: "Landscape Architecture",
    status: "New",
    excerpt:
      "A Japanese-inspired garden and an environmentally responsive shoreline ecosystem on a waterfront property.",

    imageSrc: [
      "/images/portfolio/imgpofrocard2.jpg",
      "/images/portfolio/imgpofrocard2.1.jpg",
      "/images/portfolio/imgpofrocard2.2.jpg",
      "/images/portfolio/imgpofrocard2.3.jpg",
    ],
    alt: "Landscape at Makai House",
  },
  {
    id: "shophouse-meets-brownstone",
    title: "Shophouse Meets Brownstone",
    slug: "shophouse-meets-brownstone",
    category: "Mixed‑Use / Concept",
    status: "On the Boards",
    excerpt:
      "Converting to mixed‑use to maximize an urban lot — traditional home meets street‑level café and brownstone.",

    imageSrc: [
      "/images/portfolio/imgpofrocard3.jpg",
      "/images/portfolio/imgpofrocard3.jpg",
      "/images/portfolio/imgpofrocard3.jpg",
      "/images/portfolio/imgpofrocard3.jpg",
    ],
    alt: "Shophouse Meets Brownstone",
  },
  {
    id: "mount-baker-historic-craftsman",
    title: "Mount Baker Historic Craftsman",
    slug: "mount-baker-historic-craftsman",
    category: "Custom Residential / Remodel",
    status: "Featured",
    excerpt:
      "A classic Craftsman home with great bones, remodeled and restored to take it into its next 100 years, adapted for modern living.",

    imageSrc: [
      "/images/portfolio/imgpofrocard4.jpg",
      "/images/portfolio/imgpofrocard4.jpg",
      "/images/portfolio/imgpofrocard4.jpg",
      "/images/portfolio/imgpofrocard4.jpg",
    ],
    alt: "Mount Baker Historic Craftsman",
  },
  {
    id: "matthias-academy",
    title: "Matthias Academy",
    slug: "matthias-academy",
    category: "Community & Civic",
    status: "On the Boards",
    excerpt:
      "Feasibility & conceptual design for a multipurpose campus providing housing, education, employment, and community for adults with special needs.",

    imageSrc: [
      "/images/portfolio/imgpofrocard5.jpg",
      "/images/portfolio/imgpofrocard5.jpg",
      "/images/portfolio/imgpofrocard5.jpg",
      "/images/portfolio/imgpofrocard5.jpg",
    ],
    alt: "Matthias Academy",
  },
  {
    id: "judkins-park-jewelbox-victorian",
    title: "Judkins Park Jewelbox Victorian",
    slug: "judkins-park-jewelbox-victorian",
    category: "Residential Interiors / Restoration",
    status: "Featured",
    excerpt:
      "Rescuing and revitalizing a damaged historic home with creative colors and a surprising blend of styles.",

    imageSrc: [
      "/images/portfolio/imgpofrocard8.jpg",
      "/images/portfolio/imgpofrocard8.jpg",
      "/images/portfolio/imgpofrocard8.jpg",
      "/images/portfolio/imgpofrocard8.jpg",
    ],
    alt: "Judkins Park Jewelbox Victorian",
  },
  {
    id: "stellar-apartments",
    title: "Stellar Apartments",
    slug: "stellar-apartments",
    category: "Multifamily Housing",
    status: "New Images",
    excerpt:
      "A distinctive multifamily building responding to its transit‑oriented location without blending in with the crowd.",

    imageSrc: [
      "/images/portfolio/imgpofrocard7.jpg",
      "/images/portfolio/imgpofrocard7.jpg",
      "/images/portfolio/imgpofrocard7.jpg",
      "/images/portfolio/imgpofrocard7.jpg",
    ],
    alt: "Stellar Apartments",
  },
  {
    id: "laurelhurst-storybook-residence",
    title: "Laurelhurst Storybook Residence",
    slug: "laurelhurst-storybook-residence",
    category: "Custom Residential",
    status: "Featured",
    excerpt:
      "A Tudor‑style estate brimming with custom details inside and out, designed by a fully‑integrated, multidisciplinary team.",

    imageSrc: [
      "/images/portfolio/imgpofrocard6.jpg",
      "/images/portfolio/imgpofrocard6.jpg",
      "/images/portfolio/imgpofrocard6.jpg",
      "/images/portfolio/imgpofrocard6.jpg",
    ],
    alt: "Laurelhurst Storybook Residence",
  },
];

export { portfolioData };
