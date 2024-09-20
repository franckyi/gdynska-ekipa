import Link from 'next/link'
import PostThumbnail from './post-thumbnail'
import { fontSecondary } from '@/ui/fonts'

export default function LatestPosts({posts}) {
    const heading = "Artykuły pisane właśnie dla Ciebie";
    const introText = "Zależy nam, aby Ci pomóc naszymi wskazówkami. Napisaliśmy przydatne artykuły na każdą sytuację.";

    return(
        <section className='my-32'>
            <p className={`w-1/3 mx-auto text-center ${fontSecondary.className} text-lg`}>{introText}</p>
            <h2 className="mx-auto mt-8 mb-20 text-4xl lg:text-6xl text-center uppercase">{heading}</h2>
            <div id="blog" className=" w-4/6 max-w-screen-2xl mx-auto bg-stone-800">
                <div className="flex gap-4">
                    {posts.map( post => (
                        <Link
                            href={`/posty/${post.slug}`}
                            className='post-link w-1/3 flex flex-col justify-between hover:opacity-70 hover:bg-stone-700 transition-all duration-500'
                            key={post.id}
                        >
                            <h3 className="relative z-10 mt-8 mb-20 min-h-[120px] px-8 py-4 text-xl lg:w-3/4 bg-stone-900">
                                {post.title.rendered}
                            </h3>
                            <PostThumbnail className="relative z-0" mediaId={post.featured_media} />
                            <div
                                className="button relative z-10 w-[240px] m-8 px-20 py-4 text-center border-amber-600 border hover:border-white"
                                href="/o-nas"
                            >Czytaj
                            </div>
                        </Link>)
                    )}
                </div>
            </div>
        </section>
    )
}