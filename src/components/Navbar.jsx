import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="banner">
        <p>free shipping on all orders $150+</p>
      </div>
      <nav>
        <Link to="/">
          <h1>basic basics</h1>
        </Link>
        <Link to="/shop">shop</Link>
        <ul>
          <li>search</li>
          <li>user</li>
          <li>cart</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
