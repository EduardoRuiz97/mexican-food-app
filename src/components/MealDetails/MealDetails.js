import Form from "./Form/Form";
import classes from './MealDetails.module.css';
import Link from "next/link";
import { useSelector } from "react-redux";

const MealDetails = (props) => {
  
  const cartData = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalCost);

  return (
    <>
      <div className={classes.navig}>
        <Link href='/meals-list' className={classes.link}>Order Now </Link> {`> ${props.meal.name}`}
      </div>

      <section className={classes.section}>
        <img src={props.meal.image}></img>

        <div className={classes.details}>
          <h1>{props.meal.name}</h1>
          <span className={classes.price}>{`${props.meal.price} CAD`}</span>
          <p>{props.meal.description}</p>
          <Form meal={props.meal}/>
        </div>

      </section>
    </>
  )
};

export default MealDetails;