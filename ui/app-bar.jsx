import Image from 'next/image'
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const appBarClasses = "p-4 flex flex-col lg:flex-row flex-wrap justify-between gap-4 items-center";
const navClasses = "flex flex-row flex-wrap gap-4 xl:gap-8 uppercase";
const linkClasses = "tracking-widest hover:bg-amber-600"
const menuItems = [
  {
    id: 0,
    name: "Home",
    link: "/",
    classes: linkClasses
  },
  {
    id: 1,
    name: "Usługi",
    link: "/o-nas#uslugi",
    classes: linkClasses
  },
  {
    id: 2,
    name: "Realizacje",
    link: "/#realizacje",
    classes: linkClasses
  },
  {
    id: 3,
    name: "Zespół",
    link: "/#zespol",
    classes: linkClasses
  },
  {
    id: 4,
    name: "O nas",
    link: "/o-nas",
    classes: linkClasses
  },
  {
    id: 5,
    name: "Ostatnie artykuły",
    link: "/#blog",
    classes: linkClasses
  },
  {
    id: 6,
    name: "Blog",
    link: "/blog",
    classes: linkClasses
  },
]

export default function AppBar({info}) {
  return (
    <div className={appBarClasses}>
      <div className='flex items-center justify-between gap-16'>
        <Link href="/">
          <Image
              src="/logo_ge_dark.svg"
              width="40"
              height="40"
              alt="Gdyńska Ekipa logo"
              draggable="false"
              />
        </Link>
        <nav className={navClasses}>
          {menuItems.map(item => {
            return (
              <Link className={item.classes} key={item.id} href={item.link}>{item.name}</Link>
            )
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <a className="block hover:text-amber-600" title="Facebook page" href={info.meta.facebook_url} target="_blak"><FacebookIcon /></a>
        <a className="block hover:text-amber-600" title="Instagram page" href={info.meta.instagram_url} target="_blak"><InstagramIcon /></a>
      </div>
    </div>
  );
}