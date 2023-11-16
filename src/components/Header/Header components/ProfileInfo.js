import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import profilePicture from "../../../assets/profile.png";

const ProfileInfo = () => {
  // const [name, setName] = useState("");

  // useEffect(() => {
  //   const fullName = "Nenad Ćosović";
  //   let currentText = "";
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     if (index === fullName.length) {
  //       clearInterval(interval);
  //     } else {
  //       currentText += fullName[index];
  //       setName(currentText);
  //       index++;
  //     }
  //   }, 200);

  //   return () => clearInterval(interval);
  // }, []);

  const links = [
    { name: "Contact me", href: "footer" },
    { name: "Projects", href: "projects" },
  ];

  return (
    <section className="flex flex-row w-full lg:w-[1100px] pb-8 sm:pb-20 border-b-[1px] border-white sm:gap-4">
      <div className="w-[70%]">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold w-full mb-12 sm:mb-8">
          Nice to meet you! I'm
          <span className="underline decoration-green ml-2 animate-blurIn">Nenad Ćosović</span>
        </h2>
        <p className="text-sm sm:text-md w-full max-w-[300px] sm:max-w-[85%] lg:w-[550px] text-bio font-medium leading-0 sm:leading-7 m-0">
          Hailing from Montenegro, I'm a versatile developer with a penchant for
          crafting accessible web applications that users truly enjoy. My
          primary expertise lies in front-end development, and I bring a touch
          of back-end knowledge to create comprehensive digital experiences.
        </p>

        <div className="flex flex-col gap-2 sm:gap-4 mt-8 sm:mt-12 font-bold uppercase">
          {links.map((item, i) => (
            <p
              key={i}
              className="text-xs sm:text-md w-fit pb-1 border-b-2 border-green tracking-normal sm:tracking-slightly_wider hover:text-green hover:border-white"
            >
              <Link to={item.href} smooth className="cursor-pointer">
                {item.name}
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-start w-[30%]">
        <img
          src={profilePicture}
          className="w-full h-fit bg-dark rounded-full lg:rounded-none aspect-square lg:aspect-auto object-contain lg:object-cover"
        />
      </div>
    </section>
  );
};

export default ProfileInfo;
