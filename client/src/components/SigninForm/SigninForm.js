// Dependencies
import React from "react";
import "./SigninForm.css";
import FormText from "../../components/FormItem/FormText";
import FormPass from "../../components/FormItem/FormPass";

// Form component
const SigninForm = props =>
  <section className="form">     
    <div id={ props.id }>      
      <form action="/" method="post">
        <FormText 
          reqLabelText="Email Address"
        />
        
        <FormPass 
          reqLabelText="Password"
        />
      </form>
    </div>
  </section>;

  export default SigninForm;