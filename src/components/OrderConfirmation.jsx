import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(ShopContext);

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setOrderItems([...cartItems]);

    setCartItems([]);
    setCartCount(0);
  }, []);

  const orderCount = orderItems.reduce(
    (sum, orderItem) => sum + orderItem.qty,
    0
  );
  const subtotal = orderItems
    .reduce((sum, orderItem) => sum + orderItem.qty * orderItem.price, 0)
    .toFixed(2);
  const shipping = subtotal >= 150 ? 'FREE' : (10).toFixed(2);
  const tax = (subtotal * 0.07).toFixed(2);
  const total =
    shipping === 'FREE'
      ? (parseFloat(subtotal) + parseFloat(tax)).toFixed(2)
      : (parseFloat(subtotal) + parseFloat(shipping) + parseFloat(tax)).toFixed(
          2
        );

  return (
    <div className="order-confirmation">
      <h2>Thank you for your order!</h2>
      <h3>Order #88888</h3>
      <p>
        Let's pretend you entered a shipping/billing address, payment details,
        and placed your order.
      </p>
      <h2>Order Summary ({orderCount} items)</h2>
      <div className="order-summary">
        <div className="order-items">
          {orderItems.map((orderItem) => (
            <CartItem
              key={orderItem.title}
              imgSrc={orderItem.imgSrc}
              title={orderItem.title}
              price={orderItem.price}
              qty={orderItem.qty}
            />
          ))}
        </div>

        <div className="order-total-continue">
          <div className="order-total">
            <p>Subtotal</p>
            <p>${subtotal}</p>
            <p>Shipping</p>
            <p>
              {shipping !== 'FREE' && '$'}
              {shipping}
            </p>
            <p>Tax</p>
            <p>${tax}</p>
            <p>Total</p>
            <p>${total}</p>
          </div>
          <Link to="/collections/all-products">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
