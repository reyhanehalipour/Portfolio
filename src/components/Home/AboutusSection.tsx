import ShowcaseSection from '@/share/ShowcaseSection'
import aboutdata from '../../../mockData/aboutdata'
import { AboutusContent } from '@/static content/AboutusContent'



export default function AboutusSection() {
  return (
    <section className='bg-lightapricot h-[30%] w-full'>
       <ShowcaseSection
        title={ AboutusContent.title}
        subtitle={ AboutusContent.subtitle}
        paragraph1={ AboutusContent.paragraph1}
        paragraph2={ AboutusContent.paragraph2}
        buttonTitle={ AboutusContent.buttonTitle}
        cardsData={aboutdata}
      />
    </section>
  )
}
