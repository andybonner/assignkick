// Dependencies
import React from "react";
import "./Struggle.css";
import {Carousel} from 'react-materialize';

// Struggle component
const Struggle = props =>
  <section className="about-container">
    <h3 className="about-title">{ props.header }</h3>

    <Carousel
      options={{ duration: 1 }}
      images={[
        'assets/images/3rd.png',
        'assets/images/2nd.png',
        'assets/images/3rd.png',
        'assets/images/3rd.png',
        'assets/images/3rd.png'
      ]} 
      />
  </section>;

export default Struggle;