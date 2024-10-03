import { useContext } from 'react';
import { ShopContext } from '../App';
import useProducts from '../scripts/useProducts';
import AddToCartButton from './AddToCartButton';
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
      <AddToCartButton addToCart={() => addToCart(product)} />
    </div>
  );
};

export default ProductCard;
