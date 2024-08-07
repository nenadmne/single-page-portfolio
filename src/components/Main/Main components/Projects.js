import storeImg from "../../../assets/Online-Store/Homepage.png";
import meetupImg from "../../../assets/Meetup/meetup.png";
import quizImg from "../../../assets/Quiz/quizImg.png";
import libraryImg from "../../../assets/Online-Library/library.png";
import sessionImg from "../../../assets/Session/SessionImg.png";
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
      title: "Quiz",
      imgSrc: quizImg,
      githubLink: "https://github.com/nenadmne/quiz",
      websiteLink: "https://quiz-cyan-tau.vercel.app/",
      technologies: ["React JS", "Context API", "MUI", "Responsive Design"],
    },
    {
      title: "Book Session",
      imgSrc: sessionImg,
      githubLink: "https://github.com/nenadmne/typescript-sessions-page",
      websiteLink: "https://book-a-session.vercel.app/",
      technologies: ["Typescript", "Tailwind", "React JS", "Responsive Design"],
    },
  ];

  return (
    <section className="projects w-full sm:mb-20 lg:w-[1100px] mt-4 sm:mt-12 p-[5%] sm:py-0 lg:p-0">
      <h3 className="text-2xl sm:text-3xl mb-10 sm:mb-12 text-bio text-center">
        Projects
      </h3>
      <div>
        <ul className="flex flex-col flex-nowrap w-full list-none p-0 m-0 gap-4 items-center justify-center sm:flex-wrap sm:flex-row sm:gap-8">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className="w-full lg:w-[48.5%] flex flex-col justify-center mb-4 lg:mb-0 border-[1px] border-solid border-purple rounded-3xl shadow-shadow transform transition-transform hover:scale-105 hover:opacity-100"
            >
              <div className="w-full relative cursor-pointer p-4">
                <h4 className="my-2 text-center sm:text-xl sm:my-4">
                  {project.title}
                </h4>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="w-[100%]"
                />
              </div>
              <p className="flex flex-row justify-center gap-4 mb-1 sm:mb-0 p-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm sm:text-base h-fit text-center text-purple uppercase py-1 sm:px-3 bg-lightPurple rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <ImageOverlay
                href={project.githubLink}
                link={project.websiteLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
