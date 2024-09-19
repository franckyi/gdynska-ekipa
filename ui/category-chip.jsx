import {getPostCategoryById} from "@/services/wordpress";

export default async function CategoryChip({ categoryId }) {
    const category = await getPostCategoryById(categoryId)

    return (
        <span className="category-chip bg-stone-800">{category.name}</span>
    );
}