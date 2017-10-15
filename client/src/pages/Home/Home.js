// Dependencies
import React, { Component } from "react";
import FullImage from "../../components/FullImage";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import About from "../../components/About";

// Import CSS
import "./Home.css";

// Home component
const Home = () => 
  <section className="home-container">
    <FullImage 
      backgroundImage="assets/images/homeHeader.jpeg"
    >
      <SideNav />
    </FullImage>

    <About />
    
    <Footer />
  </section>;

export default Home;