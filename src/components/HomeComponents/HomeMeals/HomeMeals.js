import Meals from "./Meals";
import classes from './HomeMeals.module.css';

const HomeMeals = (props) => {

  const popularMeals = props.meals.filter(item => item.rate > 9.4).slice(1,10);

  return (
    <section className={classes.section}>
      <h1>Most Popular</h1>
      <div className={classes.div}>
        <ul className={classes.list}>
          {popularMeals.map((meal,index) => 
            <Meals
            meal={meal} 
            key={index}
            />
          )}
        </ul>
      </div>
    </section>
  )
};

export default HomeMeals;