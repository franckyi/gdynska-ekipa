import Image from 'next/image'
import Link from 'next/link';
import './app-bar.css';

const appBarClasses =
  "flex flex-row justify-between";

const navClasses = "flex flex-row gap-4 uppercase";

const linkClasses = "tracking-widest hover:bg-amber-600"

export default function AppBar() {
  return (
    <div className={appBarClasses}>
        <Image
            src="/logo_ge_dark.svg"
            width="40"
            height="40"
            alt="Gdyńska Ekipa logo"
            draggable="false"
        />
        <nav className={navClasses}>
          <Link className={linkClasses} href="#">Usługi</Link>
          <Link className={linkClasses} href="#">Realizacje</Link>
          <Link className={linkClasses} href="#">Zespół</Link>
          <Link className={linkClasses} href="#">O nas</Link>
        </nav>
    </div>
  );
}