// Dependencies
import React from "react";
import "./SignupForm.css";
import FormText from "../../components/FormItem/FormText";
import FormPass from "../../components/FormItem/FormPass";

// Form component
const SignupForm = props =>
  <section className="form">     
    <div id={ props.id }>      
      <form action="/" method="post">
        <FormText 
          reqLabelText="First Name"
        />
      
        <FormText 
          reqLabelText="Last Name"
        />

        <FormText 
          reqLabelText="Username"
        />

        <FormText 
          reqLabelText="Email Address"
        />
        
        <FormPass 
          reqLabelText="Password"
        />
      </form>
    </div>
  </section>;

  export default SignupForm;