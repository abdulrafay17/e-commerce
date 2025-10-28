import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="flex flex-col w-full max-w-6xl gap-6">

        {/* Breadcrumb */}
        <div className=" mb-4 text-2xl">
          <Link href="/" className="text-gray-600 hover:underline text-2xl">Home</Link> / 
          <span className="text-gray-800 ml-1"><Link href="/contact" className="hover:underline text-xl">Contact</Link></span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">

          {/* Contact Info */}
          <div className="lg:w-1/3 bg-white p-6 shadow-md rounded-lg lg:rounded-l-lg">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaPhone className="text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Call To Us</h3>
                  <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                  <p className="text-gray-600">
                    <a href="tel:+8801811222222" className="hover:underline">+8801811222222</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <FaEnvelope className="text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Write To Us</h3>
                  <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
                  <p className="text-gray-600">
                    <a href="mailto:customer@exclusive.com" className="hover:underline">customer@exclusive.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white p-6 shadow-md rounded-lg lg:rounded-r-lg">
            <form className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="tel"
                  placeholder="Your Phone *"
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors w-full lg:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
