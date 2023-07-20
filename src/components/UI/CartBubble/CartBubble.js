import classes from './CartBubble.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';
import { cartSliceActions } from '../../../store/cart-slice';
import Link from 'next/link';

const CartBubble = () => {

  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart.cartItems);


  const totalPrice = useSelector(state => state.cart.totalCost)

  
  const closeCartBubble = () => {
    setTimeout(() => {
      dispatch(cartSliceActions.closeCartBubble())
    }, 300)
  }

  let listContent = (
  <ul>
  {cartData.map((item, index) => <CartItem cartMeals={item} key={index}/>)}
  </ul>
  )

  if (cartData.length === 0) {
    listContent = <h2 className={classes.empty}>Your cart is empty</h2>
  }

  return (

    <Modal onClick={closeCartBubble}>
      <div className={classes.cart}>
        <h1>Your Cart</h1>
        <div className={classes.list}>
          {listContent}
        </div>
        <Link href='/cart' style={{width: '100%'}}>
          {cartData.length > 0 && <button>
            Continue to cart
            {totalPrice > 0 && <span>{`(${totalPrice.toFixed(2)} CAD)`}</span>}
          </button>}
        </Link>
      </div>
    </Modal>
    
  )
};

export default CartBubble;