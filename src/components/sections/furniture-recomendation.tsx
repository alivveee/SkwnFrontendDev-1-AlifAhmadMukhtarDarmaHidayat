"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: "bedroom",
    name: "Bedroom",
    description:
      "Create a peaceful sanctuary with our bedroom furniture collections",
  },
  {
    id: "living-room",
    name: "Living Room",
    description:
      "Enjoy a great living room aesthetics with your family\nDesigns created for increased comfortability",
  },
  {
    id: "home-office",
    name: "Home Office",
    description: "Productive and stylish workspace solutions for your home",
  },
  {
    id: "gaming-room",
    name: "Gaming Room",
    description: "Level up your gaming experience with specialized furniture",
  },
];

export default function FurnitureRecommendations() {
  const [activeCategory, setActiveCategory] = useState("living-room");

  return (
    <section className="flex flex-col md:flex-row gap-10 px-section py-6 md:py-20 bg-white">
      {/* Right side */}
      <div className="flex flex-col w-full md:w-[434px] flex-shrink-0 order-1 md:order-2 text-center md:text-left">
        <h3 className="mb-2 text-[14px] md:text-2xl text-secondary">
          Categories
        </h3>
        <h2 className="mb-8 text-[18px] md:text-5xl font-bold text-secondary">
          Furniture Sets Recommendations
        </h2>

        <div className="mt-4 space-y-4 text-left">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer rounded-lg p-4 transition-colors ${
                activeCategory === category.id
                  ? "bg-primary"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <h3 className="mb-1 text-xl font-semibold text-secondary">
                {category.name}
              </h3>
              {activeCategory === category.id && (
                <p className="text-sm text-secondary whitespace-pre-line">
                  {category.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Left side - Room images */}
      <div className="flex w-full gap-2 order-2 md:order-1">
        <div className="flex w-full gap-2">
          {/* Image 1 */}
          <div className="w-full md:w-1/5">
            <div className="overflow-hidden rounded-lg h-[132px] md:h-full">
              <Image
                src="/images/furniture-set/1.jpg"
                alt="Living room with light gray sofa"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full md:w-1/5">
            <div className="overflow-hidden rounded-lg h-[132px] md:h-full">
              <Image
                src="/images/furniture-set/2.jpg"
                alt="Living area with tan sofa and mirror"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="w-full md:w-3/5">
            <div className="overflow-hidden rounded-lg h-[132px] md:h-full">
              <Image
                src="/images/furniture-set/3.jpg"
                alt="TV setup"
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
