import React from "react";
import PatternRings from "../../../UI/PatternRings";

const Languages = () => {
  const items = [
    {
      name: "HTML",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    },
    {
      name: "CSS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Tailwind",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "Javascript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "React JS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Next JS",
      imgSrc: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    {
      name: "Node JS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "MySQL",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
  ];

  return (
    <section className="w-full relative p-8 sm:p-16 lg:w-[1100px] border-solid border-[1px] border-green shadow-shadow">
      <ul className="w-full flex flex-row flex-wrap justify-between list-none m-0 gap-8">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center lg:w-[30%] bg-bio rounded-xl p-4 shadow-shadow"
          >
            <img
              src={item.imgSrc}
              alt={item.name}
              className="w-[50%]"
            />
          </li>
        ))}
      </ul>
      <PatternRings
        divClass="absolute right-[-10%] sm:right-0 bottom-[-55%] sm:bottom-[-35%] transform translate-x-1/2 z-[-1]"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
    </section>
  );
};

export default Languages;
