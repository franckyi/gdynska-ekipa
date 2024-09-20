import { getData, getPostBySlug } from '@/services/wordpress';
import AppBar from '@/ui/app-bar';
import CategoryChip from '@/ui/category-chip'
import Footer from '@/ui/footer';
import parse from 'html-react-parser';

export default async function Page({ params }) {
    const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office';
    const post = await getPostBySlug(params.slug);
    const office = await getData(officeUrl, 'gdynia', false, true);

    return (
        <>
            <header className="md:p-8">
                <AppBar info={office} />
            </header>
            <main className='my-32 w-4/6 max-w-screen-2xl flex gap-4 mx-auto text-lg bg-stone-200 text-stone-900'>
                <div>
                    categories:
                    {post.categories.map((id) => (
                        <CategoryChip key={id} categoryId={id} />
                    ))}
                </div>
                <h1 className='mx-auto my-20 text-2xl lg:text-4xl text-right font-bold'>{post.title.rendered}</h1>
                <div className="post-content px-20 pb-20">{parse(post.content.rendered)}</div>
            </main>
            <Footer info={office} />
        </>
    )
}