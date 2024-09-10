import { getData } from '@/services/wordpress'
import AppBar from "@/ui/app-bar";
import parse from 'html-react-parser'
import { fontSecondary } from "@/ui/fonts";
import Image from 'next/image'
import WhyUs from "@/ui/why-us";
import Footer from "@/ui/footer";

export default async function AboutUs() {
    const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office'
    const sectionsUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/inne_sekcje'
    const whyUsUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/dlaczego_my'

    const sections = await getData(sectionsUrl, "", false, true)
    const aboutUs = sections.find( item => item.slug === "o-nas")
    const contactUs = sections.find( item => item.slug === "kontakt")
    const ourTarget = sections.find( item => item.slug === "dla-kogo-jestemy")
    const whyUs = await getData(whyUsUrl, "", false, true )
    const office = await getData(officeUrl, 'gdynia', false, true)

    const titleClasses = 'mx-auto mb-20 text-5xl xl:text-8xl px-8 py-12 w-full bg-stone-900 text-center uppercase'
    const headingClasses = 'lg:mx-auto md:my-12 text-4xl lg:text-6xl lg:w-3/4 xl:text-center uppercase'

    return (
        <>
            <header className="p-8">
                <AppBar />
            </header>
            <main>
                <h1 className={titleClasses}>O nas</h1>
                <div className="w-4/6 mx-auto">
                    <div className="flex flex-wrap gap-16 my-12">
                        <p className={`max-w-[480px] mx-auto text-amber-600 text-xl ${fontSecondary.className}`}>{info.meta.company_short_desc}</p>
                        <p className="max-w-[480px] mx-auto">{info.meta.company_full_desc}</p>
                    </div>
                    <h2 className={headingClasses}>Nasza misja</h2>
                    <p className="max-w-[480px] mx-auto text-center">{info.meta.company_mission}</p>
                    <Image className="mx-auto" src="/ill1.webp" width="500" height="433" alt="" />
                    <h2 id="uslugi" className={headingClasses}>Nasze usługi</h2>
                    <div className="flex flex-wrap bg-mall rounded-tr-full bg-fixed bg-no-repeat">
                        {services.map(item => {
                            return (
                                <div className="my-12" key={item.id}>
                                    <h3 className="text-3xl text-amber-600">{item.title.rendered}</h3>
                                    <div className="service my-4 xl:w-3/6">{parse(item.content.rendered)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <WhyUs whyUsList={whyUs} section={aboutUs} />
                <div className="w-4/6 mx-auto">
                    <h2 className={headingClasses}>{contactUs.meta.heading}</h2>                    
                    <div className="max-w-[480px] mx-auto text-center">{parse(contactUs.content.rendered)}</div>
                    <p className={`my-12 mx-auto text-center text-amber-600 text-xl ${fontSecondary.className}`}>{contactUs.meta.subheading}</p>
                </div>
                <div className="w-4/6 mx-auto my-12">
                    <h2 className={headingClasses}>{ourTarget.title.rendered}</h2>                    
                    <div className="max-w-[480px] mx-auto text-center">
                        {parse(ourTarget.content.rendered)}
                    </div>
                </div>
            </main>
            <Footer info={office} />
        </>
        
    )
}