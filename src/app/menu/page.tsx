import React from "react";
import Head from "next/head";
// import BagelCard from "../components/BagelCard";

export default function Menu() {
  // Group bagels by category
  const bagelMenu = {
    "Classic Bagels": [
      {
        name: "Plain",
        price: 2.5,
        description: "Our traditional hand-rolled bagel",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Everything",
        price: 3.25,
        description: "Topped with sesame, poppy, onion, garlic and salt",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Sesame Seed",
        price: 2.95,
        description: "Coated with toasted sesame seeds",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Poppy Seed",
        price: 2.95,
        description: "Topped with crunchy poppy seeds",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
    ],
    "Specialty Bagels": [
      {
        name: "Cinnamon Raisin",
        price: 3.5,
        description: "Sweet dough with cinnamon and juicy raisins",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Blueberry",
        price: 3.5,
        description: "Sweet bagel with real blueberries baked in",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Asiago Cheese",
        price: 3.75,
        description: "Topped with aged Asiago cheese",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Jalapeño Cheddar",
        price: 3.75,
        description: "Spicy jalapeños and sharp cheddar cheese",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
    ],
    "Cream Cheese Spreads": [
      {
        name: "Plain",
        price: 2.0,
        description: "Classic smooth cream cheese",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Vegetable",
        price: 2.5,
        description: "With diced vegetables and herbs",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Scallion",
        price: 2.5,
        description: "With fresh chopped scallions",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Strawberry",
        price: 2.75,
        description: "Sweet spread with real strawberry pieces",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
    ],
    "Bagel Sandwiches": [
      {
        name: "Lox Deluxe",
        price: 11.95,
        description:
          "Smoked salmon, cream cheese, capers, red onion and tomato",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "BLT Bagel",
        price: 8.95,
        description: "Bacon, lettuce, tomato, and mayo",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Veggie Delight",
        price: 7.95,
        description:
          "Avocado, cucumber, sprouts, tomato, and herb cream cheese",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
      {
        name: "Breakfast Bagel",
        price: 6.95,
        description: "Egg, cheese, and choice of bacon or sausage",
        image:
          "https://a.mktgcdn.com/p/mXaHEmR7dKLBQSXo593fyy2tCn2eFa1WlJNSiwRHfxs/196x261.jpg",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Menu - Bagel Haven</title>
        <meta
          name="description"
          content="Explore our wide variety of freshly baked bagels and spreads"
        />
      </Head>

      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-800 mb-4">
              Our Menu
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All of our bagels are made fresh daily with the finest
              ingredients, hand-rolled and baked to perfection.
            </p>
          </div>

          {/* Menu sections */}
          {Object.entries(bagelMenu).map(([category, items]) => (
            <div
              key={category}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-yellow-300">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* {items.map((item, i) => (
                  <BagelCard
                    key={i}
                    bagel={item}
                  />
                ))} */}
                {items.map((bagel, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-gray-200 py-3"
                  >
                    <span className="font-medium">{bagel.name}</span>
                    <span className="text-yellow-700">{bagel.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Beverages */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Beverages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Coffee", price: "S $2.50 / L $3.25" },
                { name: "Espresso", price: "S $3.00 / D $4.00" },
                { name: "Cappuccino", price: "$4.25" },
                { name: "Latte", price: "$4.50" },
                { name: "Fresh Orange Juice", price: "$3.75" },
                { name: "Iced Tea", price: "$2.75" },
              ].map((drink, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border-b border-gray-200 py-3"
                >
                  <span className="font-medium">{drink.name}</span>
                  <span className="text-yellow-700">{drink.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
