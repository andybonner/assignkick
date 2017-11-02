import React, { Component } from "react";
import FullImage from "../../components/FullImage";
import SideNav from "../../components/SideNav";
import Struggle from "../../components/Struggle";
import Solution from "../../components/Solution";

// css
import "./Home.css";

class Home extends Component {
  render() {
    return(
      <section className="home-container">
        <FullImage 
          backgroundImage="assets/images/education.gif"
          captionHeader="AssignKick"
          captionCatch="Are you a student? Having a hard time managing your class assignments."
          captionText="We, at AssignKick, know your struggle. That's why we developed an open source Assignment Management Application great for getting you more organized." >
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
          struggleInfo="We are all too aware of the stuggle. It happens to the best of us." >
        </Struggle>

        <Solution
          imageOne="assets/images/homepage.png"
          imageTwo="assets/images/application.png"
          header="The Solution:"
          imageOneDesc="App Screenshot 1"
          imageTwoDesc="App Screenshot 2" />
      </section>
    )}
}

export default Home;