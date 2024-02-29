import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
          alt="heroImg"
          className="intro-img"
        />
      </div>
      <div className="content">
        <h1>
          Hi there,
          <br />I am venkatesh
        </h1>
        <p>
          As an aspiring frontend developer, I excel in delivering clean code
          and ensuring precise implementation. My proficiency lies in creating
          fully responsive websites, which enhance accessibility across all
          devices. This approach ensures that users have a seamless experience
          regardless of the device they are using.
        </p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
