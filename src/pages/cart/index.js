import CartComp from "../../components/CartComponents/Cart/Cart";
import CartForm from '../../components/CartComponents/Cart/CartForm';
import classes from './Cart.module.css';
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { MdArrowBackIos } from "react-icons/md";
import { Fragment } from "react";
import Head from "next/head";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalCost = useSelector(state => state.cart.totalCost)
  const router = useRouter();

  const returnHandler = () => {
    router.push('/meals-list')
  }

  return (
    <Fragment>

      <Head>
        <title>Mexicuisine Cart</title>
        <meta name="description" content="This is the cart, if you are ready go to the checkout"/>
      </Head>

      <div className={classes.container}>

        <div className={classes.options}>
          <button onClick={returnHandler}>
            <MdArrowBackIos className={classes.icon}/>
            Continue shopping
            </button>
          <img></img>
        </div>      

        <h1 className={classes.title}>Your cart</h1>

        <div className={classes.content}>
          <CartComp cartItems={cartItems}/>
          <CartForm totalCost={totalCost}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart;