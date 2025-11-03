// portfolioData.ts
export type PortfolioItem = {
  id: string;
  title: string;
  slug?: string;
  category?: string;
  status?: string;
  excerpt: string;
  desc: string;
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
    desc: "This Seattle home had great bones but, despite its historic charm, it didn’t match its owners’ more eclectic style. They came to us looking for a way to preserve the home’s shell and celebrate the traditional features they did like, while creating a more modern interior and fine-tuning their exterior spaces Seeking an update that made the home feel more like a true representation of their family, they were willing to push the envelope to achieve it. They wanted colorful yet tasteful, playful yet Armed with the knowledge that the homeowners also had many personally significant elements such as art, accessories, and even pets, they wanted to fit into the design, we knew we’d need to strike a balance between exploring the textures, colors, and shapes that inspired them, and creating a “blank enough” slate that would allow them to add personality from their own collection. ",

    imageSrc: [
      "/images/portfolio/imgpofrocard.webp",
      "/images/portfolio/imgpofrocardd1.webp",
      "/images/portfolio/imgpofrocardd2.webp",
      "/images/portfolio/imgpofrocardd3.webp",
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
      "/images/portfolio/imgpofrocard1.webp",
      "/images/portfolio/imgpofrocard1.1.webp",
      "/images/portfolio/imgpofrocard1.2.webp",
      "/images/portfolio/imgpofrocard1.3.webp",
    ],
    alt: "Queen Anne Commercial Conversion",
    desc:"Seattle’s first post-pandemic era office-to-residential conversion, this milestone project seeks to transform a simple commercial office building in the Lower Queen Anne neighborhood into a vibrant multifamily community.This project represents the culmination of a dedicated developer’s vision, close collaboration with city officials and community advocates, and a needle-in-a-haystack ’80s office building. It is a testament to what can be achieved through out-of-the-box thinking by an experienced project team, and a willingness to embrace an uncommon approach to urban development."
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
      "/images/portfolio/imgpofrocard2.webp",
      "/images/portfolio/imgpofrocard2.1.webp",
      "/images/portfolio/imgpofrocard2.2.webp",
      "/images/portfolio/imgpofrocard2.3.webp",
    ],
    alt: "Landscape at Makai House",
    desc:"After rebuilding their home in a modern, Japanese-style, this homeowner wished to update the surrounding landscape in a complementary style, highlighting the home’s geometry and paying tribute to its location along the shoreline of Puget Sound. As a whole, the exterior spaces presented a variety of challenges and opportunities.With a number of client goals and a challenging site, the success of this exterior refresh came down to a balance between the homeowner’s strong vision, a design that prioritized functional spaces, and adherence to the strict requirements for both a steeply sloped and shoreline site."
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
      "/images/portfolio/imgpofrocard3.webp",
      "/images/portfolio/imgpofrocard3.webp",
      "/images/portfolio/imgpofrocard3.webp",
      "/images/portfolio/imgpofrocard3.webp",
    ],
    alt: "Shophouse Meets Brownstone",
    desc:"Situated on a busy street mostly populated with dense, mixed-use buildings — apartments above, commercial spaces below — these Capitol Hill homeowners knew their 1905 Foursquare-style house could offer more to the community. Modeled after the classic typology of the “Shophouse,” the project will lift the old home to gain head-height for the home’s former basement, now to be transformed into a street-level café activating the sidewalk.A brownstone connected to the south side of the original house, though appearing to be a new, discrete building, is actually an addition to the home, creating more space without distorting the home’s historic form."
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
      "/images/portfolio/imgpofrocard4.webp",
      "/images/portfolio/imgpofrocard4.webp",
      "/images/portfolio/imgpofrocard4.webp",
      "/images/portfolio/imgpofrocard4.webp",
    ],
    alt: "Mount Baker Historic Craftsman",
    desc:"These homeowners were excited when they found a gorgeous Craftsman with historic charm in Seattle’s Mount Baker neighborhood, not far from Lake Washington. On the outside, it had everything: plenty of open space for their growing family to enjoy and a classic street presentation. But inside, a century of use and remodels pioneered by former owners left a lot to be desired."
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
      "/images/portfolio/imgpofrocard5.webp",
      "/images/portfolio/imgpofrocard5.webp",
      "/images/portfolio/imgpofrocard5.webp",
      "/images/portfolio/imgpofrocard5.webp",
    ],
    alt: "Matthias Academy",
    desc:"These opportunities come with various challenges. Multiple jurisdictions, overlapping zoning districts, environmental designations, and a mix of institutional, commercial, and residential programming present complex project requirements The current focus is on feasibility, conceptual design, and community and stakeholder management strategies to help Matthias Academy define the path forward despite a lack of precedent The current focus is on feasibility, conceptual design, and community and stakeholder management strategies to help Matthias Academy define the path forward despite a lack of precedent."
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
      "/images/portfolio/imgpofrocard8.webp",
      "/images/portfolio/imgpofrocard8.webp",
      "/images/portfolio/imgpofrocard8.webp",
      "/images/portfolio/imgpofrocard8.webp",
    ],
    alt: "Judkins Park Jewelbox Victorian",
    desc:"After their vintage Victorian home was damaged in a fire, these homeowners had no option but to rebuild. It was difficult to see their home of nearly twenty years with so much damage, but, choosing optimism, they decided on a path forward. They would not only restore the home but elevate it, with customizations that would create the space of their dreams"
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
      "/images/portfolio/imgpofrocard7.webp",
      "/images/portfolio/imgpofrocard7.webp",
      "/images/portfolio/imgpofrocard7.webp",
      "/images/portfolio/imgpofrocard7.webp",
    ],
    alt: "Stellar Apartments",
    desc:"Located at the intersection of Dexter Avenue North and Lee Street, this elegant 160-unit apartment building stands out for its contrast to the sea of brightly colored buildings composing Seattle’s South Lake Union neighborhood. The building was developed on one of the few remaining infill lots along Dexter Avenue North, just as the neighborhood transitions to Westlake With both architecture and landscape architecture services provided in-house as an integrated design team from project launch, the result is a holistic, beautiful pedestrian and resident experience seamlessly integrating indoor and outdoor spaces."
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
      "/images/portfolio/imgpofrocard6.webp",
      "/images/portfolio/imgpofrocard6.webp",
      "/images/portfolio/imgpofrocard6.webp",
      "/images/portfolio/imgpofrocard6.webp",
    ],
    alt: "Laurelhurst Storybook Residence",
    desc:"Raising three kids from the cradle to their college send-offs can cause a lot of wear and tear on an old home. And when you factor in the grandchildren that eventually come to tromp down the same halls as their parents, that loving use starts to add up After such an existence, this Tudor home on an architecturally significant street in Seattle was overdue for some TLC, inside and out. But rather than start from scratch, as a beloved home with a long family history, the homeowners were dedicated to its revitalization in order to bring back the beauty and details lost to the wear and tear of time"
  },
];

export { portfolioData };
