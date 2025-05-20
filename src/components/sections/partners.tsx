import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="py-6 md:py-12 flex flex-col md:flex-row justify-between items-center max-h-[305px] px-section text-center md:text-left bg-background">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-8xl font-bold">25+</h1>
        <h1 className="text-md">PARTNERED BRANDS</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 lg:gap-16">
        {["gusto", "stripe", "treehouse", "upwork"].map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center h-[52px]"
          >
            <Image
              src={`/images/brands/${brand}.png`}
              alt={brand}
              height={52}
              width={200}
              className="object-contain h-[24px] md:h-[52px] w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
