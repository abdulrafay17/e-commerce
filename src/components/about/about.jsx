
import Link from "next/link";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left text section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          {/* Breadcrumb */}
          <div className="mb-4 text-sm">
            <Link href="/" className="text-gray-600 hover:underline text-2xl">
              Home
            </Link>{" "}
            / <span className="text-gray-800 text-xl">About</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Story
          </h1>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Launched in 2015, <span className="font-semibold">Exclusive</span>{" "}
            is Europe’s premier online shopping marketplace with an active
            presence across multiple countries. Supported by a wide range of tailored
            marketing, data, and service solutions, Exclusive has 10,500 sellers
            and 300 brands and serves 3 million customers across the continent.  
            <br />
            <br />
            Exclusive offers more than 1 million products, growing rapidly with
            a diverse assortment in categories ranging from fashion to consumer
            electronics.
          </p>
        </div>

        {/* Right image section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/abimage1.png"
            alt="Our Story Visual"
            className="w-full h-64 lg:h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
