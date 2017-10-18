// Dependencies
import React, { Component } from "react";
import FullImage from "../../components/FullImage";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import Struggle from "../../components/Struggle";
import Solution from "../../components/Solution";
import {Carousel} from 'react-materialize';

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

<<<<<<< HEAD
    <Struggle
=======
    <Struggle 
      imageOne="assets/images/homeHeader.jpeg"
      imageTwo="assets/images/2nd.png"
      imageThree="assets/images/3rd.png"
      imageFour="assets/images/homeHeader.jpeg"
      imageFive="assets/images/homeHeader.jpeg"
>>>>>>> ecda6781af1a9764fb729aa678b1cb79d2680390
      header="The Struggle:"
      imageDesc="Cartoon"
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