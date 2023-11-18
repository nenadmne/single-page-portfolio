import { Link } from "react-scroll";
import PatternRings from "../../UI/PatternRings";
import ProfileLinks from "../../UI/ProfileLinks";

const Footer = () => {

  const links = [
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
    { name: "Contact", href: "footer" },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full p-[5%] lg:p-0 lg:pt-20 lg:pb-8 flex flex-col justify-center items-center bg-grey"
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
      <div className="w-full lg:w-[1100px] flex flex-row justify-between mb-8 mt-1 sm:mt-2 lg:mt-4">
        <span className="text-sm sm:text-md text-lightgray tracking-0 sm:tracking-slightly_wider">
          cosovicnenad14@gmail.com
        </span>
        <ProfileLinks />
      </div>
      <div className="flex justify-center flex-row gap-4 mt-12">
        {links.map((item, i) => (
          <Link
            key={i}
            to={item.href}
            smooth
            className="cursor-pointer text-white"
          >
            <button className="text-xs sm:text-base uppercase bg-darkPurple py-1 px-3 rounded-xl w-fit tracking-normal sm:tracking-slightly_wider hover:opacity-70">
              {item.name}
            </button>
          </Link>
        ))}
      </div>
      <PatternRings
        divClass="absolute top-[15%] sm:top-[45%] lg:top-[30%] left-0 transform translate-x-[-50%] z-0"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
      <p className="text-xs sm:text-sm mt-4">
        © 2023 Nenad Ćosović. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
