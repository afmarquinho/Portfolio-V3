import Image from "next/image";
import foto from "../../public/foto.png";

export const Hero = () => {
  return (
    <>
      <div className="pt-10 md:pt-20 h-screen bg-custom-gradient relative">
        {/* Capa degradada */}

        {/* Contenido del Hero */}
        <div className="w-full h-full max-w-[1100px] flex flex-col md:flex-row mx-auto justify-center items-center">
          {/* Espacio para la foto */}
          <div className={`relative`}>
            <div className="w-52 md:w-92 h-52 md:h-92 bg-amber-300 rounded-full border-8 md:border-[16px] border-amber-500 overflow-hidden relative  transition-all duration-300">
              <Image
                src={foto}
                alt="foto perfil"
                className={`object-cover object-top  scale-125`}
                fill
              />
            </div>
            <button className={`w-32 md:w-24 h-10 md:h-24 rounded-full flex flex-row md:flex-col items-center justify-center text-white  md:absolute bg-indigo-700 right-[-20] top-1/2 mx-auto mt-2 md:mt-0 font-bold cursor-pointer transition-all duration-300 md:text-lg`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              CV
            </button>
          </div>

          {/* Texto del Hero */}
          <div className="flex-1 mx-auto p-5 transition-all duration-300">
            <div className="w-full max-w-[35rem] space-y-5 md:space-y-10 md:px-5">
              <p className="text-2xl md:text-5xl text-center md:text-left">
                <span className=" md:text-amber-500">I&apos;m</span> Full Stack
                Developer <br />{" "}
                <span className="md:text-amber-500 font-bold text-5xl md:text-7xl">
                  Marco Fernández
                </span>
              </p>
              {/* Presentacion */}
              <p className="md:text-xl bg-indigo-950 md:bg-transparent md:text p-2">
                Innovative Full Stack Developer driven by perfection and
                continuous learning. Transforming your boldest ideas into
                reality with creativity and precision. Let&apos;s create
                something extraordinary together.
              </p>
            </div>
            {/* Fin Presetancion */}
          </div>
          {/* Fin del texto del hero */}
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 opacity-45 hidden md:flex flex-row justify-center items-center p-5 gap-5 font-semibold`}
        >
          React <div className={`h-3 w-3 rounded-full bg-white`} />
          Next Js <div className={`h-3 w-3 rounded-full bg-white`} />
          Node <div className={`h-3 w-3 rounded-full bg-white`} />
          Prisma <div className={`h-3 w-3 rounded-full bg-white`} />
          Express <div className={`h-3 w-3 rounded-full bg-white`} />
          SQL <div className={`h-3 w-3 rounded-full bg-white`} />
          NoSQL <div className={`h-3 w-3 rounded-full bg-white`} />
          And more...{" "}
        </div>
      </div>
    </>
  );
};
