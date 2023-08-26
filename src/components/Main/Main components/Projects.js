import React, { useState } from "react";
import "./Projects.css";
import storeImg from "../../../assets/Online-Store/Homepage.png";
import portfolioImg from "../../../assets/Portfolio/Portfolio.png";
import ImageOverlay from "../../Overlays/ImageOverlay";

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
              <span> React JS </span> <span> Node JS </span>
              <span> MySQL </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <img src={portfolioImg} />
              <ImageOverlay
                href="https://github.com/nenadmne/single-page-portfolio"
                target="_blank"
              />
            </div>
            <h4> Developer Portfolio</h4>
            <span> React JS </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
