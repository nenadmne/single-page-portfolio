import gitImage from "../../assets/git.svg";
import linkedImage from "../../assets/linked.svg";
import PatternRings from "../../UI/PatternRings";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/nenadmne",
      imageSrc: gitImage,
    },
    {
      href: "https://www.linkedin.com/in/nenad-%C4%87osovi%C4%87-9550aa28a/",
      imageSrc: linkedImage,
    },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full bg-grey p-[5%] lg:py-20 flex flex-col justify-center items-center mt-8 sm:mt-12 lg:mt-16"
    >
      <div className="w-full lg:w-[1100px] border-b-[1px] border-lightgray">
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-0 lg:tracking-tight mb-4 sm:mb-16">
          Contact
        </h1>
        <p className="text-sm sm:text-md text-lightgray lg:w-[450px] leading-0 sm:leading-7 m-0 pb-16 sm:pb-8">
          I would love to hear about your project and how I could help. Please
          feel free to contact me using one of the options below.
        </p>
      </div>
      <div className="w-full lg:w-[1100px] flex flex-row justify-between mt-1 sm:mt-2 lg:mt-4">
        <span className="text-sm sm:text-md text-lightgray tracking-0 sm:tracking-slightly_wider">
          cosovicnenad14@gmail.com
        </span>
        <ul className="flex flex-row justify-end items-center list-none gap-4 p-0">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a target="_blank" href={link.href} className="border-0 pointer">
                <img
                  src={link.imageSrc}
                  alt={`Social Icon ${index + 1}`}
                  className="bg-white w-6 sm:w-8 hover:scale-110"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <PatternRings
        divClass="absolute top-[35%] sm:top-[45%] lg:top-[30%] left-0 transform translate-x-[-50%] z-0"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
    </footer>
  );
};

export default Footer;
