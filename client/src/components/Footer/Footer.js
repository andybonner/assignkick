import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () =>
  <footer className="footer">
    <div className="row row-container">
      <div className="col-sm-3">
        <p className="site-map">Site Map</p>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/main">About</Link></p>
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
