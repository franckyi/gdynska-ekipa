import { fontSecondary } from "./fonts"
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default async function Footer({info}) {
    return (
        <footer className="pb-8 pt-12 w-4/6 mx-auto bg-ge bg-scroll bg-no-repeat bg-center bg-cover">
            <h3 className="text-3xl w-[240px] pb-4 mb-4 border-b border-amber-600">{info.meta.company_name}</h3>
            <p className={fontSecondary.className}>{info.meta.slogan}</p>
            <div className="mt-4"><BusinessIcon /> Gdyńska Ekipa Dawid Bierkus</div>
            <div className="mb-4">NIP: {info.meta.nip}</div>
            <div className="my-4"><PlaceIcon /> {info.meta.address}</div>
            <a className="block hover:text-amber-600" title="Email" href="mailto:dawid@gdynskaekipa.pl"><MailOutlineIcon /> dawid@gdynskaekipa.pl</a>
            <a className="block hover:text-amber-600" title="Email" href={`mailto:${info.meta.email}`}><MailOutlineIcon /> {info.meta.email}</a>
            <a className="block mt-4 hover:text-amber-600" title="Phone number" href="tel:605-150-157"><PhoneIcon /> Dawid Bierkus 605_150_157</a>
            <a className="block hover:text-amber-600" title="Phone number" href={`tel:${info.meta.phone}`}><PhoneIcon /> Anna Bierkus {info.meta.phone}</a>
            <a className="block mt-4 hover:text-amber-600" title="Facebook page" href={info.meta.facebook_url} target="_blak"><FacebookIcon /> Facebook</a>
            <a className="block hover:text-amber-600" title="Instagram page" href={info.meta.instagram_url} target="_blak"><InstagramIcon /> Instagram</a>
        </footer>
    )
}