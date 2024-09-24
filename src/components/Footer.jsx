import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
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
        <ul>
          <h3>Connect</h3>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Pinterest</li>
          <li>TikTok</li>
          <li>YouTube</li>
        </ul>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Sign up for our newsletter to get the latest and the greatest.</p>
          <div className="signup">
            <input type="email" name="email" placeholder="Email" />
            <button>Join</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2024 Hannah Liao. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
