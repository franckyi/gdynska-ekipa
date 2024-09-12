import StatsAnimation from "./stats-animation"

export default async function Stats() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/stats')
    let items = await data.json()
    items = items.filter(item => item.slug == "glowne")[0]

    return(
        <div className="w-4/6 max-w-screen-2xl mx-auto my-32">
            <StatsAnimation stats={items} />
        </div>
    )
}