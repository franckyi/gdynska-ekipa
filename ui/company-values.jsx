import parse from 'html-react-parser'

export default async function CompanyValues({section}) {
    const content = parse(section.content.rendered)

    return (
        <div>
            {content}
        </div>
    )
    
}