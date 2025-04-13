"use client";

import Image from "next/image";
import jana from "../../public/jana.jpg";
import kassya from "../../public/kassya.jpg";
import leangineers from "../../public/leangineers.jpg";
import tasky from "../../public/tasky.jpg";

import { useState } from "react";

const cards = ["Kassya", "Jana", "Leangineers", "Tasky"];

const Project = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      className="relative pt-2 pb-4 md:pt-20 w-11/12 max-w-[1200px] mx-auto"
      id="projects"
    >
      <h1
        className="uppercase text-2xl md:text-4xl font-black font-archivo-black sticky md:static top-0 text-center text-amber-500 z-30 bg-indigo-950 pb-10"
        id="projects"
      >
        Outstanding Projects
      </h1>
      {/* cards */}
      <div className={`flex justify-center items-center gap-5 w-full pt-5`}>
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-72 rounded-4xl bg-amber-500 transition-all duration-500 shadow relative overflow-hidden flex justify-start items-end p-3 border-4 border-amber-500 ${
              activeIndex === i ? "w-[28rem]" : "w-16"
            }`}
            onClick={() => setActiveIndex(i)}
          >
            {/* Imagen de fondo con z-0 */}
            <Image
              src={
                i === 0
                  ? kassya
                  : i === 1
                  ? jana
                  : i === 2
                  ? leangineers
                  : tasky
              }
              alt="proyecto"
              className={`object-cover ${
                activeIndex === i ? "scale-200" : ""
              } transition-all duration-500 z-0`}
              fill
            />

            {/* Inicial con z-10 para estar por encima */}
            <div
              className={`h-10 w-10 bg-amber-500 text-white flex items-center justify-center rounded-full z-10 relative font-black text-2xl`}
            >
              {i === 0 ? "K" : i === 1 ? "J" : i === 2 ? "L" : "T"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
