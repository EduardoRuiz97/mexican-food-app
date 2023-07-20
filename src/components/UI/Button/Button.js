import classes from './Button.module.css';

const Button = (props) => {
  return  (
    <button 
    className={`${classes.button} ${props.classes}`}
    disabled={props.disabled}
    type={props.type}
    onClick={props.onClick}
    >{props.children}</button>
  )
};

export default Button;