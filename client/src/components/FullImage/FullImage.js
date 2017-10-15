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
  </div>;

export default FullImage;