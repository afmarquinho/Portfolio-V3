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
      <div
        className={`flex justify-center items-center gap-1 md:gap-5 w-full pt-5`}
      >
        {cards.map((_, i) => (
          // Agregar psudelemento a este div con un capa ligeramente oscura, ojo de que puede afectar los z-index, el orden de los elementos debe ser: este div, encima el psudoelemento, luego la imagen, luego el texto (p y span)
          <div
            key={i}
            className={`h-72 rounded-4xl bg-amber-500 transition-all duration-500 shadow relative overflow-hidden flex justify-start items-end p-3 border-4 border-amber-500 ${
              activeIndex === i
                ? "w-[28rem] card-active-with-overlay"
                : "w-16 card-with-overlay"
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
              className={`flex ${
                activeIndex === i ? "flex-row-reverse items-end" : "flex-col"
              } justify-center gap-2 transition-all duration-500 relative z-20`}
            >
              <div
                className={`text-white font-bold transition-all duration-500 origin-left ${
                  activeIndex === i ? "rotate-0 " : "-rotate-90 translate-x-2"
                }`}
              >
                {i === 0
                  ? "Kassya"
                  : i === 1
                  ? "Jana"
                  : i === 2
                  ? "Leangineer"
                  : "Tasky"}
                <button
                  className={`bg-white hover:bg-indigo-700 hover:text-white transition-all duration-500 text-black px-2 py-1 rounded-xl font-normal mt-2 ${
                    activeIndex === i ? "block" : "hidden"
                  }`}
                >
                  + More info
                </button>
              </div>

              <span
                className={`h-6 w-6 lg:h-8 lg:w-8 bg-amber-500 text-white flex items-center justify-center rounded-full z-10 font-black md:text-lg lg:text-xl`}
              >
                {i === 0 ? "K" : i === 1 ? "J" : i === 2 ? "L" : "T"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;
