// Dependencies
import React from "react";
import SigninForm from "../../components/SigninForm";
import { Link } from "react-router-dom";

// ModalForm component
const SigninModal = props => {
  let modalStyle = {
    height: props.modalHeight,
    padding: props.modalPadding,
  };

  return(
    <section id={ props.id } className="modal modal-fixed-footer" style={ modalStyle }>

      <section >
        <h4 className="text-center" style={{ marginBottom: "30px" }}>{ props.modelHeader }</h4>

        <SigninForm 
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

export default SigninModal;