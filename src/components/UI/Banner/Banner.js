import classes from './Banner.module.css';

const Banner = (props) => {
  return (
    <div className={classes.banner}>
      <div className={classes.layout}>
        <h1>{props.title}</h1>
        <h4>{props.slogan}</h4>
      </div>
    </div>
  )
};

export default Banner;


