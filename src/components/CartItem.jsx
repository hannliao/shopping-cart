import '../styles/CartItem.css';

const CartItem = ({ imgSrc, title, price }) => {
  return (
    <div className="item">
      <img src={imgSrc} alt={title} />
      <div className="item-info">
        <div className="title-price">
          <p>{title}</p>
          <p>${price}</p>
        </div>
        <div className="qty-remove">
          <div className="qty-container">
            <button>&minus;</button>
            <input type="number" id="qty" min="0" max="20" value="1" />
            <button>+</button>
          </div>
          <button className="remove">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
