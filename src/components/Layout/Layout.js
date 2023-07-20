import Navbar from "../NavBar/Navbar";
import { useSelector } from "react-redux";
import CartBubble from "../UI/CartBubble/CartBubble";
import Footer from "../Footer/Footer";

const Layout = (props) => {

  const isCartBubbleOpen = useSelector(state => state.cart.isCartBubbleOpen);

  return (
    <>
      <Navbar />
      {isCartBubbleOpen && <CartBubble />}
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  )
};

export default Layout