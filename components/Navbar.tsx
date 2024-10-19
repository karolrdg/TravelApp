import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-4 overflow-hidden">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Links de navegação */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray flexCenter cursor-pointer pb-1.5 transition-all hover:overline decoration-4 decoration-green-600 "
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Botão de login com animação */}
      <div className="lg:flex hidden overflow-hidden px-4 py-3">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          className="transition-transform duration-700 ease-out transform hover:scale-105 hover:bg-green-600"
        />
      </div>

      {/* Menu para telas menores */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={20}
        height={20}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

export default Navbar;
