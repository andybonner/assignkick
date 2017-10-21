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
class Home extends Component {
  render() {
    return(
      <section className="home-container">
        <FullImage 
          backgroundImage="assets/images/homeHeader.jpeg"
          captionHeader="AssignKick"
          captionCatch="Are you a student? Having a hard time managing your class assignments."
          captionText="We, at AssignKick, know your struggle. That's why we developed an open source Assignment Management Application great for getting you more organized."
        >
          <SideNav />
        </FullImage>

        <Struggle
          header="The Struggle:"
          imageDesc="Cartoon"
          firstImage="assets/images/slide_logo.png"
          secondImage="assets/images/kids.png"
          thirdImage="assets/images/2nd.png"
          fourthImage="assets/images/3rd.png"
          fifthImage="assets/images/AsKi_screen.png"
          className="cartoons"
          struggleInfo="We are all too aware of the stuggle. It happens to the best of us."
        >
        </Struggle>

        <Solution
          imageOne="assets/images/homeHeader.jpeg"
          imageTwo="assets/images/homeHeader.jpeg"
          header="The Solution:"
          imageOneDesc="App Screenshot 1"
          imageTwoDesc="App Screenshot 2"
        />
        
        <Footer />
      </section>
    )}
}

export default Home;