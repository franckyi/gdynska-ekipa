import Link from 'next/link'
import PostThumbnail from './post-thumbnail'
import CategoryChip from '@/ui/category-chip'

export default function LatestPosts({posts}) {

    return(
        <div id="blog" className="my-32 w-4/6 max-w-screen-2xl mx-auto flex bg-stone-800">
            {posts.map( post => (
                <Link href={`/posty/${post.slug}`} className='w-1/3' key={post.id}>
                    <h2 className="mx-auto mt-8 mb-20 text-4xl lg:text-6xl lg:w-3/4 text-center uppercase">Blog</h2>
                    <h3 className="mx-auto mt-8 mb-20 text-lg lg:w-3/4 text-center uppercase">
                        {post.title.rendered}
                    </h3>
                    <PostThumbnail className="w-[300px] h-[300px]" mediaId={post.featured_media} />
                    {post.categories.map(category => (
                        <CategoryChip key={category.id} categoryId={category.id} />
                    ))}
                </Link>)
            )}
        </div>
    )
}