import Slide from '@/ui/slides/slide'

export default async function Slides() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/slajdy')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return (
        <Slide items={items} />
    )
  }