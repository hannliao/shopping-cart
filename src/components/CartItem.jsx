import '../styles/CartItem.css';

const CartItem = ({
  imgSrc,
  title,
  price,
  qty,
  incrementQty,
  decrementQty,
  handleQtyChange,
  removeItem,
}) => {
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
            <button onClick={decrementQty}>&minus;</button>
            <input
              type="number"
              id="qty"
              min="0"
              value={qty}
              onChange={(e) => handleQtyChange(e, title)}
            />
            <button onClick={incrementQty}>+</button>
          </div>
          <button className="remove" onClick={removeItem}>
            Remove
          </button>
        </div>
        <div className="order-item-qty">QTY: {qty}</div>
      </div>
    </div>
  );
};

export default CartItem;
