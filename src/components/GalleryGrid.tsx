export const GalleryGrid = () => {
  return (
    <div
      className={`h-fit md:h-96 grid grid-cols-2 md:grid-cols-4 gap-[2px] md:gap-5 mt-5 overflow-auto`}
    >
      <div
        className={`bg-amber-500 p-[2px] md:p-2 rounded-md overflow-hidden `}
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div
        className={`bg-amber-500 p-[2px] md:p-2 rounded-md overflow-hidden `}
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div
        className={`bg-amber-500 p-[2px] md:p-2 rounded-md overflow-hidden `}
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div
        className={`bg-amber-500 p-[2px] md:p-2 rounded-md overflow-hidden `}
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};
