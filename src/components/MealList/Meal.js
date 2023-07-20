import Link from "next/link";
import classes from './Meal.module.css';

const Meal = (props) => {
  return (
    <li className={classes.meal}>
      <Link href={`/${props.meal.id}`} className={classes.container}>
        <div className={classes.text}>
          <h3>{props.meal.name}</h3>
          <p>{props.meal.description}</p>
          <span>{`${props.meal.price} CAD`}</span>
        </div>
        <img src={props.meal.image} alt={props.meal.name}></img>
      </Link>
    </li>
  )
};

export default Meal;