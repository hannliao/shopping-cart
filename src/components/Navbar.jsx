import '../styles/Navbar.css';
import { useContext } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <header>
      <div className="banner">
        <p>free shipping on all orders $150+</p>
      </div>
      <nav>
        <div className="header">
          <Link to="/">
            <h1>basic basics</h1>
          </Link>

          <ul className="icons">
            <li>
              <button>
                <img src="/search-outline.svg" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="/person-outline.svg" alt="" />
              </button>
            </li>
            <li>
              <Link to="/cart">
                <img src="/cart-outline.svg" alt="" />
                <div className="cart-count">
                  {cartItems.length > 0 ? cartItems.length : ''}
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <ul className="shop">
          <li>
            <Link to="/collections/all-products">Shop All</Link>
          </li>
          <li>
            <Link to="/collections/women">Women</Link>
          </li>
          <li>
            <Link to="/collections/men">Men</Link>
          </li>
          <li>
            <Link to="/collections/accessories">Accessories</Link>
          </li>
          <li>
            <Link to="/collections/shoes">Shoes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
