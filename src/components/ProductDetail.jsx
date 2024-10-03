import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../App';
import useProducts from '../scripts/useProducts';
import AddToCartButton from './AddToCartButton';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { collectionTag, productSlug } = useParams();
  const { products, loading, error } = useProducts(collectionTag);
  const { addToCart } = useContext(ShopContext);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const product = products?.find((product) => product.slug === productSlug);
  let sizes;
  switch (product.collection) {
    case 'women':
    case 'men':
      sizes = ['XS', 'S', 'M', 'L', 'XL'];
      break;
    case 'shoes':
      sizes = ['5', '6', '7', '8', '9', '10', '11'];
      break;
    default:
      sizes = ['ONE SIZE'];
  }

  return (
    <div className="product">
      <img src={product.imgSrc} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <div className="size">
          {sizes.map((size) => (
            <button key={size}>{size}</button>
          ))}
        </div>
        <AddToCartButton addToCart={() => addToCart(product)} />
      </div>
    </div>
  );
};

export default ProductDetail;
