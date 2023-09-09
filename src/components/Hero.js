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
          Aspiring frontend developer.I can provide clean code and pixel perfect
          design. I can also make the websides fully responsive. A responsive
          design makes your website accessible to all users,regardless of their
          device.
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
