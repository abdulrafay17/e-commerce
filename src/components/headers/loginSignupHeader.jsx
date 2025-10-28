"use client";

import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LoginSignUpHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();

    const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/sign" },
    ];

  return (
    <header className="w-screen h-auto text-white flex flex-col items-center">
      {/* Top banner */}
      <div className="bg-black w-screen flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 px-2 py-2 text-center">
        <h1 className="text-sm sm:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <a href="#" className="underline text-sm sm:text-base">
          ShopNow
        </a>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-black font-semibold text-2xl sm:text-3xl">
          <Link href='/'>EXCLUSIVE</Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-black font-semibold text-md">
            {navLinks.map((links, index)=> (
              <li key={index}>
                <a href={links.href} className={`${pathName === links.href ? 'underline' : 'hover:underline'}`}>{links.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons + search */}
        <div className="flex items-center gap-4 sm:gap-7">
          <div className="hidden sm:flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="rounded h-8 sm:h-9 focus:outline-black pl-2 border-2 border-black text-black text-sm sm:text-base"
            />
            <FaSearch color="black" size={20} className="ml-2" />
          </div>

          {/* Hamburger menu (mobile only) */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars size={24} color="black" />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="w-full bg-gray-100 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-black font-semibold text-md">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </nav>
      )}
    </header>
  );
}