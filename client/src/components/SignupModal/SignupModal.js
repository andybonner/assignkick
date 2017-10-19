// Dependencies
import React from "react";
import SignupForm from "../../components/SignupForm";
import { Link } from "react-router-dom";

// ModalForm component
const SignupModal = props => {
  let modalStyle = {
    height: props.modalHeight,
    padding: props.modalPadding,
  };

  return(
    <section id={ props.id } style={ modalStyle }>

      <section >
        <h4 className="text-center" style={{ marginBottom: "30px" }}>{ props.modelHeader }</h4>

        <SignupForm 
          formId={ props.formId }
        />
      </section>

      <section className="modal-footer">
        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
          { props.submitBtnTxt }
        </a>

        <Link to="/" className="modal-action modal-close waves-effect waves-green btn-flat">
          { props.cancelBtnTxt }
        </Link>
      </section>

    </section>
  )};

export default SignupModal;