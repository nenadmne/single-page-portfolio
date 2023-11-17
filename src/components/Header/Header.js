import { Link } from "react-scroll";
import ProfileInfo from "./Header components/ProfileInfo";
import gitImage from "../../assets/git.svg";
import linkedImage from "../../assets/linked.svg";
import PatternRings from "../../UI/PatternRings";

const Header = () => {
  
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

  const links = [
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
    { name: "Contact", href: "footer" },
  ];

  return (
    <div className="w-full lg:w-[1100px] relative flex flex-col mt-0 lg:mt-12 p-[5%] sm:p-0">
      <ul className="flex flex-row w-full justify-between items-center list-none mb-4 lg:mb-0">
        <li className="flex flex-row gap-2 sm:gap-4 font-bold uppercase">
          {links.map((item, i) => (
            <p
              key={i}
              className="text-xs sm:text-md w-fit pb-1 border-b-2 border-purple tracking-normal sm:tracking-slightly_wider hover:text-purple hover:border-white"
            >
              <Link to={item.href} smooth className="cursor-pointer">
                {item.name}
              </Link>
            </p>
          ))}
        </li>
        <li className="flex flex-row gap-2 sm:gap-4">
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
        </li>
      </ul>
      <ProfileInfo />
      <PatternRings
        divClass="absolute top-[20%] sm:top-[15%] lg:top-[22%] left-[-20%] sm:left-[-10%] transform translate-x-[-50%] z-0"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
    </div>
  );
};

export default Header;
