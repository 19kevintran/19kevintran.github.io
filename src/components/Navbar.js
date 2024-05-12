// import Navbar css
import "./NavbarStyles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  {
    /* Click hamburger event */
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState("false");
  const changeColor = () => {
    if (window.scrollY >= 100) {
        setColor("true");
      } else {
        setColor("false");
      }
  };

  
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      {/* Add a Link to the home page */}
      <Link to="/">
        <h1>Kevin Tran</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {/* add link to home page */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* add link to resume page */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        
        {/* add link to project page */}
        <li>
          <Link to="/project">Project</Link>
        </li>
        {/* add link to about page */}
        <li>
          <Link to="/about">About</Link>
        </li>
        {/* add link to contact page */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          // if clicked, show close icon
          <FaTimes size={20} style={{ color: "#fff" }}></FaTimes>
        ) : (
            // else show hamburger icon
          <FaBars size={20} style={{ color: "#fff" }}></FaBars>
        )}
      </div>
    </div>
  );
};

export default Navbar;
