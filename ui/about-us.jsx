import parse from 'html-react-parser'
import Link from 'next/link'

export default function AboutUs({content, btnText}) {
    return (
        <div>
            {parse(content)}
            <Link href="/o-nas">{btnText}</Link>
        </div>
    )
}