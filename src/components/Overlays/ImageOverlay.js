import React, { useState } from "react";
import "./ImageOverlay.css";
import Portal from "../../UI/Portal";
import ProjectOverlay from "./ProjectOverlay";

const ImageOverlay = (props) => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <div className="image-overlay">
      <span onClick={clickHandler}>{props.name}</span>
      <a target="_blank" href={props.href}>
        View Code
      </a>
      <Portal>
        <ProjectOverlay show={show} close={closeHandler} />
      </Portal>
    </div>
  );
};

export default ImageOverlay;
