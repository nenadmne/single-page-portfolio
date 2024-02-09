import muiImg from "../../../assets/mui.png";
import PatternRings from "../../../UI/PatternRings";
import LanguagePack from "./LanguagePack";

const Languages = () => {
  const frontendItems = [
    {
      name: "HTML",
      imgSrc: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
    },
    {
      name: "CSS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    },
    {
      name: "Tailwind",
      imgSrc:
        "https://camo.githubusercontent.com/0568e2de313626b2bd9b96f326941b012d45e9a4db1a23aa78bd8036207e57f8/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7461696c77696e646373732f7461696c77696e646373732d69636f6e2e737667",
    },
    {
      name: "JavaScript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      name: "React JS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Redux",
      imgSrc:
        "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
    },
    {
      name: "Next JS",
      imgSrc: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
    },
    { name: "MUI", imgSrc: muiImg },
  ];

  const backendItems = [
    {
      name: "Node JS",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "Express JS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MySQL",
      imgSrc:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Firebase",
      imgSrc: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
    }
  ];

  const others = [
    {
      name: "Github",
      imgSrc:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    {
      name: "VS Code",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
    {
      name: "Postman",
      imgSrc:
        "https://www.postman.com/_ar-assets/images/favicon-1-48.png",
    },
    {
      name: "Netlify",
      imgSrc:
        "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
    },
    {
      name: "Render",
      imgSrc:
        "https://cdn.sanity.io/images/hvk0tap5/production/a93dcf6b92654f8ccaf394f3efae54bcec721007-128x128.png?fit=max&auto=format",
    },
  ];

  return (
    <section className="skills flex flex-col items-center justify-center relative w-full px-[5%] lg:px-0 py-8 sm:py-16">
      <h1 className="text-xl sm:text-3xl my-4 text-bio"> Skills </h1>
      <p className="text-sm sm:text-md max-w-[550px] text-center mb-8 text-lightgray">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="flex flex-row justify-center flex-wrap relative lg:w-[1100px] gap-4 sm:gap-8">
        <LanguagePack name="Frontend" data={frontendItems} />
        <LanguagePack name="Backend" data={backendItems} />
        <LanguagePack name="Others" data={others} />
      </div>

      <PatternRings
        divClass="absolute right-[-15%] sm:right-0 bottom-[-13%] transform translate-x-1/2 z-0"
        imgClass="w-[375px] sm:w-[530px] h-[150px] object-contain"
      />
    </section>
  );
};

export default Languages;
