
import Link from "next/link";
import Image from "next/image";
// import Loader from "../loader/loader.jsx";

export default function FlashSale({products}) {

  return (
    <>
      <div className="px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <a
              key={p.product_id}
              href={`/products/${encodeURIComponent(p.product_name)}`}
            >
              <div className="bg-white hover:scale-105 duration-150 hover:shadow-red-600 shadow-2xl cursor-pointer rounded-xl overflow-hidden hover:shadow-2xl">
                {p.image_url && (
                  <Image
                    src={p.image_url}
                    alt={p.product_name}
                    className="w-full h-48"
                    width={300}
                    height={300}
                  />
                )}
                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">{p.product_name}</h2>
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
    </>
  );
}
