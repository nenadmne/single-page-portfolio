import React from "react";
import "./ProfileInfo.css";
import profilePicture from "../../../assets/profile.png";

const ProfileInfo = () => {
  return (
    <section className="profile-info">
      <div className="intro">
        <h2>
          Nice to meet you! I'm <span>Nenad Ćosović</span>.
        </h2>
        <p>
          Hailing from Montenegro, I'm a versatile developer with a penchant for
          crafting accessible web applications that users truly enjoy. My
          primary expertise lies in front-end development, and I bring a touch
          of back-end knowledge to create comprehensive digital experiences.
        </p>
        <div className="hyperlinks">
          <p>
            <a href="#footer"> Contact me </a>
          </p>
          <p>
            <a href="#projects">Projects </a>
          </p>
        </div>
      </div>
      <div className="img-container">
        <img src={profilePicture} />
      </div>
    </section>
  );
};

export default ProfileInfo;
