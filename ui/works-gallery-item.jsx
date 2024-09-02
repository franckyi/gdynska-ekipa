import Image from "next/image"

export default async function WorkGalleryItem({ mediaId }) {
    const media = await fetch(`https://panel.gdynskaekipa.pl/wp-json/wp/v2/media/${mediaId}`)
    const mediaItem = await media.json()
    const url = mediaItem.media_details.sizes.large.source_url;
    const alt = mediaItem.title.rendered;

    return (
        <Image className="work-gallery-thumbnail" src={url} width={480} height={480} alt={alt} />
    )
}