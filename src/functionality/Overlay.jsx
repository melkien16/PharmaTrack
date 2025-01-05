import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 right-0 left-0 w-full h-screen bg-black opacity-70 z-30"
      onClose={props.onClose}
    />
  );
};

const Overlay = (props) => {
  return (
    <div className="rounded-lg w-3/4 bg-white p-3 shadow-lg fixed top-[15vh] left-[13%] z-40">
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const port = document.getElementById("portal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, port)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, port)}
    </Fragment>
  );
};

export default Modal;
