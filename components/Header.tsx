import { BellIcon, SearchIcon } from "@heroicons/react/solid";
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
        <img
          src='https://rb.gy/ulxxee'
          alt='Netflix Logo'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <BasicMenu />
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

        <AccountMenu />

        {/* <button
          onClick={logout}
          className='rounded bg-[#e50914] py-2 font-semibold w-20 transition duration-300 hover:text-black'>
          Log Out
        </button> */}
      </div>
    </header>
  );
}

export default Header;
