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

export async function getPosts() {
    const response = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/posts', { next: { revalidate: duration } });
    const posts = await response.json();
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedPosts;
}

export async function getPostBySlug(slug) {
    const response = await fetch('https://panel.gdynskaekipa.pl/wp-json/wp/v2/posts', { next: { revalidate: duration } });
    const posts = await response.json();
    const post = posts.filter(item => item.slug == slug)[0];
    return post;
}

export async function getMediaById(id) {
    const response = await fetch(`https://panel.gdynskaekipa.pl/wp-json/wp/v2/media/${id}`, { next: { revalidate: duration } });
    const media = await response.json();
    return media;
}

export async function getPostCategoryById(id) {
    const response = await fetch(`https://panel.gdynskaekipa.pl/wp-json/wp/v2/categories/${id}`, { next: { revalidate: duration } });
    const category = await response.json();
    return category;
}