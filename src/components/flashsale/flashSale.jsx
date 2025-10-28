"use client";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import CountdownTimer from "@/utils/countdowntime.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function FlashSaleComponent({ products }) {
  return (
    <div className="w-full px-4 md:px-7 flex justify-center">
      <div className="container mx-auto p-4 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-9 mb-6">
          <div className="flex items-center">
            <div className="w-5 bg-red-500 rounded-lg h-5 md:h-15"></div>
            <span className="text-red-500 font-bold text-xl px-2 py-1">Today's</span>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap md:items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Flash Sales</h2>

            {/* Replaced static countdown */}
            <CountdownTimer />
          </div>
        </div>

        {/* Flash Products */}
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={true}
          className="!overflow-visible !container"
          loop={true}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((p, index) => (
            <SwiperSlide className="lg:!w-[300px] lg:!mr-3" key={index}>
              <a href={`/products/${encodeURIComponent(p.product_name)}`}>
                <div className="border hover:scale-105 duration-150 rounded-lg cursor-pointer text-center flex flex-col justify-between relative">
                  <div className="bg-red-500 overflow-hidden rounded-lg">
                    <Image
                      src={p.image_url}
                      width={200}
                      height={200}
                      className="w-full rounded-lg"
                      alt={p.product_name}
                    />
                  </div>
                  <div className="bg-red-500 absolute top-0 left-0 text-white rounded-lg w-1/5 text-sm">
                    {p.sale}%
                  </div>
                  <AiOutlineHeart
                    size={30}
                    className="absolute top-0 right-0 cursor-pointer m-1"
                  />

                  <div className="flex flex-col mt-2">
                    <h3 className="text-lg">{p.product_name}</h3>
                    <h3 className="text-lg">{p.category_name}</h3>
                    <p>
                      <s>$20</s> $16 <span className="text-yellow-400">★★★★★</span> (88)
                    </p>
                    <button className="bg-black cursor-pointer text-white px-4 py-2 mt-2 w-full rounded">
                      View Product
                    </button>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Products */}
        <div className="text-center mt-6">
          <a href="/flashsale">
            <button className="bg-red-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
              View All Flash Sale Products
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
