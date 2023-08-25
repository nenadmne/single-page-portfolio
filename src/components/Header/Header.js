import React from "react";
import "./Header.css";
import gitImage from "../../assets/git.svg";
import linkedImage from "../../assets/linked.svg";
import ProfileInfo from "./Header components/ProfileInfo";

const Header = () => {
  
  return (
    <div className="header">
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
      <ProfileInfo />
    </div>
  );
};

export default Header;
