import storeImg from "../../../assets/Online-Store/Homepage.png";
import meetupImg from "../../../assets/Meetup/meetup.png";
import silkRoadImg from "../../../assets/SilkRoad/Silkroad.png";
import libraryImg from "../../../assets/Online-Library/library.png";
import ImageOverlay from "../../Overlays/ImageOverlay";

const Projects = () => {
  const projectsData = [
    {
      title: "Online-Store",
      imgSrc: storeImg,
      githubLink: "https://github.com/nenadmne/online-store",
      websiteLink: "https://online-store-orcin-psi.vercel.app/",
      technologies: ["React JS", "Node JS", "MySQL", "Responsive Design"],
    },
    {
      title: "Meetups",
      imgSrc: meetupImg,
      githubLink: "https://github.com/nenadmne/meetups",
      websiteLink: "https://meetups-five-phi.vercel.app/",
      technologies: ["Next JS", "Responsive Design", "MongoDB"],
    },
    {
      title: "Online-Library",
      imgSrc: libraryImg,
      githubLink: "https://github.com/nenadmne/Online-Library",
      websiteLink: "https://online-biblioteka.netlify.app",
      technologies: ["React JS", "Redux Toolkit", "Axios"],
    },
    {
      title: "SilkRoad",
      imgSrc: silkRoadImg,
      githubLink: "https://github.com/nenadmne/coinis-online-store",
      websiteLink: "https://silkroad-online-store.netlify.app",
      technologies: ["React JS", "Context API", "MUI", "Responsive Design"],
    },
  ];

  return (
    <section id="projects" className="w-full sm:mb-20 lg:w-[1100px]">
      <h3 className="text-2xl mb-4 sm:text-3xl sm:mb-12 lg:text-4xl lg:mb-16">
        Projects
      </h3>
      <div>
        <ul className="flex-nowrap flex-col w-full list-none p-0 m-0 flex gap-4 items-start justify-between sm:flex-wrap sm:flex-row sm:gap-8">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className="w-full mb-4 border-b border-gray-300 border-t-1 flex flex-col justify-center lg:w-[47%] lg:mb-0 lg:border-0"
            >
              <div className="w-full relative cursor-pointer mb-4 transform transition-transform hover:scale-105 hover:opacity-100">
                <h4 className="my-2 text-center sm:text-xl sm:my-4">
                  {project.title}
                </h4>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-[100%]"
                />
                <ImageOverlay
                  href={project.githubLink}
                  link={project.websiteLink}
                />
              </div>
              <p className="mb-1 text-sm flex flex-row justify-center gap-4 sm:text-base sm:mb-0">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm text-center uppercase font-light sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
