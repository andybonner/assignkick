// Dependencies
import React, { Component } from "react";
import SidebarFooter from "../../components/SidebarFooter";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import RegForm from "../../components/Forms/RegForm";
import LoginForm from "../../components/Forms/LoginForm";

// Import CSS
import "./SideNav.css";

// SideNav component
class SideNav extends Component {
  state = {
    loading: false,
		regVisible: false,
		loginVisible: false
	}
	
  showRegModal = () => {
    this.setState({
      regVisible: true,
    });
	}

	showLoginModal = () => {
    this.setState({
      loginVisible: true,
    });
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
		const { regVisible, loginVisible, loading } = this.state;

		return(
			<div>
				<div>
					<nav className="main-menu">
						<ul>
							<li>
								<Link to="/">
									<img className="nav-icon" src="assets/images/logo.svg" alt="logo" />
									<span className="nav-text">
											AssignKick
									</span>
								</Link>
							</li>

							{/* Register Modal/Button */}
							<li className="has-subnav">
								<a href="#signin" onClick={ this.showRegModal }>
									<span className="icon-text">R</span>
									<span className="nav-text">
											Register
									</span>
								</a>

								<Modal
									visible={ regVisible }
									title="Register Form"
									onCancel={ this.handleCancel }
									footer={null}
								>
									<RegForm
										regClass="formItems"
										inputClass="inputItems"
									/>
								</Modal>
							</li>

							{/* Login Modal/Button */}
							<li className="has-subnav">
								<a href="#signin" onClick={ this.showLoginModal }>
										<span className="icon-text">S</span>
										<span className="nav-text">
												Login
										</span>
								</a>
								
								<Modal
									visible={ loginVisible }
									title="Login Form"
									onCancel={this.handleCancel}
									footer={null}
									className="text-center"
								>
									<LoginForm
										regClass="formItems"
										inputClass="inputItems"
									/>
								</Modal>
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

export default SideNav;