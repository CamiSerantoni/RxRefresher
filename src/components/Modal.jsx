import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
    //we use this approach to go up to the paent route
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />

      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
