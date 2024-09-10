export const getData = async (url, slug, filtered = true, ordered = false) => {
    const response = await fetch(url);
    let data = await response.json();

    if (filtered || slug !== "") {
        data = data.filter(item => item.slug == slug)[0];
    }

    if (ordered) {
        data = data.sort((a, b) => a.meta.display_order - b.meta.display_order)
    }

    return data;
}
