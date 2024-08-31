export default async function Footer({info}) {
    return (
        <footer>
            <h3>{info.meta.company_name}</h3>
            <p>{info.meta.slogan}</p>
            <div>{info.meta.address}</div>
            <a title="Email" href="mailto:{info.meta.email}">{info.meta.email}</a>
            <a title="Phone number" href="mailto:{info.meta.phone}">{info.meta.phone}</a>
            <a title="Facebook page" href="mailto:{info.meta.facebook_url}" target="_blak">Facebook</a>
            <a title="Instagram page" href="mailto:{info.meta.instagram_url}" target="_blak">Instagram</a>
        </footer>
    )
}