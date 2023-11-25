import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

// function Modal(props) {
function Modal({ children }) {
  // This is called object destructuring, so that we can diretcly use the properties contains in props
  // However here the 'children' is a special properties what contains the wrapped element by this Modal component
  // So we must use the name 'children' here, on the other cases we can use other given names likes {author, text} in Post.jsx

  const navigate = useNavigate();

  function closeHandler() {
    // navigate("/");
    navigate("..");  //the tow dots means this function will navigate to one level up (same as cd .. in the cmd prompt) or to the parent route
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {/* by default open is true */}
        {/* {props.children} */}
        {children}
      </dialog>
    </>
  );
}

export default Modal;
