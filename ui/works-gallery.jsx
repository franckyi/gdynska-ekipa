import Link from "next/link"
import WorkGalleryItem from "./works-gallery-item"

export default async function WorksGallery() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/realizacje')
    const items = await data.json()

    return (
        <div className="flex">
            {items.map(item => {
                return (
                    <Link key={item.id} href={`/realizacje/${item.id}`}>
                        <WorkGalleryItem media={item._links["wp:featuredmedia"][0].href} />
                    </Link>
                )
            })}
        </div>
    )
}