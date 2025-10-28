import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";

export default function BestSellingProduct() {
  return (
    <div className="w-full px-4 md:px-7 flex justify-center">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center">
            <div className="w-5 h-5 md:h-15 bg-red-500 rounded-lg"></div>
            <span className="text-red-500 font-bold text-xl px-2 py-1 mr-2">This Month</span>
          </div>
          <div className="flex items-center justify-between md:justify-start gap-4">
            
            <button className="bg-red-500 text-white px-4 md:px-6 py-2 rounded">View All</button>
          </div>
        </div>
<h2 className="text-2xl md:text-3xl font-bold">Best Selling Products</h2>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/bag.png",
            "/images/desk.png",
            "/images/gpu.png",
            "/images/jacket.png",
          ].map((src, i) => (
            <div key={i} className="border rounded-lg p-2 text-center flex flex-col justify-between relative">
              <Image src={src} width={200} height={200} className="mx-auto" alt="product" />
              <i className="absolute top-0 right-0 cursor-pointer"><AiOutlineHeart size={30} /></i>
              <div className="flex flex-col mt-2">
                <h3 className="text-lg font-medium">Product Name</h3>
                <p><s>$20</s> $16 <span className="text-yellow-400">★★★★★</span> (88)</p>
                <button className="bg-black text-white px-4 py-2 mt-2 w-full rounded">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows hidden on mobile */}
        <div className="hidden md:flex justify-end mt-4 gap-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-200">&lt;</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-200">&gt;</button>
        </div>
      </div>
    </div>
  );
}
