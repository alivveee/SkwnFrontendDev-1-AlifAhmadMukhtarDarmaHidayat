import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function WhyUs() {
  return (
    <section className="px-section h-[486px] flex flex-col justify-center text-center md:text-left gap-8 md:gap-10 bg-secondary text-primary">
      {/* Heading */}
      <h2 className="text-md">WHY CHOOSE US</h2>
      <h1 className="text-2xl md:text-[64px] font-bold leading-tight">
        We care about details and the quality of our products
      </h1>

      {/* Features */}
      <div className="flex flex-wrap gap-4 md:gap-6 justify-between text-lg font-bold text-left">
        {/* Feature 1 */}
        <div className="flex items-center gap-4">
          <div className="size-10 bg-[#8a8a6b] rounded-md flex items-center justify-center">
            <IoMdSearch />
          </div>
          <p className="text-md md:text-2xl leading-snug">
            MANUFACTURED WITH <br /> QUALITY MATERIALS
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4">
          <div className="size-10 bg-[#8a8a6b] rounded-md flex items-center justify-center">
            5
          </div>
          <p className="text-xl md:text-2xl leading-snug">
            5 YEARS OF WARRANTY <br /> FOR EACH PRODUCT
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4">
          <div className="size-10 bg-[#8a8a6b] rounded-md flex items-center justify-center">
            <MdOutlineWorkOutline />
          </div>
          <p className="text-xl md:text-2xl leading-snug">
            20 YEARS OF EXPERTISE
          </p>
        </div>
      </div>
    </section>
  );
}
