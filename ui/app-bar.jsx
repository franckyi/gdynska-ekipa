import Image from 'next/image'

const appBarClasses =
  "flex justify-between bg-stone-900 text-white";

const navClasses = "flex gap-16";

export default function AppBar() {
  return (
    <div className={appBarClasses}>
        <Image
            src="/logo_ge_dark.svg"
            width={30}
            height={30}
            alt="Gdyńska Ekipa logo"
        />
        <ul className={navClasses}>
          <li>Usługi</li>
          <li>Realizacje</li>
          <li>Zespół</li>
          <li>O nas</li>
        </ul>
    </div>
  );
}