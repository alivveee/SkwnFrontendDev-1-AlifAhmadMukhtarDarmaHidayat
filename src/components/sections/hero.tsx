import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdArrowForwardIos, MdOutlinePlayCircle } from "react-icons/md";

export default function Hero() {
  return (
    <section className="mt-[64px] md:mt-[100px] xl:mt-[141px] flex flex-col md:flex-row h-fit md:max-h-[709px]">
      {/* Hero Content */}
      <div className="flex flex-1 w-full px-section md:pr-0">
        <div className="flex flex-col justify-center py-8 w-full md:max-w-[712px] items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-secondary">
            The kind of <span className="text-[#817253]">furniture</span> you
            have been looking for
          </h1>

          <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full justify-center md:justify-start text-soft-brown">
            <button className="btn-primary flex items-center justify-center gap-2 w-[282px] md:w-[314px] xl:w-[344px] py-[18px] md:py-[22px] text-md md:text-2xl font-normal rounded-xl">
              <IoMdSearch /> SEARCH CATALOG
            </button>
            <button className="flex items-center justify-center gap-2 w-[282px] md:w-[314px] xl:w-[344px] py-[18px] md:py-[22px] text-md md:text-2xl font-normal border border-secondary hover:bg-secondary/5 rounded-xl transition-colors">
              <MdOutlinePlayCircle /> WATCH VIDEOS
            </button>
          </div>
        </div>
      </div>

      {/* Hero Product */}
      <div className="relative w-full md:w-[522px] h-[229px] md:h-[709px]">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero"
          fill
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end gap-2 pl-6 md:pl-12 pb-8 md:pb-24">
          <span className="w-fit px-4 py-2 text-lg md:text-2xl bg-white/70 rounded-md">
            $329
          </span>
          <h3 className="text-3xl md:text-[64px] text-white">Pösht Sofa</h3>
          <button className="flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 text-sm md:text-md w-fit text-white bg-black/70 hover:bg-black/90 rounded-md transition">
            VIEW DETAILS <MdArrowForwardIos size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
