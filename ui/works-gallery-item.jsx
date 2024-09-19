import Image from "next/image"
import {getMediaById} from "@/services/wordpress";

export default async function WorkGalleryItem({ mediaId }) {
    const media = await getMediaById(mediaId)
    const url = media.media_details.sizes.large.source_url;
    const alt = media.title.rendered;

    return (
        <Image className="work-gallery-thumbnail" src={url} width={480} height={480} alt={alt} />
    )
}