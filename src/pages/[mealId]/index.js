import MealDetails from "../../components/MealDetails/MealDetails";
import Head from "next/head";

const MealPage = (props) => {

  return(
    <>

      <Head>
        <title>{`Mexicuisine: ${props.meal.name}`}</title>
        <meta name="description" content={props.meal.description}/>
      </Head>
      <MealDetails meal={props.meal}/>
    </>
  )
};

export default MealPage;


export async function getStaticPaths () {
  const response = await fetch('https://mexican-meals-default-rtdb.firebaseio.com/meals.json');

  if (!response.ok) {
  }

  const data = await response.json();

  return {
    fallback: false,
    paths: data.map(item => ({params: {mealId: item.id.toString()}}))
  }

}

export async function getStaticProps (context) {

  const mealId = context.params.mealId;

  const response = await fetch('https://mexican-meals-default-rtdb.firebaseio.com/meals.json');

  if (!response.ok) {
  }

  const data = await response.json();
  const item = data.find(meal => meal.id === mealId);

  return {
    props: {
      meal: item
    }, 
    revalidate: 10
  }
}