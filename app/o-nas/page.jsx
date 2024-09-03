import AppBar from "@/ui/app-bar";
import parse from 'html-react-parser'
import { fontSecondary } from "@/ui/fonts";
import Image from 'next/image'
import WhyUs from "@/ui/why-us";
import Footer from "@/ui/footer";

export default async function AboutUs() {
    const infoData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office')
    let info = await infoData.json()
    info = info.filter(item => item.slug == "gdynia")[0]

    const servicesData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/uslugi')
    let services = await servicesData.json()
    services = services.sort((a, b) => a.meta.display_order - b.meta.display_order)

    const sectionsData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/inne_sekcje')
    const sections = await sectionsData.json()
    const aboutUs = sections.filter(item => item.slug == "o-nas")[0]
    const contactUs = sections.filter(item => item.slug == "kontakt")[0]
    const ourTarget = sections.filter(item => item.slug == "dla-kogo-jestemy")[0]


    const whyUsData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/dlaczego_my')
    let whyUsList = await whyUsData.json()
    whyUsList = whyUsList.sort((a, b) => a.meta.display_order - b.meta.display_order)

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
                        <p className={`text-amber-600 text-xl ${fontSecondary.className}`}>{info.meta.company_short_desc}</p>
                        <p>{info.meta.company_full_desc}</p>
                    </div>
                    <h2 className={headingClasses}>Nasza misja</h2>
                    <p>{info.meta.company_mission}</p>
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
                <WhyUs whyUsList={whyUsList} section={aboutUs} />
                <div className="w-4/6 mx-auto">
                    <h2 className={headingClasses}>{contactUs.meta.heading}</h2>                    
                    {parse(contactUs.content.rendered)}
                    <p className={`my-12 text-amber-600 text-xl ${fontSecondary.className}`}>{contactUs.meta.subheading}</p>
                </div>
                <div className="w-4/6 mx-auto">
                    <h2 className={headingClasses}>{ourTarget.title.rendered}</h2>                    
                    {parse(ourTarget.content.rendered)}
                </div>
            </main>
            <Footer info={info} />
        </>
        
    )
}