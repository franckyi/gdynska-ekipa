import parse from 'html-react-parser'

export default async function WhyUs({whyUsList, section}) {
    const content = parse(section.content.rendered)
    const containerClasses = "w-4/6 mx-auto my-32 rounded-tl-full bg-livingroom bg-fixed bg-no-repeat"
    const headingClasses = 'text-left lg:text-center lg:mx-auto md:my-12 text-4xl lg:text-6xl uppercase'

    return (
        <div className={containerClasses}>
            <h2 className={headingClasses}>Dlaczego my</h2>
            
            <div className="why-us pb-16">
                <div className="flex flex-wrap">
                    {whyUsList.map(item => {
                        return (
                            <div key={item.id} className="why-us-item mb-8 max-w-[480px]">
                                <h3 className="text-3xl text-amber-600">{item.title.rendered}</h3>
                                <div>{parse(item.content.rendered)}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="client-list my-12 xl:w-2/6">{content}</div>
            </div>
        </div>
    )
    
}