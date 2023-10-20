import { useState } from "react";
import storeImg from "../../../assets/Online-Store/Homepage.png";
import meetupImg from "../../../assets/Meetup/meetup.png"
import silkRoadImg from "../../../assets/SilkRoad/Silkroad.png";
import libraryImg from "../../../assets/Online-Library/library.png";
import ImageOverlay from "../../Overlays/ImageOverlay";
import "./Projects.css";

const Projects = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };
  return (
    <section id="projects" className="projects">
      <h3> Projects </h3>
      <div>
        <ul>
          <li>
            <div className="image-container">
              <img src={storeImg} />
              <ImageOverlay
                show={show}
                name="Project intro"
                href="https://github.com/nenadmne/online-store/tree/master"
                click={clickHandler}
                close={closeHandler}
                link="#projects"
              />
            </div>
            <h4> Online-Store</h4>
            <p>
              <span> React JS </span>
              <span> Node JS </span>
              <span> MySQL </span>
              <span> Responsive Design </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <img src={meetupImg} />
              <ImageOverlay
                show={show}
                name="View Project"
                href="https://github.com/nenadmne/meetups"
                link="https://meetups-five-phi.vercel.app/"
                target="_blank"
              />
            </div>
            <h4> Online-Store</h4>
            <p>
              <span> Next JS </span>
              <span> Responsive Design </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <img src={libraryImg} />
              <ImageOverlay
                link="https://online-biblioteka.netlify.app"
                name="View Project"
                href="https://github.com/nenadmne/Online-Library"
                target="_blank"
              />
            </div>
            <h4> Online-Library</h4>
            <p>
              <span> React JS + Vite  </span>
              <span> Redux Toolkit  </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <img src={silkRoadImg} />
              <ImageOverlay
                link="https://silkroad-online-store.netlify.app"
                name="View Project"
                href="https://github.com/nenadmne/coinis-online-store"
                target="_blank"
              />
            </div>
            <h4> Online-Store</h4>
            <p>
              <span> React JS + Vite  </span>
              <span> Context API  </span>
              <span> MUI </span>
              <span> Responsive Design </span>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
