import { useParams } from 'react-router-dom';
import useProducts from './useProducts';
import '../styles/Product.css';

const Product = () => {
  const { collectionTag, productSlug } = useParams();
  const { products, loading, error } = useProducts(collectionTag);

  let sizes;
  switch (collectionTag) {
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

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const product = products?.find((product) => product.slug === productSlug);

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
        <button className="add">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
