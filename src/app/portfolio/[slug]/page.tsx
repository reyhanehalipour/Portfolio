import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";
import { portfolioData } from "../../../../mockData/portfodata";


interface PortfolioDetailPageProps {
  params: Promise<{ slug: string }>;
}

const PortfolioDetailPage = async ({ params }: PortfolioDetailPageProps) => {
  const { slug } = await params;

  const project = portfolioData.find((item) => item.slug === slug);

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <section className="w-[90%]  flex flex-col items-center justify-center mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <PortfolioCarousel images={project.imageSrc} alt={project.alt} />
      <p className="text-gray-700">{project.excerpt}</p>
   
    </section>
  );
};

export default PortfolioDetailPage;
