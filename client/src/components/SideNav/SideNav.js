// Dependencies
import React from "react";
import "./SideNav.css";
import SignupModal from "../../components/SignupModal";
import SigninModal from "../../components/SigninModal"
import SidebarFooter from "../../components/SidebarFooter";

// SideNav component
const SideNav = () =>
    <div>
        <div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="/">
                            <img className="nav-icon" src="assets/images/logo.svg" alt="logo" />
                            <span className="nav-text">
                                AssignKick
                            </span>
                        </a>
                    </li>

                    <li className="has-subnav">
                        <a href="#signin" className="modal-trigger">
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

                <SidebarFooter
                  footerText="&copy; 2017 AssignKick"
                />
            </nav>
        </div>
    
        <SignupModal 
          id="signup"
          modelHeader="Sign Up Form"
          submitBtnTxt="Submit"
          cancelBtnTxt="Cancel"
          formId="signupForm"
          modalHeight="60%"
          modalPadding="20px"
        />

        <SigninModal 
          id="signin"
          modelHeader="Sign In Form"
          submitBtnTxt="Submit"
          cancelBtnTxt="Cancel"
          formId="signinForm"
          modalHeight="35%"
          modalPadding="20px"
        />
    </div>;

export default SideNav;