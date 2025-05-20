"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    name: "Und Chair",
    price: "$329",
    image: "/images/products/chair.jpg",
  },
  {
    id: 2,
    name: "Sofa Und",
    price: "$599",
    image: "/images/products/sofa.jpg",
  },
  {
    id: 3,
    name: "Wooden Table",
    price: "$449",
    image: "/images/products/table.jpg",
  },
  {
    id: 4,
    name: "Wall Shelf",
    price: "$199",
    image: "/images/products/shelf.jpg",
  },
  {
    id: 5,
    name: "Green Sofa",
    price: "$129",
    image: "/images/products/green-sofa.jpg",
  },
];

export default function ProductShowcase() {
  const [, setActiveIndex] = useState(1); // mulai dari slide ke-2
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const nextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <section className="bg-secondary py-8 md:py-[80px] px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-primary text-sm md:text-lg font-medium mb-2">
              OUR PRODUCTS
            </h3>
            <h2 className="text-primary text-lg md:text-5xl font-semibold">
              This month&apos;s best seller
            </h2>
          </div>
          <button className="btn-primary px-4 md:px-6 py-3 transition-colors text-sm">
            SEE MORE
          </button>
        </div>

        <div className="relative h-[400px] w-full z-0" ref={containerRef}>
          <Swiper
            onSwiper={setSwiperInstance}
            onSlideChange={handleSlideChange}
            speed={600}
            initialSlide={1}
            slidesPerView={"auto"}
            spaceBetween={36}
            loop={true}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            className="w-full h-full"
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                {({ isActive }) => (
                  <div
                    className={`relative rounded-lg overflow-hidden bg-gray-100 transition-all duration-300 
    ${
      isActive
        ? "md:h-[472px] md:w-[354px] h-[360px] w-[260px]"
        : "md:h-[400px] md:w-[300px] h-[300px] w-[220px]"
    }
  `}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>

                    {isActive && (
                      <div className="absolute bottom-4 left-0 p-6 text-white">
                        <div className="bg-white/50 text-secondary px-4 py-2 rounded-lg inline-block mb-4 text-md md:text-2xl">
                          {product.price}
                        </div>
                        <h3 className="text-2xl md:text-5xl text-white font-normal">
                          {product.name}
                        </h3>
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Arrow Buttons */}
          <div className="md:hidden absolute inset-0 flex justify-between items-center px-2 z-10 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center pointer-events-auto"
              aria-label="Previous slide"
            >
              <BiChevronLeft className="w-5 h-5 text-secondary" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center pointer-events-auto"
              aria-label="Next slide"
            >
              <BiChevronRight className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>

        {/* Desktop Arrow Buttons */}
        <div className="hidden md:flex justify-end gap-8 mt-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-opacity-90 transition-colors"
            aria-label="Previous slide"
          >
            <BiChevronLeft className="w-6 h-6 text-secondary" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-opacity-90 transition-colors"
            aria-label="Next slide"
          >
            <BiChevronRight className="w-6 h-6 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
}
