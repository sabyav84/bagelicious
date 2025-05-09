import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bagel Haven - Fresh Bagels Daily</title>
        <meta
          name="description"
          content="Welcome to Bagel Haven - Artisanal Bagels in the heart of the city"
        />
      </Head>

      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-yellow-100 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-yellow-800 mb-4">
                  Freshly Baked Artisanal Bagels
                </h1>
                <p className="text-lg md:text-xl text-yellow-700 mb-8">
                  Handcrafted with love since 1995. Enjoy the perfect
                  combination of crispy exterior and chewy inside.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/menu"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300"
                  >
                    View Our Menu
                  </Link>
                  <Link
                    href="/location"
                    className="bg-white hover:bg-gray-100 text-yellow-700 font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300 border border-yellow-300"
                  >
                    Find Our Store
                  </Link>
                </div>
              </div>
              <div className="md:flex-1">
                <div className="h-64 md:h-full relative">
                  <div className="absolute inset-0 bg-yellow-300 opacity-50 md:opacity-0"></div>
                  <img
                    src="https://img1.wsimg.com/isteam/stock/47050/:/rs=w:740,cg:true,m"
                    alt="Assorted bagels"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Bagels */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Most Popular Bagels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Everything Bagel",
                  price: "$3.25",
                  image:
                    "https://img1.wsimg.com/isteam/ip/cc80bcd2-67f9-40c9-b015-755584506398/bagel_tray-removebg-preview.png/:/rs=w:645,cg:true,m",
                },
                {
                  name: "Sesame Seed Bagel",
                  price: "$2.95",
                  image:
                    "https://img1.wsimg.com/isteam/ip/cc80bcd2-67f9-40c9-b015-755584506398/bagel_tray-removebg-preview.png/:/rs=w:645,cg:true,m",
                },
                {
                  name: "Blueberry Bagel",
                  price: "$3.50",
                  image:
                    "https://img1.wsimg.com/isteam/ip/cc80bcd2-67f9-40c9-b015-755584506398/bagel_tray-removebg-preview.png/:/rs=w:645,cg:true,m",
                },
              ].map((bagel, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={bagel.image}
                    alt={bagel.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {bagel.name}
                    </h3>
                    <p className="text-yellow-600 font-bold mt-2">
                      {bagel.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/menu"
                className="inline-block text-yellow-600 hover:text-yellow-800 font-semibold text-lg"
              >
                See our full menu →
              </Link>
            </div>
          </div>

          {/* Store Hours */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Store Hours
            </h2>
            <div className="max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-right font-medium text-gray-600">
                  Monday - Friday:
                </div>
                <div>6:00 AM - 4:00 PM</div>
                <div className="text-right font-medium text-gray-600">
                  Saturday:
                </div>
                <div>7:00 AM - 5:00 PM</div>
                <div className="text-right font-medium text-gray-600">
                  Sunday:
                </div>
                <div>8:00 AM - 3:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
