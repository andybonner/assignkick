// Dependencies
import React from "react";
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
      captionHeader="AssignKick"
      captionCatch="Are you a student? Having a hard time managing your time with class assignments."
      captionText="We, at AssignKick, know your struggle. That's why we developed a open source Assignment Management Application is great for getting organized."
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
      imageDesc="Cartoon"
    />

    <Solution
      imageOne="assets/images/homeHeader.jpeg"
      imageTwo="assets/images/homeHeader.jpeg"
      header="The Solution:"
      imageOneDesc="App Screenshot 1"
      imageTwoDesc="App Screenshot 2"
    />
    
    <Footer />
  </section>;

export default Home;