import PortfolioCarousel from "@/components/Portfolio/PortfolioCarousel";
import { portfolioData } from "../../../../mockData/portfodata";
import Image from "next/image";

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
    <section className="w-[90%]   gap-5 flex flex-col items-center justify-center mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4 text-green">{project.title}</h1>
      <PortfolioCarousel images={project.imageSrc} alt={project.alt} />
      <p className="text-gray-700 text-left leading-8">{project.desc}</p>
      {/* گالری عکس‌ها */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl mt-6">
        {project.imageSrc.map((src: string, index: number) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded-xl group"
          >
            <Image
              src={src}
              alt={`${project.alt} ${index + 1}`}
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioDetailPage;
