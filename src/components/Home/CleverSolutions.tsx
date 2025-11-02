import ShowcaseSection from "@/share/ShowcaseSection";
import cardsData from "../../../mockData/carddata";
import { cleverContent } from "@/static content/CleverContent";


export default function CleverSolutions() {
  return (
    <ShowcaseSection
      title={cleverContent.title}
      subtitle={cleverContent.subtitle}
      paragraph1={cleverContent.paragraph1}
      paragraph2={cleverContent.paragraph2}
      buttonTitle={cleverContent.buttonTitle}
      cardsData={cardsData}
    />
  );
}
