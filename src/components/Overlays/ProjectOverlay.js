import { useState } from "react";
import Button from "../../UI/Button";
import Arrows from "../../UI/Arrows";
import imageData from "../../UI/ImageData";
import "./ProjectOverlay.css";

const ProjectOverlay = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [button, setButton] = useState(true);
  const [homepage, setHomepage] = useState(false);
  const [info, setInfo] = useState(false);
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  const homepageImages = imageData.homepageImages;
  const infoImages = imageData.infoImages;
  const userImages = imageData.userImages;
  const adminImages = imageData.adminImages;

  const homepageHandler = () => {
    setHomepage(true);
    setButton(false);
    setImages(homepageImages);
  };

  const infoHandler = () => {
    setInfo(true);
    setButton(false);
    setImages(infoImages);
  };

  const userHandler = () => {
    setInfo(true);
    setButton(false);
    setImages(userImages);
  };

  const adminHandler = () => {
    setInfo(true);
    setButton(false);
    setImages(adminImages);
  };

  const backHandler = () => {
    setHomepage(false);
    setInfo(false);
    setUser(false);
    setAdmin(false);
    setButton(true);
    setCurrentIndex(0);
  };

  const clickHandler = (event) => {
    if (event.target === event.currentTarget) {
      backHandler();
      props.close();
    }
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const buttonConfig = [
    { name: "Homepage states", handler: homepageHandler },
    { name: "Product info", handler: infoHandler },
    { name: "User profile", handler: userHandler },
    { name: "Admin profile", handler: adminHandler },
  ];

  const appear = homepage || info || user || admin;

  return (
    <div
      className={`project-overlay ${props.show ? "active" : ""}`}
      onClick={clickHandler}
    >
      {button && (
        <div className="button-div">
          {buttonConfig.map(({ name, handler }, index) => (
            <Button
              key={index}
              className="btn btn-block btn-light"
              name={name}
              onClick={handler}
            />
          ))}
        </div>
      )}

      {appear && (
        <div className={`project-image-container ${appear ? "active" : ""}`}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          <div className="small-image-div">
            {images.map((item, index) => (
              <img
                className={index === currentIndex ? "current-img" : ""}
                key={index}
                src={item}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          <Arrows
            index={currentIndex}
            previus={goToPreviousImage}
            next={goToNextImage}
          />
          <Button
            onClick={backHandler}
            className="btn btn-block btn-secondary"
            name="Go back"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectOverlay;
