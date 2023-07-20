import Homebanner from "../components/HomeComponents/Homebanner/Homebanner";
import HomeMeals from "../components/HomeComponents/HomeMeals/HomeMeals";
import Options from "../components/HomeComponents/Options/Options";
import Rates from "../components/HomeComponents/rates/Rates";
import classes from '../styles/Home.module.css';
import { GrMailOption } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { Fragment } from "react";
import Head from "next/head";


const HomePage = (props) => {

  return (
    <Fragment>

      <Head>
        <title>Mexicuisine Mexican Restaurant</title>
        <meta name="description" content="Delicious food for mexican and non mexican people. If you wanna try the real mexican Cuisine come and visit us"/>
      </Head>

      <div>
        <Homebanner />
        <Rates />
        <Options />
        <HomeMeals meals={props.meals}/>

        <div className={classes.information}>
          <h1>Information & hours</h1>
          
          <div className={classes.contact}>

            <h3>Contact info:</h3>

            <span>
              <GrMailOption className={classes.icon}/> randomEmail@example.com
            </span>

            <span>
              <GrPhone className={classes.icon}/> 444 333 5555
            </span>

            <div className={classes.media}>
              <FaFacebookF className={classes.icon}/>
              <FaInstagram className={classes.icon}/>
              <FaYelp className={classes.icon}/>
            </div>

          </div>

          <div className={classes.hours}>

            <h3>Open hours:</h3>

            <ul>
              <li>Monday Closed</li>
              <li>Tuesday 3:00 p.m. - 9:00 p.m.</li>
              <li>Wednesday 3:00 p.m. - 9:00 p.m.</li>
              <li>Thursday 3:00 p.m. - 9:00 p.m.</li>
              <li>Friday 3:00 p.m. - 9:00 p.m.</li>
              <li>Saturday 3:00 p.m. - 9:00 p.m.</li>
              <li>Sunday 3:00 p.m. - 9:00 p.m.</li>
            </ul>

          </div>


        </div>

        {/* <h1>Mexican Food Restaurant Home Page </h1>
        <p>La nueva casa de la comida mexicana</p>
        <Link href='meals-list'>
          <button>See Menu</button>
        </Link> */}
      </div>
    </Fragment>
  );
};

export default HomePage;


export async function getStaticProps () {
  

  const response = await fetch('https://mexican-meals-default-rtdb.firebaseio.com/meals.json');

  if (!response.ok) {
  }

  const data = await response.json();


  return {
    props: {
      meals: data
    }, 
    revalidate: 3600 * 24
  }
}