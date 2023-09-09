import React, { useState } from "react";
import "./Nav.css";
import dev1 from "../assets/dev1.jpeg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(true);
  const [color, setColor] = useState(false);
  const handleclick = () => {
    setMenu(!menu);
  };
  const changeColor = () => {
    if (window.scrollY > 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "nav-head nav-head-bg" : "nav-head"}>
      <Link to="/">
        <div className="nav-logo">
          <img src={dev1} alt="logo" className="logo-img" />
          <h1>Venkatesh</h1>
        </div>
      </Link>
      <ul className={menu ? "nav-menu " : "nav-menu active"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hambergmenu" onClick={handleclick}>
        {menu ? (
          <FaBars size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Nav;
