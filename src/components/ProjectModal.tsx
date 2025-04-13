// import { GalleryGrid } from "./GalleryGrid";


// export const ProjectModal = ({ project, setClose }) => {
//   const content = {
//     jana: {
//       title: "Jana Management ERP",
//       description: `Jana is a TypeScript-based platform built with the PERN stack to manage bidding processes in metalworking companies.
//           The frontend uses React with Redux for global state and Zod for strict validation. The backend, built with Node.js and Express, integrates Sequelize for PostgreSQL data handling.
//           It features JWT authentication, file upload with Multer, testing with Jest, and API documentation via Swagger. The architecture is scalable and focused on financial and operational logic.`,
//       stack:
//         "Typescript, React, Redux, Zod, Express, Postgresql, Sequelize, Jest, Swagger, Bcryptjs",
//     },
//     kassya: {
//       title: "Kassya Management ERP",
//       description: `Kassya is a modular ERP built with Next.js, combining SSR and SPA capabilities. Prisma is used as the ORM to efficiently model data in PostgreSQL.
//           Global state is managed with Zustand, while Zod and React Hook Form handle validation and form control. The UI is styled with TailwindCSS and features dynamic dashboards with Recharts.
//           The system includes Jest for testing and is designed to easily scale functionalities such as procurement, inventory, and control modules.`,
//       stack: "Next Js, Node, Prisma, PostgreSql, Zustand, Zod, Recharts",
//     },
//     tasky: {
//       title: "Tasky",
//       description: `Tasky is a project and task management frontend developed with React.
//           It emphasizes modular components and a clean architecture with persistent data handling.
//           While currently frontend-only, it's structured for easy future integration with backend services.`,
//       stack: "Stylyled Components, React, Hooks",
//     },
//     leangineer: {
//       title: "Leangineer",
//       description: `Leangineer is a promotional website built with the MERN stack to offer business reengineering consulting services.
//           The backend API is developed in Express with MongoDB integration, while the frontend in React renders scalable static and dynamic content.
//           It’s designed as a lightweight, modular solution that can evolve into a more complex platform with features like contact forms, portfolios, or blog sections.`,
//       stack:
//         "React, React-Bootstrap, Sytled Components, Redux, Express, Mongoose, Mongo DB",
//     },
//   };



//   const onCloseModal = () => {
//     setClose(false);
//   };

//   return (
//     <div
//       className={`fixed inset-0 bg-white z-[100] bg-opacity-90 flex justify-center items-center`}
//     >
//       <div
//         className={`bg-indigo-950 w-11/12 max-w-[1100px] p-5 m-auto relative rounded`}
//       >
//         <button
//           className={`bg-white roundedp-2 top-2 right-2 absolute text-indigo-950 font-extrabold px-2 py-1 rounded `}
//           onClick={onCloseModal}
//         >
//           Cerrar
//         </button>
//         <h2 className="font-black font-archivo-black text-xl md:text-3xl text-white uppercase text-center">
//           {content[project].title || "Project"}
//         </h2>
//         <p>{content[project].description || "Description"}</p>
//         <p>
//           <span className={`font-medium`}>Stack:</span>{" "}
//           {content[project].stack.split(",").map((element, i) => (
//             <span
//               key={i}
//               className={`bg-blue-400 mx-1 bg-opacity-25 px-1 rounded-full md:font-medium`}
//             >
//               {element}
//             </span>
//           ))}
//         </p>
//         <div className="flex gap-3 my-2">
//           <button>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="32"
//               height="32"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
//                 fill="#eab224"
//               />
//             </svg>
//           </button>
//         </div>
//         <GalleryGrid />
//       </div>
//     </div>
//   );
// };


export const ProjectModal = () => {
  return (
    <div>ProjectModal</div>
  )
}