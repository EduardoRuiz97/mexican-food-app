import Link from "next/link";
import Newsletterform from '../UI/NewsletterForm/Newsletterform';
import Image from 'next/image';
import logo from '../../../public/images/mexican-restaurant-logo.png';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>

      <div className={classes.container}>
        <div className={classes.containerA}>

          <Image 
          src={logo} 
          alt='mexicuisine image logo'
          width={120}
          height={120}
          />

          <nav className={classes.nav}>
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
          </nav>
        </div>

        <div className={classes.containerB}>
          <Newsletterform />
        </div>
      </div>




      <small>This website is a practice project for web design purposes. The content provided here is purely for educational and demonstration purposes. While efforts have been made to ensure accuracy, we cannot guarantee the completeness or reliability of the information provided. Please note that this website is not intended for real-world use or to serve any commercial purpose. Any reliance you place on the content is at your own discretion. We are not responsible for any loss or damage that may arise from using this website. Links to external sites are provided as a convenience, and we do not endorse or have control over their content. This website may experience occasional downtime due to maintenance or technical issues. Thank you for visiting and understanding!</small>


    </footer>
  )
};

export default Footer;