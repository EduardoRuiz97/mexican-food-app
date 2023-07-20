import classes from './Rates.module.css';

const DUMMY_RATES = [
  {
    title:  "Delicious Mexican Fare!",
    date: '20/05/2023',
    rate: "Authentic flavors, vibrant ambiance, exceptional service! A must-visit for Mexican food lovers."
  },
  {
    title:  "A Fiesta of Flavors",
    date: '20/05/2023',
    rate: "A fiesta for your taste buds, with diverse Mexican dishes and lively atmosphere! Perfect for a fun night out."
  },
  {
    title:  "Mexican Delights in Every Bite!",
    date: '20/05/2023',
    rate: "Transporting you to Mexico with every bite. The menu showcases traditional favorites expertly prepared and presented."
  }
]

const Rates = () => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <ul className={classes.list}>
          {DUMMY_RATES.map((review,index) => 
            <li key={index}>
              <h3>{review.title}</h3>
              <p>{review.rate}</p>
              <span>{review.date}</span>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
};

export default Rates