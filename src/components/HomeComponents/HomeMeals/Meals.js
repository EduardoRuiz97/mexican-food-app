import Link from "next/link"
import classes from './Meals.module.css';

const Meals = (props) => {
  return (
    <li className={classes.meal}>
      <Link href={`/${props.meal.id}`}>
        <div className={classes.container}>
          
          <img src={props.meal.image} alt={props.meal.name}></img>

          <div className={classes.text}>
            <span>{props.meal.name}</span>
            <span>{`$${props.meal.price} CAD`}</span>
          </div>

        </div>
      </Link>
    </li>
  )
};

export default Meals;