import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <h3>Company</h3>
        <li>About</li>
        <li>Gift Cards</li>
        <li>Stores</li>
        <li>Privacy</li>
        <li>Terms of Service</li>
      </ul>
      <ul>
        <h3>Get Help</h3>
        <li>FAQ</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Order Tracking</li>
        <li>Contact</li>
      </ul>
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Sign up for our newsletter to get the latest and the greatest.</p>
        <div className="signup">
          <input type="email" name="email" />
          <button>Join</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
