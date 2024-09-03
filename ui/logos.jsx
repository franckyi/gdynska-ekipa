import parse from 'html-react-parser'

export default function Logos({logos}) {
    logos = parse(logos.content.rendered)

    return (
        <div className="my-32 w-4/6 mx-auto">
            {logos}
        </div>
    )
}