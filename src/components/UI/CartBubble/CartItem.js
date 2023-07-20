import { BsFillTrash3Fill } from "react-icons/bs";
import classes from './CartItem.module.css';
import { useDispatch } from "react-redux";
import { cartSliceActions } from "../../../store/cart-slice";

const CartItem = (props) => {

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(cartSliceActions.removeItemFromCart(props.cartMeals))
  }

  return (
    <li>
      <div className={classes.content}>
        <div className={classes.info}>
          <img src={props.cartMeals.mealImage}></img>
          <span>{props.cartMeals.mealName}</span>
        </div>

        <div className={classes.action}>
          <span>{`${props.cartMeals.mealPrice} CAD`}</span>
          <BsFillTrash3Fill className={classes.icon} onClick={removeItemFromCart}/>
        </div>
      </div>
    </li>
  )
}
export default CartItem;