import React, { Fragment } from "react";

const BackDrop = (props) => {
  return (
    <div
      className="fixed top-0 right-0 left-0 w-full h-screen bg-black opacity-70 z-20"
      onClose={props.onClose}
    >
      {props.children}
    </div>
  );
};

const Overlay = (props) => {
  return (
    <div className="rounded-lg bg-white p-3 shadow-lg z-30 fixed top-8 left-8 right-8">
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <BackDrop onClose={props.onClose} />
      <Overlay>{props.children}</Overlay>
    </Fragment>
  );
};

export default Modal;
