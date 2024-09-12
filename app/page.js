import AppBar from "@/ui/app-bar";
import Slides from "@/ui/slides/slides";
import { getData } from '@/services/wordpress'
import WorksGallery from "@/ui/works-gallery";
import Workflow from "@/ui/workflow";
import AboutUs from "@/ui/about-us";
import Team from "@/ui/team";
import CompanyValues from "@/ui/company-values";
import Stats from "@/ui/stats";
import BrandsCarousel from "@/ui/brands-carousel/brands-carousel";
import Footer from "@/ui/footer";

export default async function Home() {
  const sectionsUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/inne_sekcje'
  const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office'

  const sections = await getData(sectionsUrl, "", false, true)
  const workflow = sections.find( item => item.slug === "proces-wykonczenia")
  const aboutUs = sections.find( item => item.slug === "o-nas")
  const team = sections.find( item => item.slug === "ekipa")
  const companyValues = sections.find( item => item.slug === "o-firmy")
  const office = await getData(officeUrl, 'gdynia', false, true)

  return (
    <>
      <header className="md:p-8 md:h-screen">
        <AppBar info={office} />
        <Slides />
      </header>
      <main>
        <WorksGallery />
        <Workflow section={workflow} />
        <AboutUs btnText={aboutUs.meta.button_text} content={aboutUs} />
        <Team content={team} />
        <CompanyValues section={companyValues} />
        <Stats />
        <BrandsCarousel />
      </main>
      <Footer info={office} />
    </>
  );
}
