export default async function Stats() {
    const data = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/stats')
    let items = await data.json()

    items = items.filter(item => item.slug == "glowne")

    return(
        <p>show stats</p>
    )
}