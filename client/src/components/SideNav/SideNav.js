// Dependencies
import React from "react";
import "./SideNav.css";
import SignupModal from "../../components/SignupModal";
import SigninModal from "../../components/SigninModal"
import SidebarFooter from "../../components/SidebarFooter";
import { Button, Icon, Modal } from 'react-materialize'

// SideNav component
const SideNav = () =>
    <section>
        <section>
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


                <Modal
                  actions={[]}
                  trigger={
                    <li className="has-subnav">
                      <a className="modal-trigger" href="#signup">
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                            Sign Up
                        </span>
                      </a> 
                    </li>
                  }
                >
                    <SignupModal 
                      id="signup"
                      modelHeader="Sign Up Form"
                      submitBtnTxt="Submit"
                      cancelBtnTxt="Cancel"
                      formId="signupForm"
                      modalHeight="60%"
                      modalPadding="20px"
                    />
                </Modal>

                </ul>

                <SidebarFooter
                  footerText="&copy; 2017 AssignKick"
                />
            </nav>
        </section>



        <SigninModal 
          id="signin"
          modelHeader="Sign In Form"
          submitBtnTxt="Submit"
          cancelBtnTxt="Cancel"
          formId="signinForm"
          modalHeight="35%"
          modalPadding="20px"
        />

    </section>;

export default SideNav;