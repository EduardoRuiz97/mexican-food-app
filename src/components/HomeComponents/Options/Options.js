import Link from "next/link"
import Button from "../../UI/Button/Button";
import classes from  './Options.module.css';
import { GiFoodTruck } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiMexico } from "react-icons/gi";

const Options = () => {
  return (
    <section className={classes.section}>

      <div className={classes.layout}>

        <ul className={classes.list}>

          <li>
            <GiFoodTruck className={classes.icon}/>
            <h3>Catering</h3>
            <span>Food for your party</span>
            <Link href='/'>
              <Button>View Products</Button>
            </Link>
          </li>

          <li>
            <CiDeliveryTruck className={classes.icon}/>
            <h3>Pick up or Delivery</h3>
            <span>Order directly with us</span>
            <Link href='/'>
              <Button>View Products</Button>
            </Link>
          </li>

          <li>
            <GiMexico className={classes.icon}/>
            <h3>Learn more about Mexico</h3>
            <span>Interesting facts about our beautiful country</span>
            <Link href='/'>
              <Button>Our blog</Button>
            </Link>
          </li>

        </ul>
        
      </div>

    </section>
  )
};

export default Options;