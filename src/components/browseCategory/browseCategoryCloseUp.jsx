import Link from "next/link";
import Image from "next/image";

export default async function BrowseBySubCat({subcategories}) {

  const res = await fetch(`http://localhost:3000/api/categories/Electronics/${subcategories}`, {
    cache: "no-store",
  });
  
  const products = await res.json();

  return (
    <div className="px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${encodeURIComponent(p.name)}`}>
            <div key={p.id} className="bg-white shadow-md cursor-pointer rounded-xl overflow-hidden hover:shadow-lg">
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
          </Link>
        ))}
      </div>
    </div>
  );
}