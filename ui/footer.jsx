import { fontSecondary } from "./fonts"

export default async function Footer({info}) {
    return (
        <footer className="p-8 pt-24">
            <h3 className="text-3xl w-[240px] pb-4 mb-4 border-b border-amber-600">{info.meta.company_name}</h3>
            <p className={fontSecondary.className}>{info.meta.slogan}</p>
            <div className="my-4">{info.meta.address}</div>
            <a className="block hover:text-amber-600" title="Email" href={`mailto:${info.meta.email}`}>{info.meta.email}</a>
            <a className="block hover:text-amber-600" title="Phone number" href={`tel:${info.meta.phone}`}>{info.meta.phone}</a>
            <a className="block hover:text-amber-600" title="Facebook page" href={info.meta.facebook_url} target="_blak">Facebook</a>
            <a className="block hover:text-amber-600" title="Instagram page" href={info.meta.instagram_url} target="_blak">Instagram</a>
        </footer>
    )
}