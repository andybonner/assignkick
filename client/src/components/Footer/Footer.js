// Dependencies
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

// Footer component
const Footer = () =>
  <footer className="footer">
    <div className="row row-container">
      <div className="col-sm-3">
        <p className="site-map">Site Map</p>
        <p><Link to="/assign">Home</Link></p>
        <p><Link to="/about">About</Link></p>
      </div>

      <div className="col-sm-3">
      
      </div>
      <div className="col-sm-3">
      
      </div>
      <div className="col-sm-3">
      
      </div>
    </div>
  </footer>;

export default Footer;
