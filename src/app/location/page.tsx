import React from "react";
import Head from "next/head";
// import Map from "../components/Map";

export default function Location() {
  const locations = [
    {
      id: 1,
      name: "Downtown Bagel Haven",
      address: "123 Main Street, Bagelville, BG 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 6AM-4PM, Sat: 7AM-5PM, Sun: 8AM-3PM",
    },
    {
      id: 2,
      name: "Westside Bagel Haven",
      address: "456 Sunset Blvd, Bagelville, BG 12346",
      phone: "(555) 987-6543",
      hours: "Mon-Fri: 6AM-4PM, Sat-Sun: 7AM-4PM",
    },
  ];

  return (
    <>
      <Head>
        <title>Locations - Bagel Haven</title>
        <meta
          name="description"
          content="Find a Bagel Haven location near you"
        />
      </Head>

      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-800 mb-4">
              Our Locations
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the Bagel Haven nearest you and stop by for a freshly baked
              bagel today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* <Map /> */}
            </div>

            {/* Locations List */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Store Locations
                </h2>

                <div className="space-y-8">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                        {location.name}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <p className="flex items-start">
                          <span className="mr-2">📍</span>
                          <span>{location.address}</span>
                        </p>
                        <p className="flex items-start">
                          <span className="mr-2">📞</span>
                          <span>{location.phone}</span>
                        </p>
                        <p className="flex items-start">
                          <span className="mr-2">🕒</span>
                          <span>{location.hours}</span>
                        </p>
                      </div>
                      <div className="mt-4">
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            location.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-medium"
                        >
                          Get Directions
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parking Info */}
          <div className="mt-12 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Parking Information
            </h2>
            <p className="text-gray-600 mb-4">
              Free parking is available in our dedicated lot behind the downtown
              store location.
            </p>
            <p className="text-gray-600">
              The Westside location offers street parking and there is a public
              parking garage one block away on Oak Street.
            </p>
          </div>

          {/* Public Transportation */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Public Transportation
            </h2>
            <p className="text-gray-600 mb-4">
              Our downtown location is easily accessible via public
              transportation:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Bus lines 10, 14, and 32 stop directly in front of our store
              </li>
              <li>The Central Station subway stop is a 5-minute walk away</li>
              <li>City bike share rack is located across the street</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
