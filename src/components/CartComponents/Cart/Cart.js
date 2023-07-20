
import CartItem from "./CartItem";
import classes from './Cart.module.css';
import { useRouter } from "next/router";


const CartComp = (props) => {
  const router = useRouter();

  const buttonHandler = () => {
    router.push('/')
  }

  return (
    <div className={classes.cart}>
      <h3>{`Your order (${props.cartItems.length} items)`}</h3>

      <ul>
        {props.cartItems.map((item, index) => <CartItem key={index} cartMeals={item}/>)}
      </ul>
      

      <button className={classes.btn} onClick={buttonHandler}>Add more items</button>

    </div>
  )
};

export default CartComp;