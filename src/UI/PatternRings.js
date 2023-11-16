import PatternRingsImage from "../assets/pattern-rings.svg";

const PatternRings = ({ divClass, imgClass }) => {
  return (
    <div className={divClass}>
      <img src={PatternRingsImage} alt="Pattern Rings" className={imgClass} />
    </div>
  );
};

export default PatternRings;
