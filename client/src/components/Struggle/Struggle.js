// Dependencies
import React, { Component } from "react";
import Carousel from 'antd/lib/carousel';

// Import CSS
import "./Struggle.css";

// Struggle component
class Struggle extends Component {
  render() {
    const setting = {
      speed: 500
    }

    return(
      <section className="struggleContainer">
        <h3 className="about-title text-center">{ this.props.header }</h3>

        <p className="text-center struggleInfo">{ this.props.struggleInfo }</p>

        <Carousel 
          autoplay 
          scrollx
          {...setting}
        >
          <div>
            <img src={ this.props.firstImage } className={ this.props.className } alt={ this.props.firstImage } />
          </div>
          <div>
            <img src={ this.props.secondImage } className={ this.props.className } alt={ this.props.secondImage } />
          </div>
          <div>
            <img src={ this.props.thirdImage } className={ this.props.className } alt={ this.props.thirdImage } />
          </div>
          <div>
            <img src={ this.props.fourthImage } className={ this.props.className } alt={ this.props.fourthImage } />
          </div>
          <div>
            <img src={ this.props.fifthImage } className={ this.props.className } alt={ this.props.fifthImage } />
          </div>
        </Carousel>

      </section>
  )}
};

export default Struggle;