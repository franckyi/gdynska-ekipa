import AppBar from "@/ui/app-bar";
import parse from 'html-react-parser'
import { fontSecondary } from "@/ui/fonts";
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

    const whyUsData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/dlaczego_my')
    let whyUsList = await whyUsData.json()
    whyUsList = whyUsList.sort((a, b) => a.meta.display_order - b.meta.display_order)

    const titleClasses = 'mx-auto mb-20 text-8xl px-8 py-12 w-full bg-stone-900 text-center uppercase'
    const headingClasses = 'mx-auto my-12 text-6xl w-3/4 text-center uppercase'

    return (
        <>
            <header className="p-8">
                <AppBar />
            </header>
            <main>
                <h1 className={titleClasses}>O nas</h1>
                <div className="w-4/6 mx-auto">
                    <div className="flex gap-16 my-12">
                        <p className={`text-amber-600 text-xl ${fontSecondary.className}`}>{info.meta.company_short_desc}</p>
                        <p>{info.meta.company_full_desc}</p>
                    </div>
                    <h2 className={headingClasses}>Nasza misja</h2>
                    <p>{info.meta.company_mission}</p>
                    <h2 id="uslugi" className={headingClasses}>Nasze usługi</h2>
                    <div className="flex bg-mall bg-fixed bg-no-repeat">
                        {services.map(item => {
                            return (
                                <div className="my-12" key={item.id}>
                                    <h3 className="text-3xl text-amber-600">{item.title.rendered}</h3>
                                    <div className="service my-4 w-3/6">{parse(item.content.rendered)}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <WhyUs whyUsList={whyUsList} section={aboutUs} />
            </main>
            <Footer info={info} />
        </>
        
    )
}