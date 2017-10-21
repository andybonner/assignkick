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
      <h2 className="caption-header">{ props.captionHeader }</h2>
      <div className="caption-text">
        <p>{ props.captionCatch }</p>
        <p>{ props.captionText }</p>
      </div>
    </div>
  </div>;

export default FullImage;