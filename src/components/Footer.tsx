import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow-800 text-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/api/placeholder/80/80"
                alt="Bagel Haven Logo"
                className="h-10 w-10 rounded-full mr-3 bg-white"
              />
              <h2 className="text-xl font-bold">Bagel Haven</h2>
            </div>
            <p className="text-yellow-200 mb-6">
              Handcrafted bagels made fresh daily with the finest ingredients
              since 1995.
            </p>
            <div className="flex space-x-4">
              {["facebook", "instagram", "twitter", "yelp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-yellow-200 hover:text-white transition-colors duration-300"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="24"
                      height="24"
                      fill="none"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Locations", path: "/location" },
                { name: "Contact", path: "/contact" },
                { name: "Catering", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-yellow-200 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow-700 pb-2">
              Hours
            </h3>
            <ul className="space-y-2">
              <li className="text-yellow-200">
                <span className="block font-medium">Mon-Fri:</span>
                <span>6:00 AM - 4:00 PM</span>
              </li>
              <li className="text-yellow-200">
                <span className="block font-medium">Saturday:</span>
                <span>7:00 AM - 5:00 PM</span>
              </li>
              <li className="text-yellow-200">
                <span className="block font-medium">Sunday:</span>
                <span>8:00 AM - 3:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-yellow-700 pb-2">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-yellow-200 flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Main Street, Bagelville, BG 12345</span>
              </li>
              <li className="text-yellow-200 flex items-start">
                <span className="mr-2">📞</span>
                <a
                  href="tel:+15551234567"
                  className="hover:text-white"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="text-yellow-200 flex items-start">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:info@bagelhaven.com"
                  className="hover:text-white"
                >
                  info@bagelhaven.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-700 mt-12 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-yellow-300">
            &copy; {new Date().getFullYear()} Bagel Haven. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-yellow-300 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
