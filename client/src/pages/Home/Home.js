// Dependencies
import React, { Component } from "react";
import FullImage from "../../components/FullImage";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import Struggle from "../../components/Struggle";
import Solution from "../../components/Solution";

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

    <Struggle 
      imageOne="assets/images/homeHeader.jpeg"
      imageTwo="assets/images/homeHeader.jpeg"
      imageThree="assets/images/homeHeader.jpeg"
      imageFour="assets/images/homeHeader.jpeg"
      imageFive="assets/images/homeHeader.jpeg"
      header="The Struggle:"
    />

    <Solution
      imageOne="assets/images/homeHeader.jpeg"
      imageTwo="assets/images/homeHeader.jpeg"
      header="The Solution:"
    />
    
    <Footer />
  </section>;

export default Home;