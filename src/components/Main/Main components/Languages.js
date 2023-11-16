import React from "react";
import PatternRings from "../../../UI/PatternRings";

const Languages = () => {
  const items = [
    "HTML",
    "CSS",
    "Tailwind",
    "Javascript",
    "Typescript",
    "React JS",
    "Next JS",
    "Node JS",
    "MySQL",
  ];

  return (
    <section className="w-full relative py-8 sm:py-16 lg:w-[1100px] lg:pt-16 lg:pb-24">
      <ul className="w-full flex flex-row flex-wrap list-none m-0 p-0 gap-4 sm:gap-8 lg:gap-12">
        {items.map((item, index) => (
          <li
            key={index}
            className="w-[29.5%] text-base text-center leading-12 font-bold sm:text-2xl lg:text-3xl lg:w-[30.4%]"
          >
            {item}
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
