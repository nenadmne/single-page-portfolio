import gitImage from "../../assets/git.svg";
import linkedImage from "../../assets/linked.svg";
import ProfileInfo from "./Header components/ProfileInfo";
import "./Header.css";

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

  return (
    <div className="header w-full lg:w-[1100px] relative flex flex-col mt-0 lg:mt-20">
      <ul className="flex flex-row w-full justify-end items-center list-none gap-4 p-0 lg:py-4 mb-4 lg:mb-0">
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
      <ProfileInfo />
    </div>
  );
};

export default Header;
