import React from "react";
import "./Languages.css";

const Languages = () => {
  const items = [
    "HTML",
    "CSS",
    "Javascript",
    "Tailwind",
    "React JS",
    "Next JS",
    "Node JS",
    "MySQL",
  ];
  return (
    <section className="languages w-full py-8 relative sm:py-16 lg:w-[1100px] lg:pt-16 lg:pb-24">
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
    </section>
  );
};

export default Languages;
