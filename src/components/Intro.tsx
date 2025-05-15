"use client";
import { useEffect, useState } from "react";
import "./css/intro.module.css";

export const Intro = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (show) {
      // Iniciar animación de entrada
      setAnimate(true);
    } else {
      // Iniciar animación de salida
      setAnimate(false);
    }
  }, [show]);

  return (
    <div
      className={`fixed w-full h-full inset-0 bg-indigo-950 z-[100] p-10  transition-all duration-300 overflow-hidden  ${
        !show ? "-translate-y-full delay-1000" : "translate-y-0"
      }`}
    >
      <h1
        className={`text-lg sm:text-xl md:text-2xl lg:text-5xl text-amber-500 font-black uppercase tracking-[.25em]  transition-all duration-300 -translate-x-full opacity-0
           ${
             animate
               ? "translate-x-0 opacity-100"
               : "-translate-x-full opacity-0"
           }
        
        `}
      >
        Marco Fernández
      </h1>
      <p
        className={`text-indigo-800 text-5xl sm:text-2xl md:text-[8rem] xl:text-[12rem]/40 font-black uppercase transition-all duration-1000 delay-200 -translate-y-[20%] opacity-0
          ${
            animate
              ? "translate-y-0 opacity-100"
              : "-translate-y-[20%] opacity-0"
          }
          
          `}
      >
        <span>
          Full <br className={`md:hidden`} />
          stack
        </span>{" "}
        <br />
        <span>Developer</span>
      </p>

      <p
        className={`text-amber-500 text-center text-xl md:text-2xl lg:text-4xl font-black mt-2 md:mt-4 uppercase transition-all duration-400 delay-300 -translate-x-full opacity-0 ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }
        
        `}
      >
        Clean code, smooth interfaces, and solid logic.
      </p>
      <button
        className={`block relative mx-auto w-36 h-12 uppercase font-bold mt-8 z-20 transition-all duration-300 delay-600  -translate-y-full opacity-0
          ${
            animate
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
          
          `}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onClick={() => setShow(false)}
      >
        <span className="explore relative z-20 text-white">Explore</span>
        <span
          className={`absolute top-0 left-0  w-1/2 h-full bg-amber-500 transform  z-10 opacity-70 transition-all duration-500 ease-[cubic-bezier(.32,-0.6,.72,1.75)] ${
            isActive
              ? "translate-x-full"
              : "translate-x-0 skew-x-[15deg] -translate-y-1"
          }`}
        />
        <span
          className={`absolute top-0 right-0 w-1/2 h-full bg-indigo-500 transform  z-10 opacity-70 transition-all duration-500 ease-[cubic-bezier(.32,-0.6,.72,1.75)] ${
            isActive
              ? "-translate-x-full"
              : "translate-x-0 skew-x-[15deg] translate-y-1"
          }`}
        />
      </button>
    </div>
  );
};
