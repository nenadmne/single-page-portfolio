const ImageOverlay = ({ link, href }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 lg:gap-2 bg-black opacity-0 active:opacity-100 hover:opacity-100 transition-opacity duration-200 z-2 rounded-3xl">
      <a
        target="_blank"
        href={link}
        className="w-fit text-sm sm:text-base lg:text-md active:text-purple sm:text-bio hover:text-purple font-bold tracking-normal sm:tracking-wide py-0 sm:py-1 uppercase no-underline border-b-2 border-purple transition-visibility duration-200"
      >
        View Project
      </a>
      <a
        target="_blank"
        href={href}
        className="w-fit text-sm sm:text-base lg:text-md text-lighterPurple sm:text-bio hover:text-purple font-bold tracking-normal sm:tracking-wide py-0 sm:py-2 uppercase no-underline border-b-2 border-purple transition-visibility duration-200"
      >
        View Code
      </a>
    </div>
  );
};

export default ImageOverlay;
