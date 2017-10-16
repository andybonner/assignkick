// Dependencies
import React from "react";

// FormPass component
const FormPass = (props) =>
  <div className="field-wrap">
    <label>
      { props.reqLabelText }<span className="req">*</span>
    </label>
    <input type="password" required />
  </div>;

export default FormPass;