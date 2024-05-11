// import Navbar css
import "./NavbarStyles.css";

import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="header">
      {/* Add a Link to the home page */}
      <Link to="/">
        <h1> Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        {/* add link to home page */}
        <li>
          <Link to="/">Home</Link>
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
    </div>
  );
};

export default Navbar;
