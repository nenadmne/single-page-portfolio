import "./ImageOverlay.css";

const ImageOverlay = (props) => {
  return (
    <div className="image-overlay">
      <a target="_blank" href={props.link} onClick={props.click}>
        View Project
      </a>
      <a target="_blank" href={props.href}>
        View Code
      </a>
    </div>
  );
};

export default ImageOverlay;
