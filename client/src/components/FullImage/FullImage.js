// Dependencies
import React from "react";
import "./FullImage.css";

// FullImage component
const FullImage = (props) => 
  <div
    className="bg"
    style={{ backgroundImage: `url(${props.backgroundImage})` }}
  >
    {props.children}
    <div className="catch text-center">
      <h2>{ props.captionHeader}</h2>
      <p>{ props.captionCatch }</p>
      <p>{ props.captionText }</p>
    </div>
  </div>;

export default FullImage;