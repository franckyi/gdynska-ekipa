import { getData, getPostBySlug } from '@/services/wordpress';
import AppBar from '@/ui/app-bar';
import CategoryText from '@/ui/category-text'
import TagChip from '@/ui/tag-chip'
import Footer from '@/ui/footer';
import parse from 'html-react-parser';

export default async function Page({ params }) {
    const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office';
    const post = await getPostBySlug(params.slug);
    const office = await getData(officeUrl, 'gdynia', false, true);

    const date = new Date(post.date);
    const publishedDate = date.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <>
            <header className="md:p-8">
                <AppBar info={office} />
            </header>
            <main className='my-32 w-4/6 max-w-screen-2xl flex gap-4 mx-auto text-lg bg-stone-200 text-stone-900'>

                <div className='px-4 pb-4 flex flex-col items-end gap-1'>
                    <div className="px-8 py-16 bg-stone-900 text-white">
                        <div className='text-stone-500 text-right'>kategoria</div>
                        {post.categories.map((id) => (
                            <CategoryText key={id} categoryId={id} />
                        ))}
                    </div>

                    <p className="mt-4 mr-8">
                        {publishedDate}
                    </p>

                    <h1 className='mx-auto my-20 text-2xl lg:text-4xl text-right font-bold'>{post.title.rendered}</h1>
                    
                    {post.tags.map((id) => (
                        <TagChip key={id} tagId={id} />
                    ))}
                </div>
                
                
                <div className="post-content pr-20 pb-20">{parse(post.content.rendered)}</div>
            </main>
            <Footer info={office} />
        </>
    )
}