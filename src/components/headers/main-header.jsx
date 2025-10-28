"use client";

import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useCart } from "@/context/ItemsInCart";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";

export default function MainHeader({check}) {
  const {clearCart} = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pressed, setPressed] = useState({
    cart: false,
    user: false,
    wishlist: false,
  });
  const [user, setUser] = useState(check);
  const pathname = usePathname();

  const handleLogout = async () => {
    await axios.post("/api/logout",);
    localStorage.removeItem('cartItems')
    clearCart();
    setUser(null);
    window.location.href = "/login";
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    !user ? { name: "Login", href: "/login" } : null,
  ].filter(Boolean);

  return (
    <header className="w-screen h-auto text-white flex flex-col items-center">
      {/* Top banner */}
      <div className="bg-black w-screen flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10 px-2 py-2 text-center">
        <h1 className="text-sm sm:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <a href="#" className="underline text-sm sm:text-base">ShopNow</a>
      </div>

      {/* Main header */}
      <div className="container flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <h1 className="text-black font-semibold text-2xl sm:text-3xl">
          <Link href="/">EXCLUSIVE</Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-black font-semibold text-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href ? "underline" : "hover:underline"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 p-3 rounded-2xl cursor-pointer hover:underline hover:bg-red-900 duration-300 hover:text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Icons + search */}
        <div className="flex items-center gap-4 sm:gap-7">
          <div className="hidden sm:flex items-center">
            {pathname === '/products' && <> <input
              type="search"
              defaultValue={pathname}
              className="rounded h-8 sm:h-9 focus:outline-black pl-2 border-2 border-black text-black text-sm sm:text-base"
            />
            <FaSearch color="black" size={20} className="ml-2" /> </>}
          </div>
          <AiOutlineHeart  onClick={()=>{setPressed(prev=> ({...prev, wishlist: true})); setTimeout(() => setPressed(prev=> ({...prev, wishlist: false})), 100);}} className={pressed.wishlist ? `scale-90 cursor-pointer` : 'cursor-pointer'} color="black" size={26} />
          {user && <Link href='/my-account'  onClick={()=>{setPressed(prev=> ({...prev, user: true})); setTimeout(() => setPressed(prev=> ({...prev, user: false})), 100);}}><LuUser size={26} color="orange" className={pressed.user ? `scale-90 cursor-pointer` : 'cursor-pointer'} /></Link>}
          {user && <a href="/cart" onClick={()=>{setPressed(prev=> ({...prev, cart: true})); setTimeout(() => setPressed(prev=> ({...prev, cart: false})), 100);}} ><FaShoppingCart  color="black" size={26} className={pressed.cart ? `scale-90 cursor-pointer` : 'cursor-pointer'} /></a>}

          {/* Hamburger menu (mobile only) */}
          <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} color="black" />
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="w-full bg-gray-100 md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-black font-semibold text-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href ? "underline" : "hover:underline"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
