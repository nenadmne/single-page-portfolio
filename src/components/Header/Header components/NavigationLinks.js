import { Link } from "react-scroll";

const NavigationLinks = () => {
  const links = [
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
    { name: "Contact", href: "footer" },
  ];

  return (
    <li className="flex flex-row gap-2 sm:gap-4 font-bold uppercase">
      {links.map((item, i) => (
        <p
          key={i}
          className="text-xs sm:text-base w-fit border-b-[1px] border-purple tracking-normal sm:tracking-slightly_wider hover:text-purple hover:border-white"
        >
          <Link to={item.href} smooth className="cursor-pointer">
            {item.name}
          </Link>
        </p>
      ))}
    </li>
  );
};

export default NavigationLinks;
