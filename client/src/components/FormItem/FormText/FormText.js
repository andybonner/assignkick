// Dependencies
import React from "react";

// FormText component
const FormText = (props) =>
  <div className="field-wrap">
    <label>
      { props.reqLabelText }<span className="req">*</span>
    </label>
    <input type="text" required />
  </div>;

export default FormText;