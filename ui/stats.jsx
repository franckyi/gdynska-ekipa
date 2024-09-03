import StatsAnimation from "./stats-animation"

export default async function Stats() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/stats')
    let items = await data.json()
    items = items.filter(item => item.slug == "glowne")

    return(
        <div className="w-4/6 mx-auto my-32">
            <p>show stats</p>
            <StatsAnimation stats={items} />
        </div>
    )
}