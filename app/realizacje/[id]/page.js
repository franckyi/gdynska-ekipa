import AppBar from "@/ui/app-bar"
import { fontSecondary } from "@/ui/fonts"
import parse from 'html-react-parser'
import Footer from "@/ui/footer"

export default async function Page({ params }) {
  const data = await fetch(`https://panel.gdynskaekipa.pl/wp-json/wp/v2/realizacje/${params.id}`)
  const work = await data.json()

  const infoData = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office')
  let info = await infoData.json()
  info = info.filter(item => item.slug == "gdynia")[0]

  const content = parse(work.content.rendered)
  const headingClasses = 'mx-auto mb-20 text-3xl xl:text-8xl px-8 py-12 w-full bg-stone-900 text-center uppercase'
  const valueClasses = "text-xl text-amber-600"

  return (
    <>
      <header className="p-8">
        <AppBar />
      </header>
      <h1 className={headingClasses}>{work.title.rendered}</h1>
      <main>
        <div className="w-4/6 mx-auto">
          <div><span className={fontSecondary.className}>Data: </span><span className={valueClasses}>{work.meta.date}</span></div>
          <div><span className={fontSecondary.className}>Projektant: </span><span className={valueClasses}>{work.meta.projektant}</span></div>
          <div><span className={fontSecondary.className}>Objekt: </span><span className={valueClasses}>{work.meta.subheading}</span></div>
        </div>
        <div className="w-4/6 my-12 mx-auto">{content}</div>
      </main>
      <Footer info={info} />
    </>

  )
}