import classes from './Homebanner.module.css';
import Button from '../../UI/Button/Button';
import Link from 'next/link';

const Homebanner = () => {
  return (
    <div className={classes.banner}>

      <div className={classes.layout}>
        <div className={classes.text}>
          <h1>Mexicuisine</h1>
          <h2>A culinary journey through Mexico</h2>
          <Link href='/meals-list'>
            <Button>
              Order now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default Homebanner;