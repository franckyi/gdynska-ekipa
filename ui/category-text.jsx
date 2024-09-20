import {getCategoryById} from "@/services/wordpress";
import { fontSecondary } from '@/ui/fonts'

export default async function CategoryText({ categoryId }) {
    const category = await getCategoryById(categoryId)

    return (
        <span className={`text-4xl capitalize ${fontSecondary.className}`}>{category.name}</span>
    );
}