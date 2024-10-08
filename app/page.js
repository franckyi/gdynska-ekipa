import Link from 'next/link';
import { getData, getPosts } from '@/services/wordpress';
import AppBar from "@/ui/app-bar";
import Slides from "@/ui/slides/slides";
import WorksGallery from "@/ui/works-gallery";
import Workflow from "@/ui/workflow";
import AboutUs from "@/ui/about-us";
import Team from "@/ui/team";
import CompanyValues from "@/ui/company-values";
import Stats from "@/ui/stats";
import BrandsCarousel from "@/ui/brands-carousel/brands-carousel";
import PostList from "@/ui/posts/post-list";
import Footer from "@/ui/footer";

export default async function Home() {
  const sectionsUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/inne_sekcje'
  const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office'
  const posts = await getPosts()
  const sections = await getData(sectionsUrl, "", false, true)
  const workflow = sections.find( item => item.slug === "proces-wykonczenia")
  const aboutUs = sections.find( item => item.slug === "o-nas")
  const team = sections.find( item => item.slug === "ekipa")
  const companyValues = sections.find( item => item.slug === "o-firmy")
  const office = await getData(officeUrl, 'gdynia', false, true)

  const heading = "Artykuły pisane właśnie dla Ciebie";
  const introText = "Zależy nam, aby Ci pomóc naszymi wskazówkami. Napisaliśmy przydatne artykuły na każdą sytuację.";

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
        <Team team={team} />
        <CompanyValues section={companyValues} />
        <Stats />
        <BrandsCarousel />
        <PostList posts={posts} limit={3} heading={heading} introText={introText} />
      </main>
      <Footer info={office} />
    </>
  );
}
