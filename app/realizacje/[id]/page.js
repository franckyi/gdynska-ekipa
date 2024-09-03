import AppBar from "@/ui/app-bar"
import { fontSecondary } from "@/ui/fonts"
import parse from 'html-react-parser'

export default async function Page({ params }) {
  const data = await fetch(`https://panel.gdynskaekipa.pl/wp-json/wp/v2/realizacje/${params.id}`)
  const work = await data.json()

  const headingClasses = 'mx-auto mb-20 text-6xl px-8 py-12 w-full bg-stone-900 text-center uppercase'
  const content = parse(work.content.rendered)

  return (
    <>
      <header className="p-8">
        <AppBar />
      </header>
      <h1 className={headingClasses}>{work.title.rendered}</h1>
      <div className="w-4/6 mx-auto">
        <div><span className={fontSecondary.className}>Data: </span><span className="text-xl text-amber-600">{work.meta.date}</span></div>
        <div><span className={fontSecondary.className}>Projektant: </span><span className="text-xl text-amber-600">{work.meta.projektant}</span></div>
        <div><span className={fontSecondary.className}>Objekt: </span><span className="text-xl text-amber-600">{work.meta.subheading}</span></div>
      </div>
      <div className="w-4/6 my-12 mx-auto">{content}</div>

    </>

  )
}