import { getAuthorById, getData, getPostBySlug } from '@/services/wordpress';
import AppBar from '@/ui/app-bar';
import CategoryText from '@/ui/category-text'
import TagChip from '@/ui/tag-chip'
import Footer from '@/ui/footer';
import Link from 'next/link';
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

    const author = await getAuthorById(post.author);

    return (
        <>
            <header className="md:p-8">
                <AppBar info={office} />
            </header>
            <main className='my-8 lg:my-32 lg:w-4/6 p-4 lg:p-8 lg:pt-0 lg:px-20 max-w-screen-2xl lg:flex gap-4 lg:gap-16 mx-auto text-base lg:text-lg bg-stone-200 text-stone-900'>

                <div className='lg:px-4 pb-4 flex flex-col items-end gap-1'>
                    <div className="px-8 py-16 bg-stone-900 text-white text-right">
                        <div className='text-stone-500'>kategoria</div>
                        {post.categories.map((id) => (
                            <CategoryText key={id} categoryId={id} />
                        ))}
                    </div>

                    <p className="mt-4 mr-8 text-right">
                        {publishedDate} <br />
                        — {author.name}
                    </p>

                    <h1 className='mx-auto my-20 text-4xl lg:text-4xl text-right font-bold'>{post.title.rendered}</h1>

                    <div className='desktop-tag-chips hidden lg:flex flex-col gap-2 items-end'>
                        <div className='text-stone-500'>tematy</div>
                        {post.tags.map((id) => (
                            <TagChip key={id} tagId={id} />
                        ))}
                    </div>
                </div>
                
                <div className="post-content lg:pr-20 pb-20 text-left">
                    {parse(post.content.rendered)}
                    <Link href="/blog" className="block lg:inline-block mx-auto text-center lg:px-20 py-4 my-16 border-stone-900 hover:bg-amber-600 border hover:text-white">Zobacz inne artykuły</Link>
                </div>

                <div className='mobile-tag-chips flex lg:hidden flex-col gap-2 items-end'>
                    <div className='text-stone-500'>tematy</div>
                    {post.tags.map((id) => (
                        <TagChip key={id} tagId={id} />
                    ))}
                </div>
            </main>
            <Footer info={office} />
        </>
    )
}