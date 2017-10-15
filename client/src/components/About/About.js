// Dependencies
import React, { Component } from "react";
import "./About.css";

// About component
const About = () =>
<section>
  <h3 className="about-title">The Struggle:</h3>

  <div id="slider_wrapper">
    <div id="slider">
      <div id="slides_info">
        <div className="slide_info one">
          <h2>Title Three</h2>
          <p>
            This is where the third cartoon image will be displayed.
          </p>
        </div>

        <div className="slide_info two">
          <h2>Title Four</h2>
          <p>
            This is where the fourth cartoon image will be displayed.
          </p>
        </div>

        <div className="slide_info three">
          <h2>Title One</h2>
          <p>
            This is where the first cartoon image will be displayed.
          </p>
        </div>

        <div className="slide_info four">
          <h2>Title Two</h2>
          <p>
            This is where the second cartoon image will be displayed.
          </p>
        </div>
      </div>
      
      <div id="slides_image">
        <div className="slide one">
          <img src="http://cssdeck.com/uploads/media/items/4/41tAxTu.png" />
        </div>		
        <div className="slide two">
          <img src="http://cssdeck.com/uploads/media/items/1/1hjGftu.png" />
        </div>		
        <div className="slide three">				
          <img src="http://cssdeck.com/uploads/media/items/4/4OIJyak.png" />
        </div>		
        <div className="slide four">				
          <img src="http://cssdeck.com/uploads/media/items/6/68BYSto.png" />
        </div>
      </div>
    </div>
  </div>
</section>;

export default About;