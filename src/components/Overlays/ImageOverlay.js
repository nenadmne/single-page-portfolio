import React from "react";
import "./ImageOverlay.css";
import Portal from "../../UI/Portal";
import ProjectOverlay from "./ProjectOverlay";

const ImageOverlay = (props) => {
  return (
    <div className="image-overlay">
      <a target={props.target} href={props.link} onClick={props.click}>
        {props.name}
      </a>
      <a target="_blank" href={props.href}>
        View Code
      </a>
      <Portal>
        <ProjectOverlay show={props.show} close={props.close} />
      </Portal>
    </div>
  );
};

export default ImageOverlay;
