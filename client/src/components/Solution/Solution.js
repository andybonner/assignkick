// Dependencies
import React from "react";
import "./Solution.css";

// Solution component
const Solution = props =>
  <section className="solution-container">
    <h3 className="solution-title">{ props.header }</h3>

    <div className="row">
      <div className="col-sm-6">
        <img src={ props.imageOne } alt={ props.imageOneDesc } />
      </div>

      <div className="col-sm-6">
        <img src={ props.imageTwo } alt={ props.imageTwoDesc } />
      </div>
    </div>
  </section>;

export default Solution;