import React from "react";
import "./Footer.css";
import gitImage from "../../assets/git.svg";
import linkedImage from "../../assets/linked.svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="contact-text">
        <h1> Contact </h1>
        <p>
          I would love to hear about your project and how I could help. Please
          feel free to contact me using one of the options below.
        </p>
      </div>
      <div className="contact-email">
        <span> cosovicnenad@gmail.com </span>
        <ul>
          <li>
            <a target="_blank" href="https://github.com/nenadmne">
              <img className="git-img" src={gitImage} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nenad-cosovic-9550aa28a/"
            >
              <img src={linkedImage} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
