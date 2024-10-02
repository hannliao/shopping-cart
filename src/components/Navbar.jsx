import '../styles/Navbar.css';
import { useContext } from 'react';
import { ShopContext } from '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartCount } = useContext(ShopContext);

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
              <a>
                <img src="/search-outline.svg" alt="" />
              </a>
            </li>
            <li>
              <a>
                <img src="/person-outline.svg" alt="" />
              </a>
            </li>
            <li>
              <Link to="/cart">
                <img src="/cart-outline.svg" alt="" />
              </Link>
              {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
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
