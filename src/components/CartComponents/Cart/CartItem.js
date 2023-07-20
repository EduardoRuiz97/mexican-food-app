import { useState } from "react";
import classes from './CartItem.module.css';
import { BsFillTrash3Fill } from "react-icons/bs";
import { cartSliceActions } from '../../../store/cart-slice';
import { useDispatch } from "react-redux";

const CartItem = (props) => {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const decreaseHandler = () => {
    if (quantity === 1) {
    }
    
    setQuantity(quantity - 1);
    dispatch(cartSliceActions.reduceQuantity(props.cartMeals))
  }
  
  const increaseHandler = () => {
    setQuantity(quantity + 1);

    dispatch(cartSliceActions.addToCart({
      mealId: props.cartMeals.mealId,
      mealPrice: props.cartMeals.mealPrice,
      quantity: 1
    }))
  }


  const removeItemFromCart = () => {
    dispatch(cartSliceActions.removeItemFromCart(props.cartMeals));
  }



  return (
    <li>

      <div className={classes.content}>

        <img src={props.cartMeals.mealImage} alt='cart item illustration'></img>

        <div className={classes.info}>

          <span>{props.cartMeals.mealName}</span>

          <div className={classes.counter}>
            <button type='button' onClick={decreaseHandler} disabled={quantity === 1 && true}>-</button>
            <span>{quantity}</span>
            <button type='button' onClick={increaseHandler}>+</button>
          </div>

        </div>

        <div className={classes.action}>

          <span>{`$${props.cartMeals.mealPrice} x ${props.cartMeals.quantity}`}</span>
          <BsFillTrash3Fill className={classes.icon} onClick={removeItemFromCart}/>

        </div>

      </div>

    </li>
  )
};

export default CartItem;