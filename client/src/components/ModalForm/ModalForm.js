// Dependencies
import React from "react";
import Form from "../../components/Form";
import { Link } from "react-router-dom";

// ModalForm component
const ModalForm = (props) =>
  <section id={ props.id } className="modal modal-fixed-footer">
    <section className="modal-content">
      <h4 className="text-center">{ props.modelHeader }</h4>
      <Form 
        id="signupForm"
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
  </section>;

export default ModalForm;