import Categories from "./Categories";
import classes from './MealList.module.css';

const MealList = (props) => {

  const categories = props.meals?.map(item => {
    let categories = item.category;
    let array = [];
    array.push(categories);
    return categories;
  });

  const noRepeatedCategories = [... new Set(categories)]

  return (
    <ul className={classes.list}>
      {noRepeatedCategories.map((item, index) => 
        <Categories 
        category={item}
        meals={props.meals}
        key={index}
        />
      )}
    </ul>
  )
};

export default MealList;