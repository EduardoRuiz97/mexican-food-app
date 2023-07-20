import Button from '../../UI/Button/Button';
import classes from './Form.module.css';
import { useState } from 'react';
import Select from 'react-select'
import { useDispatch } from "react-redux";
import { cartSliceActions } from '../../../store/cart-slice';


const Form = (props) => {

  const dispatch = useDispatch();

  const [fillingsOption, setFillingsOption] = useState('Select Option')
  const [quantity, setQuantity] = useState(1);
  const [option, setOption] = useState('');


  const selectOptionHandler = (event) => {
    setFillingsOption(event.value);
  }
  
  const decreaseHandler = () => {
    if (quantity === 1) {
    }
    
    setQuantity(quantity - 1);
  }
  
  const increaseHandler = () => {
    setQuantity(quantity + 1);
  }
  
  const changeHandler = (event) => {
    setOption(event.target.value);
  }


  let isFormInvalid = false;

  if (fillingsOption === 'Select Option' && option === '') {
    isFormInvalid = true
  }

  const submitHandler = (event) => {
    event.preventDefault();


    const itemToCart = {
      mealId: props.meal.id,
      mealName: props.meal.name,
      mealPrice: props.meal.price,
      mealImage: props.meal.image,
      quantity,
      option,
      filling: fillingsOption
    }

    if (isFormInvalid) {
      return;

    }

    dispatch(cartSliceActions.addToCart(itemToCart))
    setFillingsOption('Select Option')
    setQuantity(1);
    setOption('');

  }




  let fillingsArray = props.meal.fillings?.map(item => {
    const option = {label: item, value: item}
    return option;
  });


  return (
    <form className={classes.form} onSubmit={submitHandler} onChange={changeHandler}>

      {
      props.meal.fillings && 
      <div className={classes.select}>
        <h4>{`filling ${props.meal.name}`}</h4>
        <Select 
        options={fillingsArray} 
        onChange={selectOptionHandler}
        defaultValue={{label: fillingsOption, value: fillingsOption}}
        />
      </div>
      }

      <div className={classes.counter}>
        <button type='button' onClick={decreaseHandler} disabled={quantity === 1 && true}>-</button>
        <span>{quantity}</span>
        <button type='button' onClick={increaseHandler}>+</button>
      </div>

      <div className={classes.options}>
        <div>
          <h4>How to get it</h4>
          <span>required</span>
        </div>

        <div>
          <input 
          type='radio' 
          id='local' 
          value='local' 
          name='option'
          ></input>

          <label htmlFor='local'>Local Delivery <span>Check your Address</span></label>
        </div>

        <div>

          <input 
          type='radio' 
          id='local' 
          value='pickup' 
          name='option'
          ></input>

          <label htmlFor='local'>Store PickUp <span>Mexicuisine at some Street, some Avenue, some City</span></label>
        </div>
      </div>

      <Button disabled={isFormInvalid && true}>Add to cart</Button>
      
    </form>
  )
};

export default Form;