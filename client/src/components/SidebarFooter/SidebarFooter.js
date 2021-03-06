import React from "react";

// css
import "./SidebarFooter.css";

const SidebarFooter = (props) =>
  <ul className="copyright">
    <p className="text-center copyright">{ props.footerText }</p>
  </ul>;

export default SidebarFooter;