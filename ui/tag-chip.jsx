import {getTagById} from "@/services/wordpress";

export default async function TagChip({ tagId }) {
    const tag = await getTagById(tagId)

    return (
        <div className="w-fit px-8 py-2 text-sm rounded-full font-bold bg-stone-300">{tag.name}</div>
    );
}