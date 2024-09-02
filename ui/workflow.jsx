import parse from 'html-react-parser'

export default async function Workflow({section}) {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/proces')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return (
        <div>
            {parse(section.content.rendered)}
            <div className="workflow-steps flex">
                {items.map(item => {
                    return (
                        <div key={item.id} className="workflow-step">
                            <h3>{item.title.rendered}</h3>
                            {parse(item.content.rendered)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}