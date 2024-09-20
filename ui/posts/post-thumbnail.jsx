import {getMediaById} from "@/services/wordpress";
import Image from "next/image";

export default async function PostThumbnail({ mediaId }) {
    const media = await getMediaById(mediaId)
    const url = media.media_details.sizes.large.source_url;
    const alt = media.title.rendered;

    return (
        <Image
            src={url}
            width={300}
            height={300}
            alt={alt}
            className="object-cover max-h-[300px]"
        />
    )
}