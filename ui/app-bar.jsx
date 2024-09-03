import Image from 'next/image'
import Link from 'next/link';

const appBarClasses = "flex flex-row justify-between";
const navClasses = "flex flex-row gap-4 uppercase";
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
]

export default function AppBar() {
  return (
    <div className={appBarClasses}>
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
  );
}