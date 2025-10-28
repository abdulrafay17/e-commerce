'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/loader/loader.jsx";
import { useCart } from "@/context/ItemsInCart";

export default function ProductsPage() {
  const {limit, setLimit} = useCart();
  const [products, setProducts] = useState([]);
  
  useEffect(()=> {
    async function fetchProducts() {
      const res = await fetch(`http://localhost:3000/api/products?limit=${limit}`, {
      cache: "no-store",
    });
      const result = await res.json()
    setProducts(result)
    }

    fetchProducts();
  }, [limit])

  if (products.length === 0) {
    return <Loader />
  }

  return (
    <>
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <a key={p.id} href={`/products/${encodeURIComponent(p.name)}`}>
            <div key={p.id} className="bg-white hover:scale-105 duration-150 hover:shadow-red-600 shadow-2xl cursor-pointer rounded-xl overflow-hidden hover:shadow-2xl">
              {p.image_url && (
                <Image
                  src={p.image_url}
                  alt={p.name}
                  className="w-full h-48"
                  width={300}
                  height={300}
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{p.name}</h2>
                <p className="text-gray-600 text-sm mb-3">{p.description}</p>
                <p className="text-green-600 font-bold">💲 {p.price}</p>
                <p className="text-gray-500 text-sm mb-1">Stock: {p.stock}</p>
                <p className="text-blue-500 text-sm mb-2">
                  📂 {p.category}
                  {p.subcategory ? ` → ${p.subcategory}` : ""}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    <div className="w-full flex items-center justify-center mb-3">
      <button onClick={()=> setLimit(limit + 20)} className="px-9 py-4 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-green-800 duration-200 font-bold">MORE</button>
    </div>
    </>
  );
}
