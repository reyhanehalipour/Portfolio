import PortfolioFilterTabs from "@/components/Portfolio/PortfolioFilterTabs";
import HeroSection from "@/share/HeroSection";

export default function page() {
  return (
    <>
      <HeroSection
        title={"portfolio"}
        backgroundImage={"/images/portfolio/bgportfo.webP"}
        description="A diversity of experience fueling creative solutions for projects large and small.
From the big picture to the intimate details, our multidisciplinary studios of architects, interior designers, and landscape architects design projects you and your community will be proud to call your own."
      />
      <PortfolioFilterTabs />
    </>
  );
}
