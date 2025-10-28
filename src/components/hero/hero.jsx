"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

export default function Hero() {

  const slides = [
    { title: "iPhone 14 Series", subtitle: "Up to 10% off Voucher", image: './images/iphone17.jpeg' },
    { title: "Samsung Galaxy S24", subtitle: "Save Big with Discounts", image: './images/samsung.jpg' },
    { title: "MacBook Pro 2024", subtitle: "Special Offer Today", image: './images/macbook.jpeg'},
    { title: "iPhone 14 Series", subtitle: "Up to 10% off Voucher", image: './images/iphone17.jpeg' },
    { title: "Samsung Galaxy S24", subtitle: "Save Big with Discounts", image: './images/samsung.jpg' },
    { title: "MacBook Pro 2024", subtitle: "Special Offer Today", image: './images/macbook.jpeg' },
  ];

  return (
    <div className="w-full mx-auto px-7 flex justify-center">
      <div className="flex gap-10 flex-col lg:flex-row container bg-white">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/5 h-auto border-gray-900 pr-2 mb-4 lg:mb-0">
          <ul className="space-y-3 h-full flex flex-col text-gray-700 font-medium">
            <Link href={`/category/${encodeURIComponent("Woman’s Fashion")}`}>
            <li className="flex justify-between items-center hover:text-black cursor-pointer">
              Woman’s Fashion <span>{">"}</span>
            </li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Men’s Fashion")}`}>
            <li className="flex justify-between items-center hover:text-black cursor-pointer">
              Men’s Fashion <span>{">"}</span>
            </li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Electronics")}`}>
              <li className="hover:text-black cursor-pointer">Electronics</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Home & Lifestyle")}`}>
              <li className="hover:text-black cursor-pointer">Home & Lifestyle</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Medicine")}`}>
              <li className="hover:text-black cursor-pointer">Medicine</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Sports & Outdoor")}`}>
              <li className="hover:text-black cursor-pointer">Sports & Outdoor</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Baby’s & Toys")}`}>
              <li className="hover:text-black cursor-pointer">Baby’s & Toys</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Groceries & Pets")}`}>
              <li className="hover:text-black cursor-pointer">Groceries & Pets</li>
            </Link>
            <Link href={`/category/${encodeURIComponent("Health & Beauty")}`}>
              <li className="hover:text-black cursor-pointer">Health & Beauty</li>
            </Link>
          </ul>
        </aside>
        {/* <aside className="w-full lg:w-1/5 h-auto border-gray-900 pr-2 mb-4 lg:mb-0">
          <ul className="space-y-3 text-gray-700 font-medium">
            <li className="flex justify-between items-center hover:text-black cursor-pointer">
              Woman’s Fashion <span>{">"}</span>
            </li>
            <li className="flex justify-between items-center hover:text-black cursor-pointer">
              Men’s Fashion <span>{">"}</span>
            </li>
            <Link href={`/products/${encodeURIComponent(p.name)}`}><li className="hover:text-black cursor-pointer">Electronics</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Home & Lifestyle</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Medicine</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Sports & Outdoor</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Baby’s & Toys</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Groceries & Pets</li></Link>
            <Link><li className="hover:text-black cursor-pointer">Health & Beauty</li></Link>
          </ul>
        </aside> */}

        {/* Banner Carousel */}
        <div className="flex-1 border-t-2 w-full lg:w-50 lg:border-t-0 lg:border-l-2 p-2">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-full h-64 sm:h-80 md:h-96 bg-black text-white rounded-lg flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 relative">
                  {/* Left text content */}
                  <div className="space-y-2 sm:space-y-3 text-center md:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl">{slide.title}</p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                      {slide.subtitle}
                    </h1>
                    <button className="mt-3 inline-flex items-center text-base sm:text-lg md:text-xl font-medium cursor-pointer underline">
                      Shop Now →
                    </button>
                  </div>
                  {/* Right: Placeholder for image */}
                  <div className="w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-full bg-gray-800 rounded-md flex items-center justify-center mt-4 md:mt-0">
                    <img src={slide.image} alt="" className="h-full w-full" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
