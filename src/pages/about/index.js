import Image from 'next/image';
import mexicuisine from '../../../public/images/intro-1674486308.jpg'
import classes from '../../styles/About.module.css';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Mexicuisine</title>
        <meta name="description" content="You can find the history of our restaurant"/>
      </Head>

      <Image
      src={mexicuisine}
      alt='mexicuisine mexican food restaurant'
      className={classes.img}
      />

      <section className={classes.section}>

        <div>
          <h1>Mission Statement:</h1>
          <p>At Mexicuisine, our mission is to delight our guests with the vibrant flavors and rich culinary traditions of Mexico. We are committed to creating an unforgettable dining experience by serving authentic Mexican cuisine made with the freshest ingredients, providing exceptional service, and fostering a warm and inviting atmosphere. We aim to share our passion for Mexican food and culture, celebrating the essence of Mexico in every dish we serve.</p>
        </div>

        <div>
          <h1>Vision Statement:</h1>
          <p>Our vision at Mexicuisine is to be recognized as the premier destination for Mexican dining, where patrons can indulge in the true taste of Mexico and experience the warmth of Mexican hospitality. We strive to become a beloved establishment that not only satisfies appetites but also creates lasting memories. With a dedication to culinary excellence, innovation, and continuous improvement, we envision Mexicuisine as a place that brings people together, embraces diversity, and fosters a sense of community.</p>
        </div>

      </section>

      <section className={classes.section}>
        <h1>The story of Mexicuisine</h1>
        <article>
          <p>
            Once upon a time in Toronto, a group of passionate Mexican immigrants decided to share the rich culinary heritage of their homeland with the vibrant city they now called home. Filled with nostalgia for the flavors and aromas of their beloved Mexico, they opened Mexicuisine, a restaurant that would become a culinary haven for Mexican food enthusiasts. 
          </p>
          <br />
          <p>
            With a shared vision and dedication, the founders transformed a small space into a lively oasis, recreating the warm and inviting atmosphere reminiscent of the Mexican streets they cherished. Each detail, from the colorful murals adorning the walls to the traditional music playing in the background, was carefully chosen to transport guests to the heart of Mexico.
          </p>
          <br />
          <p>
            In the kitchen, the talented chefs, themselves immigrants from different regions of Mexico, crafted dishes with love and authenticity. They brought together family recipes passed down through generations, combining the freshest local ingredients with traditional Mexican spices and techniques. The tantalizing aromas wafting from the kitchen enticed passersby, drawing them into the cozy establishment.
          </p>
          <br />
          <p>
            Word quickly spread about Mexicuisine, and soon it became a beloved gathering place for both the Mexican community and Toronto locals seeking an authentic taste of Mexico. The restaurant became a melting pot of cultures, where stories were shared, friendships were formed, and a sense of unity was cultivated.
          </p>
          <br />
          <p>
            Mexicuisine's success not only resonated within the local community but also caught the attention of food critics and enthusiasts alike. With their unwavering commitment to quality and authenticity, Mexicuisine earned accolades for its vibrant flavors and exceptional dining experience.
          </p>
          <br />
          <p>
            As the years passed, Mexicuisine continued to flourish, expanding its menu to offer a wider array of Mexican specialties while maintaining the unwavering commitment to their roots. The restaurant became a testament to the dreams and hard work of Mexican immigrants who found a way to share their passion and make a meaningful contribution to the cultural fabric of their new home.
          </p> 
          <br />
          <p>
            Today, Mexicuisine stands as a symbol of the power of food to bridge gaps, bring people together, and celebrate the beauty of diversity. It remains a cherished destination in Toronto, where locals and visitors alike can savor the authentic flavors of Mexico while experiencing the warmth and hospitality of the Mexican people who built it with love and determination.
          </p>
          <br />
        </article>

      </section>
    </>
  )
};


export default AboutPage;