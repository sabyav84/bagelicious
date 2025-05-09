import React from "react";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Bagel Haven</title>
        <meta
          name="description"
          content="Learn about Bagel Haven's history and our passion for quality bagels"
        />
      </Head>

      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-800 mb-4">
              About Bagel Haven
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our story of bringing authentic, hand-crafted bagels to our
              community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYYQuIysHTdh0rCp8iShwzulOYA6lnnLYPA&s"
                  alt="Bagel shop owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:flex-1 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1995 by the Goldman family, Bagel Haven started as
                  a small family business with a big dream: to bring authentic
                  New York-style bagels to our community.
                </p>
                <p className="text-gray-600 mb-4">
                  Sarah Goldman learned the art of bagel making from her
                  grandfather, who immigrated to New York from Eastern Europe in
                  the 1930s. Using his traditional recipes and techniques, Sarah
                  has continued the family legacy of creating hand-rolled,
                  kettle-boiled bagels that honor the authentic bagel-making
                  process.
                </p>
                <p className="text-gray-600">
                  What started as a tiny shop with just five bagel varieties has
                  grown into a beloved local institution offering dozens of
                  flavors, spreads, and bagel sandwiches that keep our customers
                  coming back day after day.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Ingredients",
                  description:
                    "We source only the finest ingredients, from our high-gluten flour to our locally sourced toppings.",
                  icon: "🌾",
                },
                {
                  title: "Traditional Methods",
                  description:
                    "Every bagel is hand-rolled, kettle-boiled, and baked on wooden boards for that authentic texture and flavor.",
                  icon: "🧁",
                },
                {
                  title: "Community Focus",
                  description:
                    "We're proud to be a gathering place for our neighborhood and to support local causes and events.",
                  icon: "🏙️",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Goldman",
                  title: "Founder & Head Baker",
                  image: "/api/placeholder/400/400",
                },
                {
                  name: "Michael Chen",
                  title: "Pastry Chef",
                  image: "/api/placeholder/400/400",
                },
                {
                  name: "Leila Patel",
                  title: "Store Manager",
                  image: "/api/placeholder/400/400",
                },
                {
                  name: "David Thompson",
                  title: "Coffee Specialist",
                  image: "/api/placeholder/400/400",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {person.name}
                    </h3>
                    <p className="text-gray-600">{person.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
