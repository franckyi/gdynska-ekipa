import { getData, getPosts } from '@/services/wordpress';
import AppBar from '@/ui/app-bar';
import PostList from "@/ui/posts/post-list";
import Footer from '@/ui/footer';

export default async function Page() {
    const officeUrl = 'https://panel.gdynskaekipa.pl/wp-json/wp/v2/company_office'
    const posts = await getPosts()
    const office = await getData(officeUrl, 'gdynia', false, true)

    const heading = "Nasz blog";
    const introText = "Witaj w naszym blogu! Nie znalazłaś/eś temat, który szukasz? Napisz do nas, chętnie Ci pomożemy.";

    return (
        <>
            <header className="md:p-8">
                <AppBar info={office} />
            </header>
            <main>
                <PostList posts={posts} limit={-1} heading={heading} introText={introText} />
            </main>
            <Footer info={office} />
        </>
    )
}