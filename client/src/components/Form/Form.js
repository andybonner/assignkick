// Dependencies
import React from "react";
import "./Form.css";
import FormText from "../../components/FormItem/FormText";
import FormPass from "../../components/FormItem/FormPass";

// Signup component
const Form = (props) =>
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

  export default Form;