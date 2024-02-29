import React from "react";
import "./AboutContent.css";

import Image from "../assets/dev2.jpeg";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="abt-right">
        <img src={Image} alt="abt-img" className="abt-img" />
      </div>
      <div className="abt-left">
        <div className="left-content">
          <h1>Who am I?</h1>
          <p>
            Currently working as a web developer intern at Ressan Info Tech, I
            am an aspiring front-end developer specializing in React. With a
            strong foundation in HTML, CSS, JavaScript, and ReactJS, I am
            enthusiastic about leveraging my skills to create engaging and
            user-friendly web applications. Dedicated to continuous learning, I
            aim to excel in building dynamic interfaces and delivering
            exceptional user experiences.
          </p>
          <Link to="/contact" className="btn ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
