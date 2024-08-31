import parse from 'html-react-parser'

export default async function Team() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/ekipa')
    let items = await data.json()

    items = items.sort((a, b) => a.meta.display_order - b.meta.display_order)

    return (
        items.map(item => {
            return (
                <div key={item.id}>
                    <h3>{item.title.rendered}</h3>
                    <span>{item.meta.role}</span>
                    {parse(item.content.rendered)}
                    <div>
                        <span>{item.meta.email}</span>
                        <span>{item.meta.phone}</span>
                    </div>
                </div>
            )
        })
    )
}