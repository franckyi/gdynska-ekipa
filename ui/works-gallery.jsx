import Link from "next/link"
import WorkGalleryItem from "./works-gallery-item"
import { fontSecondary } from "./fonts"

export default async function WorksGallery() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/realizacje')
    const items = await data.json()
    const textContainerClasses = "work-gallery-overlay absolute bg-stone-950/95 w-full h-full flex flex-col justify-center items-center"

    return (
        <div className="flex flex-wrap">
            {items.map(item => {
                return (
                    <Link className="work-gallery-link relative" key={item.id} href={`/realizacje/${item.id}`} title={item.title.rendered}>
                        <div className={textContainerClasses}>
                            <div className="text-3xl">{item.title.rendered}</div>
                            <div className={fontSecondary.className}>Projekty</div>
                        </div>
                        <WorkGalleryItem mediaId={item.featured_media} />
                    </Link>
                )
            })}
        </div>
    )
}