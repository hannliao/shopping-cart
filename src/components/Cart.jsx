import { useContext } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-content">
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.title}
                  imgSrc={cartItem.imgSrc}
                  title={cartItem.title}
                  price={cartItem.price}
                />
              ))}
            </div>
            <div className="checkout">
              <div className="subtotal">
                <p>Subtotal</p>
                <p>
                  $
                  {cartItems.reduce((sum, cartItem) => sum + cartItem.price, 0)}
                </p>
              </div>
              <p className="shipping-taxes">
                Shipping & taxes calculated at checkout
              </p>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <button>
              <Link to="/collections/all-products">Continue Shopping</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
