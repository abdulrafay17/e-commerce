'use client'

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMobile, AiOutlineLaptop, AiOutlineClockCircle, AiOutlineCamera, AiOutlineCustomerService, AiOutlinePlayCircle } from "react-icons/ai";

export default function CategoryBrowser() {
  const [hoverid, setHoverid] = useState(null);

  const categories = [
    { id: 1, name: "Phones", icon: AiOutlineMobile, href: '/category/Electronics/Phones' },
    { id: 2, name: "Computers", icon: AiOutlineLaptop, href: '/category/Electronics/Computers' },
    { id: 3, name: "Smartwatch", icon: AiOutlineClockCircle, href: '/category/Electronics/Smartwatch' },
    { id: 4, name: "Camera", icon: AiOutlineCamera, href: '/category/Electronics/Camera' },
    { id: 5, name: "Headphones", icon: AiOutlineCustomerService, href: '/category/Electronics/Headphones' },
    { id: 6, name: "Gaming", icon: AiOutlinePlayCircle, href: '/category/Electronics/Gaming' },
  ];

  return (
    <div className="w-full px-4 md:px-7 flex justify-center">
      <div className="container flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-5 h-5 md:h-15 bg-red-500 rounded-lg"></div>
            <span className="text-red-500 font-bold text-xl px-2 py-1 mr-2">
              Categories
            </span>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse By Category</h2>

        {/* Category list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link key={cat.id} href={cat.href}>
              <div
                onMouseEnter={() => setHoverid(cat.id)}
                onMouseLeave={() => setHoverid(null)}
                className="flex cursor-pointer hover:scale-105 flex-col items-center text-center border border-gray-200 rounded-lg p-2 bg-white hover:shadow-lg transition-all"
              >
                <div className="w-full h-24 flex items-center justify-center mb-2">
                  <Icon
                    className={`h-20 w-20 ${
                      hoverid === cat.id ? "text-red-500" : "text-gray-400"
                    } transition-colors`}
                  />
                </div>
                <p
                  className={`text-sm font-medium ${
                    hoverid === cat.id ? "text-red-600" : "text-gray-700"
                  } transition-colors`}
                >
                  {cat.name}
                </p>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
