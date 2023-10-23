import storeImg from "../../../assets/Online-Store/Homepage.png";
import meetupImg from "../../../assets/Meetup/meetup.png";
import silkRoadImg from "../../../assets/SilkRoad/Silkroad.png";
import libraryImg from "../../../assets/Online-Library/library.png";
import ImageOverlay from "../../Overlays/ImageOverlay";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h3> Projects </h3>
      <div>
        <ul>
          <li>
            <div className="image-container">
              <h4> Online-Store</h4>
              <img src={storeImg} />
              <ImageOverlay
                href="https://github.com/nenadmne/online-store"
                link="https://online-store-orcin-psi.vercel.app/"
              />
            </div>
            <p>
              <span> React JS </span>
              <span> Node JS </span>
              <span> MySQL </span>
              <span> Responsive Design </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <h4> Meetups </h4>
              <img src={meetupImg} />
              <ImageOverlay
                href="https://github.com/nenadmne/meetups"
                link="https://meetups-five-phi.vercel.app/"
              />
            </div>
            <p>
              <span> Next JS </span>
              <span> Responsive Design </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <h4> Online-Library</h4>
              <img src={libraryImg} />
              <ImageOverlay
                link="https://online-biblioteka.netlify.app"
                href="https://github.com/nenadmne/Online-Library"
              />
            </div>
            <p>
              <span> React JS + Vite </span>
              <span> Redux Toolkit </span>
              <span> Axios </span>
            </p>
          </li>
          <li>
            <div className="image-container">
              <h4> Online-Store</h4>
              <img src={silkRoadImg} />
              <ImageOverlay
                link="https://silkroad-online-store.netlify.app"
                href="https://github.com/nenadmne/coinis-online-store"
              />
            </div>
            <p>
              <span> React JS + Vite </span>
              <span> Context API </span>
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
