import Footer from "@/ui/footer";

export default async function AboutUs() {
    let infoData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office')
    let info = await infoData.json()
    info = info.filter(item => item.slug == "gdynia")[0]

    return (
        <>
            <main>
                <h1>O nas</h1>
            </main>
            <Footer info={info} />
        </>
        
    )
}