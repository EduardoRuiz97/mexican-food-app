import classes from './Modal.module.css';
import Portal from '../../UI/Portal/Portal';

const Modal = (props) => {
  return (
    <Portal>
      <div className={classes.backdrop}>
      </div>

      <div className={classes.modal} onMouseLeave={props.onClick}>
        <div>{props.children}</div>
      </div>
    </Portal>
  )
};

export default Modal;