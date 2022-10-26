import React from "react";
import close from '../../images/icon-close.svg';
import rules from '../../images/image-rules.svg';


function Modal(props){

    return(
        <div className="modal-container">
      <div className="modal-box">
       <div className="modal__header">
         <h1>Rules</h1>
         <button onClick={props.toggle}>
            <img src={close} alt="Close"/>
          </button>
        </div>
        <img src={rules} alt="Rules" />
      </div>
    </div>
        );


    }

export default Modal;