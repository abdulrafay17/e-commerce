"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/ItemsInCart";
import Image from "next/image";
import Modal from "../modal/modal";
import { useRouter } from "next/navigation";

export default function CloseUpProductPage({ products, check }) {
  const router = useRouter();
  const { addItems } = useCart();
  const [openModal, setOpenModal] = useState(false);
  const [conditions, setConditions] = useState({
    success: true,
    messages: "ADDED TO CART",
  });
  const [mainImage, setMainImage] = useState(products.image_url);
  const [order, setOrder] = useState({});

  useEffect(()=> {
    setOrder(prev => ({
      ...prev,
      quantity: 1 ,
    }))
  }, [0])
  
              
  useEffect(() => {
    if (openModal) {
      const timer = setTimeout(() => setOpenModal(false), 900);
      return () => clearTimeout(timer);
    }
  }, [openModal]);

  return (
    <div className="container mx-auto p-6">
      {openModal && <Modal conditions={conditions} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side: Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {[products.image_url, "/images/pic1.jpeg", products.image_url].map(
              (img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`${products.name} ${idx}`}
                  width={80}
                  height={80}
                  className={`border rounded-lg cursor-pointer hover:scale-105 transition ${
                    mainImage === img ? "ring-2 ring-red-500" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              )
            )}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <Image
              src={mainImage}
              alt={products.name}
              width={500}
              height={500}
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div>
          <h1 className="text-3xl font-bold">{products.name}</h1>

          {/* Reviews + Stock */}
          <div className="flex items-center gap-4 mt-2 text-sm">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-gray-600">(150 Reviews)</span>
            <span className="text-green-600 font-medium">In Stock</span>
          </div>

          {/* Price */}
          <p className="text-2xl font-bold text-gray-800 mt-4">
            ${products.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-3">{products.description}</p>

          {/* Sizes */}
          <div className="mt-6">
            <p className="font-semibold mb-2">Size:</p>
            <div className="flex gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setOrder((prev) => ({ ...prev, size }))}
                  className={`border px-3 py-1 rounded hover:bg-black hover:text-white transition-all 
                    ${order.size === size ? 'bg-black text-white scale-90' : 'bg-white text-black scale-100'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Buy */}
          <div className="flex items-center gap-4 mt-6">
            <input
              type="number"
              className="w-20 px-4 text-xl py-2 border rounded"
              onChange={(e) =>
                setOrder((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }))
              }
              defaultValue={1}
              min={1}
            />
            <button
              onClick={() => {
                if (!check) { 
                  window.location.href = '/login';  
                  return
                };

                if (order?.size && order?.quantity) {
                  addItems(products, order);
                  setConditions({
                    success: true,
                    messages: "ADDED TO CART",
                  });
                  setOpenModal(true);
                } else {
                  setConditions({
                    success: false,
                    messages: "SELECT SIZE AND QUANTITY",
                  });
                  setOpenModal(true);
                }
              }
            }
              className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-red-700"
            >
              {check ? 'ADD TO CART' : "LOGIN FIRST"}
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-6 border rounded-lg divide-y">
            <div className="p-4 flex items-center gap-3">
              🚚{" "}
              <span>Free Delivery (Enter your postal code for availability)</span>
            </div>
            <div className="p-4 flex items-center gap-3">
              ↩️ <span>Return Delivery within 30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
