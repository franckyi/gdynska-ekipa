import {getCategoryById} from "@/services/wordpress";

export default async function CategoryChip({ id }) {
    const category = await getCategoryById(id)

    return (
        <div className="category-chip bg-amber-600 text-white">chip: {JSON.stringify(category)} {category.name}</div>
    );
}