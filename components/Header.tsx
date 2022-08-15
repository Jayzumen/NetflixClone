import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      {/* Left section */}
      <div className='flex items-center space-x-2 md:space-x-10'>
        <Image
          src='https://i.ibb.co/r5krrdz/logo.png'
          alt='Netflix Logo'
          width={120}
          height={50}
          priority
          className='cursor-pointer object-contain'
        />

        <BasicMenu />
        <ul className='hidden space-x-4 md:flex '>
          <li className='headerLink'>
            <Link href='/'>Home</Link>
          </li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>
            <Link href='/myList'>My List</Link>
          </li>
        </ul>
      </div>

      {/* right section */}
      <div className='flex items-center space-x-4 text-sm font-medium'>
        <SearchIcon className='hidden sm:inline h-6 w-6 cursor-pointer' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6 cursor-pointer hidden md:inline' />

        <AccountMenu />
      </div>
    </header>
  );
}

export default Header;
