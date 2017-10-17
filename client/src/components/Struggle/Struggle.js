// Dependencies
import React from "react";
import "./Struggle.css";

// Struggle component
const Struggle = props =>
  <section className="about-container">
    <h3 className="about-title">{ props.header }</h3>

    <div className="carousel">
      <a className="carousel-item" href="#one!">
        <img src={ props.imageOne } alt={ props.imageDesc } />
      </a>

      <a className="carousel-item" href="#two!">
        <img src={ props.imageTwo } alt={ props.imageDesc } />
      </a>

      <a className="carousel-item" href="#three!">
        <img src={ props.imageThree } alt={ props.imageDesc } />
      </a>

      <a className="carousel-item" href="#four!">
        <img src={ props.imageFour } alt={ props.imageDesc } />
      </a>

      <a className="carousel-item" href="#five!">
        <img src={ props.imageFive } alt={ props.imageDesc } />
      </a>
    </div>
  </section>;

export default Struggle;