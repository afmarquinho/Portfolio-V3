
export const Navbar = () => {
    return (
      <div className="hidden md:block border-b-2 border-b-amber-400 fixed w-full z-50 bg-white text-black">
        <div
          className="w-11/12 max-w-[1200px] mx-auto py-3 text-blue 
        text-amber-500 flex justify-between"
        >
          <div className="flex gap-3">
            <h2 className="sm:text-2xl lg:text-4xl font-archivo-black text-indigo-950">DevFolio</h2>
            <h1 className="sm:text-2xl lg:text-4xl  sm:font-semibold lg:font-black text-amber-400">
              Marco Fernández
            </h1>
          </div>
          <div className="flex justify-end items-center gap-5">
            <a href="#home" className="hover:text-mainBlu">
              Home
            </a>
            <a href="#projects" className="hover:text-mainBlu">
              Projects
            </a>
            <a href="#about" className="hover:text-mainBlue">
              About
            </a>
            <a href="#contact" className="hover:text-mainBlue">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  };