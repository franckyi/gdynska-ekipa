import Link from 'next/link'
import PostThumbnail from './post-thumbnail'
import { fontSecondary } from '@/ui/fonts'

export default function PostList({posts, limit, heading, introText}) {

    if(limit > 0) {
        posts = posts.slice(0, limit);
    }

    return(
        <section id='blog' className='my-32 p-4'>
            <p className={`lg:w-1/3 mx-auto text-center ${fontSecondary.className} text-lg`}>{introText}</p>
            <h2 className="mx-auto mt-8 mb-20 text-4xl lg:text-6xl text-center uppercase">{heading}</h2>
            <div className="lg:w-4/6 max-w-screen-2xl mx-auto">
            
                <div className="lg:flex lg:flex-wrap">
                    {posts.map( post => (
                        <Link
                            href={`/posty/${post.slug}`}
                            className='post-link lg:w-1/3 my-20 lg:my-0 bg-stone-800 border border-stone-900 flex flex-col justify-between hover:opacity-70 hover:bg-stone-700 transition-all duration-500'
                            key={post.id}
                        >
                            <h3 className="relative z-10 mt-8 mb-20 min-h-[120px] px-8 py-4 text-xl lg:w-3/4 bg-stone-900">
                                {post.title.rendered}
                            </h3>
                            <PostThumbnail className="relative z-0" mediaId={post.featured_media} />
                            <div
                                className="relative z-10 m-8 lg:px-20 py-4 text-center border-amber-600 border hover:border-white"
                                href="/o-nas"
                            >Czytaj
                            </div>
                        </Link>)
                    )}
                </div>
            </div>
            {limit > 0 && <Link href="/blog" className="block text-center my-16 text-xl text-amber-600 underline hover:tracking-widest hover:text-white transition-all duration-300 duration-300 ease-in-out">wszystkie artykuły</Link>}
        </section>
    )
}