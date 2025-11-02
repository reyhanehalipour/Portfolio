import ShowcaseSection from "@/share/ShowcaseSection";
import Collaborationdata from "../../../mockData/Collaborationdata";
import { CollaborationContent } from "@/static content/CollaborationContent";

export default function CollaborationSection() {
  return (
    <ShowcaseSection
      title={CollaborationContent.title}
      subtitle={CollaborationContent.subtitle}
      paragraph1={CollaborationContent.paragraph1}
      paragraph2={CollaborationContent.paragraph2}
      buttonTitle={CollaborationContent.buttonTitle}
      cardsData={Collaborationdata}
    />
  );
}

