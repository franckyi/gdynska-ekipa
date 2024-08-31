import Image from "next/image"

export default async function WorkGalleryItem({media}) {
    const data = await fetch(media)
    const item = await data.json()
    
    return (
        <Image src={item.media_details.sizes.thumbnail.source_url} width={150} height={150} alt={item.title.rendered} />
    )
}