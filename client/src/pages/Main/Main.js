// Dependencies
import React, { Component } from "react";
import CalendarComponent from "./calendar";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import Course from "../../components/Course";
import Assignments from "../../components/Assignments";
import "./Main.css";
// Main component
const Main = () => 
 
<section>
	<SideNav />
	<CalendarComponent />
	<Course />
	
	<Footer />
 </section>;

export default Main;