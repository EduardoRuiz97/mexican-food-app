import Meal from "./Meal";
import classes from './Categories.module.css';

const Categories = (props) => {

  const mealsList = props.meals.filter(item => item.category === props.category);


  return (
    <li className={classes.li}>

      <span className={classes.category}>{props.category}</span>

      <ul>
        {mealsList.map(item => 
        <Meal
        key={item.id}
        meal={item} 
        />)}
      </ul>
    </li>
  )
};

export default Categories;