// Dependencies
import React from "react";
import "./About.css";

// About component
const About = (props) =>
  <section>
    <h3 className="about-title">{ props.header }</h3>

    <div className="carousel">
      <a className="carousel-item" href="#one!">
        <img src={ props.imageOne } />
      </a>

      <a className="carousel-item" href="#two!">
        <img src={ props.imageTwo } />
      </a>

      <a className="carousel-item" href="#three!">
        <img src={ props.imageThree } />
      </a>

      <a className="carousel-item" href="#four!">
        <img src={ props.imageFour } />
      </a>

      <a className="carousel-item" href="#five!">
        <img src={ props.imageFive } />
      </a>
    </div>
  </section>;

export default About;