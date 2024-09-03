import Image from 'next/image'
import Link from 'next/link';

const appBarClasses =
  "flex flex-row justify-between";

const navClasses = "flex flex-row gap-4 uppercase";

const linkClasses = "tracking-widest hover:bg-amber-600"

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
          <Link className={linkClasses} href="/">Home</Link>
          <Link className={linkClasses} href="#">Usługi</Link>
          <Link className={linkClasses} href="/#realizacje">Realizacje</Link>
          <Link className={linkClasses} href="/#zespol">Zespół</Link>
          <Link className={linkClasses} href="/o-nas">O nas</Link>
        </nav>
    </div>
  );
}