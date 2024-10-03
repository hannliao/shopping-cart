import { useContext } from 'react';
import { ShopContext } from '../App';
import useProducts from '../scripts/useProducts';
import '../styles/ProductCard.css';

const ProductCard = ({ imgSrc, title, price, onClick }) => {
  const { products } = useProducts();
  const { addToCart } = useContext(ShopContext);

  const product = products?.find((product) => product.title === title);

  return (
    <div className="card">
      <div className="card-info" onClick={onClick}>
        <img src={imgSrc} alt={title} />
        <div className="info">
          <div className="title">{title}</div>
          <p>${price}</p>
        </div>
      </div>
      <button className="add" onClick={() => addToCart(product)}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
