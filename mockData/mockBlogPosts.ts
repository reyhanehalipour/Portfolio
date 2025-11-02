// src/data/mockBlogPosts.ts
export type MockPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  url: string;
  categories?: string[];
  author?: string;
  date?: string;
};

export const mockBlogPosts: MockPost[] = [
  {
    id: "1",
    title: "Choosing the Right Pool for Your Home",
    excerpt:
      "Pools are becoming a more and more popular addition to single-family homes in the PNW. This guide helps homeowners make the right decisions when choosing a pool.",
    image: "/images/blog1.jpg",
    url: "/images/choosing-the-right-pool-for-your-home",
    categories: ["Custom Residential", "Landscape Architecture"],
    author: "Board & Vellum",
    date: "2024-10-01",
  },
  {
    id: "2",
    title: "What Happens After Your Landscape is Installed?",
    excerpt:
      "You hired a landscape architect and installed your design — but it’s not quite what you expected. Here’s what to expect next and how your designer can help.",
    image: "/images/blog2.jpg",
    url: "/images/what-happens-after-your-landscape-is-installed",
    categories: ["Landscape Architecture"],
    author: "Board & Vellum",
    date: "2024-09-15",
  },
  {
    id: "3",
    title: "The Tradeoffs: There is No All-or-Nothing for Sustainable Practice",
    excerpt:
      "There’s no single right answer for sustainable practice. Focus on pragmatic choices that fit your project, budget, and aesthetic goals.",
    image: "/images/blog3.jpg",
    url: "/images/the-tradeoffs-sustainable-practice",
    categories: ["Sustainable Practice"],
    author: "Board & Vellum",
    date: "2024-08-20",
  },
  {
    id: "4",
    title: "The New Normal: A More Sustainable Starting Line",
    excerpt:
      "The 'new normal' for sustainable practice is an opportunity to reflect on what's possible now and plan for a better future in design.",
    image: "/images/blog4.jpg",
    url: "/images/the-new-normal-sustainable-starting-line",
    categories: ["Sustainable Practice"],
    author: "Board & Vellum",
    date: "2024-07-30",
  },
];
