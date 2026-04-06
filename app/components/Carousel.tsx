"use client";

import { useRef } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Carousel = ({ images }: { images: string[] }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <IoChevronBack size={20} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-scroll scrollbar-hide scroll-smooth px-10"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="min-w-[180px] sm:min-w-[200px] md:min-w-[230px] lg:min-w-[250px] aspect-[3/4] bg-gray-700 rounded overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <IoChevronForward size={20} />
      </button>
    </div>
  );
};

export default Carousel;