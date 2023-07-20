import classes from './Newsletterform.module.css';

const Newsletterform = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="email">Stay up-to-date</label>
      <div>
        <input 
        type='email' 
        name="email" 
        id="email"
        placeholder="Join to our community"
        ></input>
        <button>Sign Up</button>
      </div>
    </form>
  )
}

export default Newsletterform;