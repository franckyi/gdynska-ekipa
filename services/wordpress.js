const duration = 3600 * 6
const revalidation = { next: { revalidate: duration } }
const baseUrl = "https://panel.gdynskaekipa.pl/wp-json/wp/v2"

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
    const response = await fetch('/posts', revalidation);
    const posts = await response.json();
    const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    return sortedPosts;
}

export async function getPostBySlug(slug) {
    const response = await fetch(`${baseUrl}/posts`, revalidation);
    const posts = await response.json();
    const post = posts.filter(item => item.slug == slug && item.status == "publish")[0];
    return post;
}

export async function getMediaById(id) {
    const response = await fetch(`${baseUrl}/media/${id}`, revalidation);
    const media = await response.json();
    return media;
}

export async function getCategoryById(id) {
    const response = await fetch(`${baseUrl}/categories/${id}`, revalidation);
    const category = await response.json();
    return category;
}

export async function getTagById(id) {
    const response = await fetch(`${baseUrl}/tags/${id}`, revalidation);
    const tag = await response.json();
    return tag;
}