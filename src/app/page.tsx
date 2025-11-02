import AboutusSection from "@/components/Home/AboutusSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import CleverSolutions from "@/components/Home/CleverSolutions";
import CollaborationSection from "@/components/Home/CollaborationSection";
import HeroHomeSection from "@/components/Home/HeroHomeSection";

export default function HomePage() {
  return (
    <>
      <HeroHomeSection />
      <CertificationsSection />
      <CleverSolutions />
      <CollaborationSection />
      <AboutusSection />
    </>
  );
}
