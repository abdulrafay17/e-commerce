import Image from "next/image";
import Link from "next/link";
export default async function CategoryProductsPage({params}) {
    const { category } = await params;
    const res = await fetch(`http://localhost:3000/api/categories/${encodeURIComponent(category)}`, {
        cache: "no-store",
    });

    const products = await res.json();
    if (!products.length) {
        return <h1 className="text-center mt-20 text-xl">No products found in {decodeURIComponent(category)}</h1>;
    }
    

 return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Category: {decodeURIComponent(category)}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
        <Link key={p.id} href={`/products/${encodeURIComponent(p.name)}`}>
          <div key={p.id} className="bg-white shadow-md rounded-xl overflow-hidden">
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