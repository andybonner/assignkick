// Dependencies
import React from "react";

// CSS
import "./SidebarFooter.css";

// CopyrightFooter component
const SidebarFooter = (props) =>
  <ul className="copyright">
    <p className="text-center">{ props.footerText }</p>
  </ul>;

export default SidebarFooter;