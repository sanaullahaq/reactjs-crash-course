import classes from "./Modal.module.css";
import { useState } from "react";
// function Modal(props) {
function Modal({ children, hideModalHandler }) {
  // This is called object destructuring, so that we can diretcly use the properties contains in props
  // However here the 'children' is a special properties what contains the wrapped element by this Modal component
  // So we must use the name 'children' here, on the other cases we can use other given names likes {author, text} in Post.jsx

  return (
    <>
      <div className={classes.backdrop} onClick={hideModalHandler} />
      <dialog open={true} className={classes.modal}>
        {/* by default open is true */}
        {/* {props.children} */}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
