import parse from 'html-react-parser'

export default function Logos({logos}) {
    logos = parse(logos.content.rendered)

    return (
        <div>
            {logos}
        </div>
    )
}