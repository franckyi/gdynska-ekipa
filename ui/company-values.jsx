import parse from 'html-react-parser'

export default async function CompanyValues({section}) {
    const content = parse(section.content.rendered)
    const containerClasses = "my-32 bg-bedroom bg-fixed bg-no-repeat"
    const textContainerClasses = "p-8 pb-16 w-4/6 mx-auto"
    const headingClasses = 'mx-auto my-12 text-6xl w-3/4 text-center uppercase'
    const contentClasses = "company-values flex items-center justify-between gap-8"

    return (
        <div className={containerClasses}>
            <div className={textContainerClasses}>
                <h2 className={headingClasses}>{section.meta.heading}</h2>
                <div className={contentClasses}>{content}</div>
            </div>
        </div>
    )
    
}