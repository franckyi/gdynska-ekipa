import {getCategoryById} from "@/services/wordpress";
import { fontSecondary } from '@/ui/fonts'

export default async function CategoryText({ categoryId }) {
    const category = await getCategoryById(categoryId)

    return (
        <span className={`category-text text-4xl ${fontSecondary}`}>{category.name}</span>
    );
}