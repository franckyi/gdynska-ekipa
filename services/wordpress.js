const duration = 3600 * 24

export const getData = async (url, slug, filtered = true, ordered = false) => {
    const response = await fetch(url, { next: { revalidate: duration } });
    let data = await response.json();

    if (filtered || slug !== "") {
        data = data.filter(item => item.slug == slug)[0];
    }

    if (ordered && typeof data === "array") {
        data = data.sort((a, b) => a.meta.display_order - b.meta.display_order)
    }

    return data;
}
