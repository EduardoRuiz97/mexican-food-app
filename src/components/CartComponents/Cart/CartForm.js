import { MdOutlineLocationOn } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import classes from './CartForm.module.css';
import { useState } from "react";

const CartForm = (props) => {

  const [tip, setTip] = useState(15);
  const [customTip, setCustomTip] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false);

  const tipAmountHandler = (event) => {
    setTip(Number(event.target.id));

    if (event.target.id === 'other') {
      setIsFormOpen(true);
    }
  }

  const customTipHandler = (event) => {
    setCustomTip(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    setTip(customTip);
    setCustomTip('');
    setIsFormOpen(false);
  }

  let tipAmount = tip * props.totalCost /100;
  let taxAmount = 0.135 * props.totalCost;
  let totalAmount = props.totalCost + tipAmount + taxAmount;
  
  return (
    <div className={classes.container}>

      <div className={classes.field}>
        <h4>How to get it <span>edit</span></h4>

        <div className={classes.info}>
          <span>
            <MdOutlineLocationOn className={classes.icon}/>
            Some location
          </span>
          <span>
            <BiTime className={classes.icon}/>
            Some time
          </span>
        </div>
      </div>

      <div className={classes.field}>
        <h4>Add a tip</h4>

        <div className={classes.tip}>

          <button id='15' onClick={tipAmountHandler}>
            <span id='15'><strong>15%</strong>{`$${(0.15*props.totalCost).toFixed(2)}`}</span>
          </button>

          <button id='20' onClick={tipAmountHandler}>
            <span id="20"><strong>20%</strong>{`$${(0.2*props.totalCost).toFixed(2)}`}</span>
          </button>

          <button id='25' onClick={tipAmountHandler}>
            <span id="25" ><strong>25%</strong>{`$${(0.25*props.totalCost).toFixed(2)}`}</span>
          </button>

          <button id='other' onClick={tipAmountHandler}>
            <span id="other"><strong>Other</strong></span>
          </button>

        </div>

        {isFormOpen && <form className={classes.custom} onSubmit={submitHandler}>
            <label htmlFor="quantity">Custom tip:</label>
            <input 
            type='number' 
            name='quantity' 
            id='quantity'
            onChange={customTipHandler}
            value={customTip}
            placeholder='Tip %'
            ></input>
            <button>Set</button>
        </form>}

      </div>

      <div className={classes.field}>
        <div className={classes.total}>

          <span>Subtotal: <strong>{`$${(props.totalCost).toFixed(2)}`}</strong></span>
          <span>Estimated taxes (13.5%): <strong>{`$${taxAmount.toFixed(2)}`}</strong></span>
          <span>Tip: <strong>{tipAmount ? `$${tipAmount.toFixed(2)}` : 'set tip amount'}</strong></span>
          <span style={{fontWeight: '700'}}>Total: <strong>{`$${totalAmount.toFixed(2)}`}</strong></span>
          <p>Additional taxes and fees will be calculated at checkout</p>

        </div>
      </div>

      <button className={classes.checkout}>Continue to payment</button>
    </div>
  )
} 

export default CartForm;