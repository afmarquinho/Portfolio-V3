export const Services = () => {
    return (
      <div className="w-11/12 md:w-full md:bg-amber-500 py-5 mx-auto relative">
        <h1 className="text-2xl md:text-4xl mb-5 font-black font-archivo-black text-center text-amber-500 md:text-white sticky top-0 bg-indigo-950 md:bg-amber-500">
          Services
        </h1>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row">
          {/* Primer Servicio */}
          <div className="w-full md:w-1/3 flex gap-2 py-5 px-0 md:px-2 bg-indigo-950 md:bg-transparent">
            <div className="text-lg md:text-xl lg:text-4xl text-amber-500 md:text-indigo-950 font-black font-archivo-black">
              01
            </div>
            <div>
              <h1 className="text-amber-500 md:text-indigo-950 font-archivo-black text-lg md:text-xl lg:text-4xl">
                Custom Web Application Development
              </h1>
              <p>
                Building tailored web applications with optimal frontend and
                backend performance.
              </p>
              <p className="text-amber-500 md:text-indigo-950">
                Technologies: React, NextJs, Prisma, Node.js, PostgreSQL, Mongo DB.
              </p>
            </div>
          </div>
          {/* Fin primer servicio */}
  
          {/* Segundo Servicio */}
  
          <div className="w-full md:w-1/3 flex gap-2 py-5 px-0 md:px-2 bg-amber-500 md:bg-indigo-950 ">
            <div className="text-lg md:text-xl lg:text-4xl text-indigo-950 md:text-amber-500 font-black font-archivo-black">
              02
            </div>
            <div>
              <h1 className="text-indigo-950 md:text-amber-500 font-archivo-black text-lg md:text-xl lg:text-4xl">
                API Development & Integration
              </h1>
              <p>
                Designing secure, efficient APIs to enhance app functionality.
              </p>
              <p className="text-indigo-950 md:text-amber-500">
                Technologies: REST, Node.js, Express, Sequelize. <span className={`font-bold`}>SQL</span>
              </p>
            </div>
          </div>
          {/* Fin Segundo servicio */}
  
          {/* Terceer Servicio */}
          <div className="w-full md:w-1/3 flex gap-2 py-5 px-0 md:px-2 bg-indigo-950 md:bg-transparent">
            <div className="text-lg md:text-xl lg:text-4xl text-amber-500 md:text-indigo-950 font-black font-archivo-black">
              03
            </div>
            <div>
              <h1 className="text-amber-500 md:text-indigo-950 font-archivo-black text-lg md:text-xl lg:text-4xl">
              UI/UX Design and Testing
              </h1>
              <p>
                BCreating intuitive layouts and performing thorough testing to ensure quality.
              </p>
              <p className="text-amber-500 md:text-indigo-950">
              Technologies: Figma, Bootstrap, Tailwind Css, Material UI, Elment UI, and Jest.
              </p>
            </div>
          </div>
          {/* Fintercer servicio */}
        </div>
      </div>
    );
  };