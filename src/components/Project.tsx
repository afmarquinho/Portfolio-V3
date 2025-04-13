
const Project = () => {

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
      <div className={`grid grid-cols-4 gap-5`}>
        <div className={`w-full h-10 bg-amber-500`}></div>
        <div className={`w-full h-10 bg-amber-500`}></div>
        <div className={`w-full h-10 bg-amber-500`}></div>
        <div className={`w-full h-10 bg-amber-500`}></div>
      </div>
    </section>
  );
};
export default Project;