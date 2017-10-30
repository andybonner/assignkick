import React from "react";

// css
import "./Solution.css";

const Solution = props =>
  <section className="solution-container">
    <h3 className="solution-title text-center">{ props.header }</h3>

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