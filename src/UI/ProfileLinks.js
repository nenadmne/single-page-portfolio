import gitImage from "../assets/git.svg";
import linkedImage from "../assets/linked.svg";

const ProfileLinks = () => {
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
    <ul className="flex flex-row justify-end items-center list-none gap-3 sm:gap-4 p-0 z-10">
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
  );
};

export default ProfileLinks;
