// Dependencies
import React from "react";
import "./SideNav.css";

// SideNav component
const SideNav = () =>
  <div>
    <nav className="main-menu">
      <ul>
        <li>
            <a href="#">
                <img src="assets/images/logo.png" />
                <span className="nav-text">
                    AssignKick
                </span>
            </a>
        </li>

        <li className="has-subnav">
            <a href="#">
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text">
                    Sign In
                </span>
            </a>
        </li>

        <li className="has-subnav">
            <a href="#">
                <i className="fa fa-laptop fa-2x"></i>
                <span className="nav-text">
                    Sign Up
                </span>
            </a> 
        </li>
      </ul>
    </nav>
  </div>;

export default SideNav;