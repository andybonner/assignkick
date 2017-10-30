// Dependencies
import React, { Component } from "react";
import SidebarFooter from "../../components/SidebarFooter";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import RegForm from "../../components/Forms/RegForm";
import LoginForm from "../../components/Forms/LoginForm";
import { connect } from 'react-redux';
import * as actions from "../../actions";

// Import CSS
import "./SideNavAuth.css";

// SideNavAuth component
class SideNavAuth extends Component {

	constructor(props){
		super(props);
	}
  state = {
		regVisible: false,
		loginVisible: false
	}

	logout = () => {
		console.log("logout clicked");
		this.props.logoutUser();
	}
	
  handleOk = () => {
		this.setState({ 
			loading: true 
		});
		
    setTimeout(() => {
      this.setState({ 
				loading: false, 
				regVisible: false 
			});
    }, 3000);
	}
	
  handleCancel = () => {
    this.setState({ 
			regVisible: false, 
			loginVisible: false 
		});
	}
	
	render() {
		// This component is for use on page "Main", where user is authenticated.
		// Logo button links to "/main" , and only Logout button is present.
		return(
			<div>
				<div>
					<nav className="main-menu">
						<ul>
							<li>
								<Link to="/main">
									<img className="nav-icon" src="assets/images/logo.svg" alt="logo" />
									<span className="nav-text">
											AssignKick
									</span>
								</Link>
							</li>

							{/* Logout Button */}
							<li className="has-subnav">
								<a href="#logout" onClick={ this.logout }>
									<span className="icon-text">X</span>
									<span className="nav-text">
											Logout
									</span>
								</a>
							</li>
						</ul>

						<SidebarFooter
							footerText="&copy; 2017 AssignKick"
						/>
					</nav>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return { content: state.auth.content };
}

export default connect(mapStateToProps, actions)(SideNavAuth);