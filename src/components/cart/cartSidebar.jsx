"use client";

import { useState, useEffect } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/ItemsInCart";
import Image from "next/image";
import Link from "next/link";
import cartTotal from "@/utils/cartTotal";


export default function CartSidebar({check}) {
  
  const {itemsInCart, removeItem} = useCart();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const noToThis = ['/login', '/sign'].includes(pathname);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (noToThis) {
    return null
  } else if (!check) {
    return null
  }

   return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 bg-gray-300 hover:text-white text-black cursor-pointer p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all"
      >
        <FaShoppingCart size={22}  />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-5 flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-600 hover:text-black"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          {itemsInCart.length === 0 ? 
          (<p className="text-gray-500 text-sm">
            No items in cart yet.
          </p>
          )
          :
          (
            itemsInCart.map((items, index)=> (
              <div key={index} className="flex items-center gap-2 mb-3 !overflow-x-hidden" >
                <Image src={items.image_url} alt={items.name} width={100} height={200} className="rounded" />
                <p className="font-bold">{items.name}</p>
                <p className="font-bold">${items.price}</p>
                <button onClick={()=> removeItem(items.id)} className="text-red-600 font-bold cursor-pointer text-2xl">-</button>
              </div>
              )
            )
          )
          }
        </div>

        {/* Footer */}
        <div className="border-t pt-3 mt-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">${cartTotal(itemsInCart)}</span>
          </div>
          <Link href={`/cart`}>
          <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-all">
            Move To full Cart
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
