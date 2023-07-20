import Head from "next/head";
import { Fragment } from "react";
import MealList from "../../components/MealList/MealList";
import Banner from "../../components/UI/Banner/Banner";

const MealsPage = (props) => {  

  return (

    <Fragment>

      <Head>
        <title>Mexicuisine Menu</title>
        <meta name="description" content="Check out the wide range of mexican dishes we have to offer for you."/>
      </Head>

      <div style={{overflow:'hidden'}}>
        <div>Location</div>
        <Banner
        title='Menu & specials'
        slogan= 'Where tradition meets taste'
        />
        <div>Filter</div>
        <MealList meals={props.meals}/>
      </div>
    </Fragment>

    
  );
};

export default MealsPage;

export async function getStaticProps () {

  const response = await fetch('https://mexican-meals-default-rtdb.firebaseio.com/meals.json');

  if (!response.ok) {
  }

  const data = await response.json();

  return {
    props: {
      meals: data
    }, 
    revalidate: 3600*2
  }
}