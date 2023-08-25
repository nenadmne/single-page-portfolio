import "./Arrows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Arrows = (props) => {
  return (
    <div className="nav-arrows">
      <div className="left-arrow" onClick={props.previus}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </div>
      <div className="right-arrow" onClick={props.next}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </div>
    </div>
  );
};

export default Arrows;
