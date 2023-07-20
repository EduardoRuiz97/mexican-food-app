import Link from "next/link";
import Image from 'next/image';
import logo from '../../../public/images/mexican-restaurant-logo.png';
import classes from './Navbar.module.css';
import { GiTacos } from "react-icons/gi";
import { ImCart } from "react-icons/im";
import { IoIosClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Button from "../UI/Button/Button";
import { cartSliceActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Navbar = () => {

  const numberOfItems = useSelector(state => state.cart.cartItems).length;

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [animation, setAnimation] = useState (false);

  useEffect(() => {
    if (numberOfItems === 0) {
      return;
    }

    setAnimation(true);

    console.log('ha aumentado el numero de items en el carrito')

    setTimeout(() => {
      setAnimation(false);
    }, 1000)

  }, [numberOfItems])

  const dispatch = useDispatch();


  const openMenuHandler = () => {
    setMenuIsOpen(true);
  };

  const closeMenuHandler = () => {
    setMenuIsOpen(false);
  }

  const overCartHandler = () => {
    dispatch(cartSliceActions.openCartBubble())
  }

  
  return (
    <header className={classes.header} id='start'>
      <div>
        <Image src={logo} className={classes.img} alt='mexicuisine image logo'/>
      </div>

      <div className={menuIsOpen? `${classes.navbar} ${classes.open}`: classes.navbar}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>

          <li>
            <Link href='/about'>About Us</Link>
          </li>

          <li>
            <Link href='/meals-list'>Menu</Link>
          </li>

          <li>
            <Link href=''>Careers</Link>
          </li>

          <li>
            <Link href=''>Blog</Link>
          </li>

          <li>
            <Link href=''>Contact</Link>
          </li>
        </ul>

        <div className={classes.actions}>
          <Button>
            <Link href='/meals-list'>
              Order Now
            </Link>
          </Button>
        </div>

        <IoIosClose onClick={closeMenuHandler} className={classes.close}/>

      </div>


      <div className={classes.options}>
          <div>
            <ImCart className={classes.cart} onMouseOver={overCartHandler}/>
            {numberOfItems > 0 && <span className={animation ? classes.animation: ''}>{numberOfItems}</span>}
          </div>

        <GiTacos onClick={openMenuHandler} className={classes.menu}/>
      </div>


    </header>
  );
};

export default Navbar;