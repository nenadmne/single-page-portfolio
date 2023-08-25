import ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const portal = document.getElementById("overlay");

  return ReactDOM.createPortal(children, portal);
};

export default Portal;
