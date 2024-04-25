import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

import logo from "../Asset/logo.jpg";
import Resume from "./Resume";
import { Contact } from "./Contact";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="container">
        <img className="logo" src={logo} alt="brand logo" />
        <li className="list">
          <Link className="list10" to={"/resume"}>
            Home{" "}
          </Link>
        </li>
        <li className="list">
          <Link className="list9" to={"/contact"}>
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
