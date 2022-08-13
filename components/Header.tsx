import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "./../hooks/useAuth";

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
        <img
          src='https://rb.gy/ulxxee'
          alt='Netflix Logo'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden space-x-4 md:flex '>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      {/* right section */}
      <div className='flex items-center space-x-6 text-sm font-medium'>
        <SearchIcon className='hidden sm:inline h-6 w-6 cursor-pointer' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6 cursor-pointer' />
        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            alt='Account Logo'
            className='cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
