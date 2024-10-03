import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = () => {
  const { cartItems, setCartItems, cartCount, setCartCount } =
    useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setCartCount(cartItems.reduce((sum, cartItem) => sum + cartItem.qty, 0));
  }, [cartItems]);

  useEffect(() => {
    setSubtotal(
      cartItems.reduce(
        (sum, cartItem) => sum + cartItem.qty * cartItem.price,
        0
      )
    );
  }, [cartItems]);

  const checkout = () => {
    alert("You've successfully checked out!");
  };

  function incrementQty(title) {
    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, qty: item.qty + 1 } : item
      )
    );
  }

  function decrementQty(title) {
    setCartItems(
      cartItems
        .map((item) =>
          item.title === title && item.qty > 0
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => !(item.title === title && item.qty === 0))
    );
  }

  function handleQtyChange(e, title) {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 1;
    if (value > 99) value = 99;

    setCartItems(
      cartItems.map((item) =>
        item.title === title ? { ...item, qty: value } : item
      )
    );
  }

  function removeItem(title) {
    setCartItems(cartItems.filter((item) => item.title !== title));
  }

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
                  qty={cartItem.qty}
                  incrementQty={() => incrementQty(cartItem.title)}
                  decrementQty={() => decrementQty(cartItem.title)}
                  handleQtyChange={handleQtyChange}
                  removeItem={() => removeItem(cartItem.title)}
                />
              ))}
            </div>
            <div className="checkout">
              <div className="subtotal">
                <p>Subtotal ({cartCount} items)</p>
                <p>${subtotal}</p>
              </div>
              <p className="shipping-taxes">
                Shipping & taxes calculated at checkout
              </p>
              <button onClick={checkout}>Checkout</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/collections/all-products">
              <button>Continue Shopping</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
