import React from "react";

const steps = [
  {
    id: 1,
    title: "Browse Cold Drinks",
    desc: "Explore a wide range of refreshing beverages – Maaza, Frooti, Appy, Coca-Cola, Pepsi, and many more.",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png", // Cold drink bottle icon
  },
  {
    id: 2,
    title: "Add to Cart",
    desc: "Select your favorite packs, combos, and flavours with exciting offers & discounts.",
    img: "https://cdn-icons-png.flaticon.com/512/1170/1170678.png", // Shopping cart icon
  },
  {
    id: 3,
    title: "Fast Delivery",
    desc: "Get your chilled cold drinks delivered at your doorstep in minutes – always fresh & ready to enjoy!",
    img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png", // Delivery icon
  },
];

function StepCard({ img, title, desc }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition duration-300 md:block flex flex-row items-center space-x-4">
      <img
        src={img}
        alt={title}
        className="w-20 h-20 flex-shrink-0 md:mx-auto md:mb-4"
      />
      <div className="md:text-center">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StepCard key={step.id} {...step} />
        ))}
      </div>
    </div>
  );
}
