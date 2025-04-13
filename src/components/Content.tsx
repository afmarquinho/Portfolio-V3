import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar"
import Project from "./Project";
import { Services } from "./Services";


export const Content = () => {
  return (
    <>
      <Navbar /> 
      {/* Social Network */}
      <div className="hidden md:flex flex-col justify-center items-center gap-5 w-10 py-5 bg-amber-500 rounded-3xl none md:fixed z-[100] right-10 top-1/2 transform -translate-y-1/2 ">
        <a
          href="https://www.linkedin.com/in/marco-fernandez-acosta/"
          target="_blank"
          className="sociales linkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              fill="#1e1b4b"
            />
          </svg>
        </a>
        <a
          href="https://github.com/afmarquinho"
          target="_blank"
          className="sociales github"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
              fill="#1e1b4b"
            />
          </svg>
        </a>
        <a
          href="https://t.me/Marquinhos365"
          target="_blank"
          className="sociales telegram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Telegram"
            role="img"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <rect width="512" height="512" rx="15%" fill="#1e1b4b" />
            <path
              fill="#07070f"
              d="M199 404c-11 0-10-4-13-14l-32-105 245-144"
            />
            <path fill="#1e1b4b" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
            <path
              fill="#f59e0b"
              d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
            />
          </svg>
        </a>
      </div> 
      {/* Fin Social Network */}
      <main className="w-full text-white text-sm lg:text-base bg-indigo-950">
        <Hero />
        <Services />
        <Project /> 
        <About />
        <Contact />
      </main>
    </>
  );
};