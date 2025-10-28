"use client"
import Link from "next/link";
import { useCart } from "@/context/ItemsInCart";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Cart() {
  const { itemsInCart, removeItem } = useCart();
  const path = usePathname();
  
  const subtotal = itemsInCart.reduce((acc, item)=>  acc + (item.price * item.order.quantity), 0)
  const shippingFee = (subtotal * 0.1);
  const total = (subtotal + shippingFee);
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Breadcrumb */}
      <div className="text-2xl text-gray-500 mb-4"><Link href='/'><span className="text-xl">Home</span></Link> <span className="text-2xl text-black">{path}</span></div>

      {/* Cart Items */}
      <div className="border rounded-lg p-4 overflow-x-auto">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-4 gap-4 font-semibold text-gray-700 border-b pb-2 mb-4">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Subtotal</div>
        </div>

        {/* Item 1 */}
        {itemsInCart?.map((items, index)=> (
        <div key={index} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center border-b py-2">
          <div className="flex items-center">
            <span onClick={()=> removeItem(items.id)} className="text-red-500 cursor-pointer mr-2">✖</span>
            <span>{items.name}</span>
          </div>
          <div className="text-gray-700">${items.price}</div>
          <div>
            <input
              type="number"
              defaultValue={items.order.quantity}
              disabled
              min="1"
              className="w-18 p-1 border text-center select-none rounded"
            />
          </div>
          <div className="font-semibold">${(items.price * items.order.quantity).toFixed(2)}</div>
        </div>
        ))}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 mt-4">
          <a href="/"><button className="hover:bg-red-500 duration-75 cursor-pointer px-4 py-2 border rounded">Return to Shop</button></a>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
        {/* Coupon */}
        <div className="w-full lg:w-1/2">
          <div className="flex">
            <input
              type="text"
              placeholder="Coupon Code"
              className="p-2 border rounded-l w-full"
            />
            <button className="bg-red-500 text-white p-2 rounded-r">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Totals */}
        <div className="w-full lg:w-1/3 p-4 border rounded">
          <div className="text-gray-700">Cart Total</div>
          <div className="flex justify-between mt-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Shipping is 10%</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2 font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <a href="/cart/checkout"><button className="w-full cursor-pointer hover:!bg-green-700 duration-300 bg-red-500 text-white p-2 mt-4 rounded">
            Proceed to checkout
          </button></a>
        </div>
      </div>
    </div>
  );
}
