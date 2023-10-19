import React from "react";
import "./Languages.css";

const Languages = () => {
  const items = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next JS",
    "Node JS",
    "MySQL",
  ];
  return (
    <section className="language-info">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
