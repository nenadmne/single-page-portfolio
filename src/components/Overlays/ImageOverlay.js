const ImageOverlay = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-rgba(21, 21, 21, 0.9) flex flex-col justify-center items-center gap-4 lg:gap-2 bg-black opacity-100 sm:opacity-0 transition-opacity duration-200 z-2 hover:opacity-100">
      <a
        target="_blank"
        href={props.link}
        onClick={props.click}
        className="w-fit text-sm sm:text-base lg:text-md text-green sm:text-white hover:text-green font-bold tracking-normal sm:tracking-wide py-0 sm:py-2 uppercase no-underline border-b-2 border-green transition-visibility duration-200 transform translate-y-1/2"
      >
        View Project
      </a>
      <a
        target="_blank"
        href={props.href}
        className="w-fit text-sm sm:text-base lg:text-md text-green sm:text-white hover:text-green font-bold tracking-normal sm:tracking-wide py-0 sm:py-2 uppercase no-underline border-b-2 border-green transition-visibility duration-200 transform translate-y-1/2"
      >
        View Code
      </a>
    </div>
  );
};

export default ImageOverlay;
