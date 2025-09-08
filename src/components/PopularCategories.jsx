import React from "react";

export default function PopularCategories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Popular Searches */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Popular Searches</h2>

        {/* Products */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Products :</span>{" "}
          Coca Cola | Pepsi | Sprite | Thums Up | Fanta | Mountain Dew | Mirinda | Red Bull | Monster Energy | Sting | Slice | Maaza | Tropicana | Real Juice | Paper Boat | B Natural | Minute Maid
        </p>

        {/* Brands */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Brands :</span>{" "}
          Coca Cola | PepsiCo | Red Bull | Monster | Sting | Tropicana | Real | Paper Boat | Maaza | Slice | B Natural | Minute Maid | Appy Fizz | 7UP | Mountain Dew
        </p>

        {/* Categories */}
        <p className="text-gray-700 mb-6">
          <span className="font-semibold">Categories :</span>{" "}
          Carbonated Drinks | Energy Drinks | Juices | Flavored Water | Iced Tea | Cold Coffee | Mocktails | Kombucha | Sparkling Water | Diet & Zero Sugar Drinks | Kids Beverages | Seasonal Specials
        </p>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-gray-800">
          <p>Carbonated Soft Drinks</p>
          <p>Energy Drinks</p>
          <p>Juices & Nectars</p>
          <p>Flavored Water</p>
          <p>Cold Coffee & Milk Shakes</p>

          <p>Iced Tea</p>
          <p>Mocktails</p>
          <p>Sparkling Water</p>
          <p>Zero Sugar & Diet Drinks</p>
          <p>Kids Special Beverages</p>

          <p>Premium Imported Drinks</p>
          <p>Kombucha & Probiotic Drinks</p>
          <p>Seasonal Specials</p>
          <p>Party Packs</p>
          <p>Mini Cans</p>
        </div>
      </div>
    </div>
  );
}
