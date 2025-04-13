"use client";

import perfil from '../../public/perfil2.jpg'

import Image from "next/image";
import { useState } from "react";

export const About = () => {
  const [skills, setSkills] = useState(2);

  return (
    <section className="w-full pt-2 pb-4 md:pt-20 relative" id="about">
      <h1 className="font-archivo-black font-black uppercase text-xl md:text-4xl text-center bg-indigo-950 sticky md:static top-0 z-50">
        About Me
      </h1>
      <div className="w-11/12 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pt-10 md:pt-0 md:h-96 flex justify-center items-center relative">
            {/* <!-- capa de la foto --> */}
            <div className="absolute w-48 md:w-72 h-48 md:h-72 transform rotate-6 bg-amber-500 z-30"></div>

            {/* <!-- foto --> */}
            <div className="bg-about w-48 md:w-72 h-48 md:h-72 relative z-40 shadow-lg">
              <Image src={perfil} alt='foto perfil' className={`object-cover object-top`} fill/>
            </div>
          </div>
          {/* <!-- Fin foto --> */}
          <div className="p-10 w-full md:w-1/2 flex justify-center items-center text-xl">
            I&apos;m a passionate and creative full stack developer with a love
            for technologies. Known for my problem-solving skills and ability to
            work under pressure, I lead projects with discipline and a
            commitment to continuous learning. My diverse skill set allows me to
            deliver innovative solutions efficiently and effectively.
          </div>
        </div>

        <div>
          <h2 className="uppercase text-xl sm:text-2xl text-center text-amber-500 font-black font-archivo-black pb-1">
            Skills
          </h2>
          <div>
            <div className="flex gap-3 mb-5">
              <button
                className={`px-2 py-1 w-24 text-black rounded-md ${
                  skills === 1
                    ? "bg-amber-500 text-indigo-950 font-medium"
                    : "bg-slate-500 text-white"
                }`}
                onClick={() => setSkills(1)}
              >
                FontEnd
              </button>
              <button
                className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                  skills === 2
                    ? "bg-amber-500 text-indigo-950 font-medium"
                    : "bg-slate-500 text-white"
                }`}
                onClick={() => setSkills(2)}
              >
                BackEnd
              </button>
              <button
                className={`px-2 py-1 w-24 bg-gradient-to-b text-black rounded-md ${
                  skills === 3
                    ? "bg-amber-500 text-indigo-950 font-medium"
                    : "bg-slate-500 text-white"
                }`}
                onClick={() => setSkills(3)}
              >
                Other
              </button>
            </div>
            {skills === 1 ? (
              <>
                <h3 className="text-center uppercase text-white bg-amber-500 p-4 mb-2 text-xl md:text-2xl font-black font-archivo-black">
                  Frontend
                </h3>
                <ul className="list-disc ps-5">
                  <li>HTML, CSS, JavaScript/Typescript</li>
                  <li>Next Js</li>
                  <li>React Js, Vue Js.</li>
                  <li>Redux, Context API, Zustand</li>
                  <li>
                    Styled Components, Bootstrap, Tailwind Css, Saas, Element
                    Plus, Material UI
                  </li>
                </ul>
              </>
            ) : skills === 2 ? (
              <>
                <h3 className="text-center uppercase text-white bg-amber-500 p-4 mb-2 text-xl md:text-2xl font-black font-archivo-black">
                  Backend
                </h3>
                <ul className="list-disc ps-5">
                  <li>SQL</li>
                  <li>Node, Express</li>
                  <li>Prisma</li>
                  <li>Mongoose, MongoDB</li>
                  <li>Sequelize, PostgreSQL</li>
                </ul>
              </>
            ) : (
              <>
              <h3 className="text-center uppercase text-white bg-amber-500 p-4 mb-2 text-xl md:text-2xl font-black font-archivo-black">
                  Other Skills
                </h3>
                <ul className="list-disc ps-5">
                  <li>Git, Github, Figma</li>
                  <li>Jest</li>
                  <li>Swagger</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};