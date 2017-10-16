// Dependencies
import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom";
import ModalForm from "../../components/ModalForm";

// SideNav component
const SideNav = () =>
    <div>
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/">
                            <img className="nav-icon" src="assets/images/logo.png" />
                            <span className="nav-text">
                                AssignKick
                            </span>
                        </Link>
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
                        <a className="modal-trigger" href="#signup">
                            <i className="fa fa-laptop fa-2x"></i>
                            <span className="nav-text">
                                Sign Up
                            </span>
                        </a> 
                    </li>
                </ul>
            </nav>
        </div>
    
        <ModalForm 
          id="signup"
          modelHeader="Sign Up Form"
          submitBtnTxt="Submit"
          cancelBtnTxt="Cancel"
        />
    </div>;

export default SideNav;