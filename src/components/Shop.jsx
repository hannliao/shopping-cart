import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../scripts/useProducts';
import ProductCard from './ProductCard.jsx';

const Shop = () => {
  const { collectionTag } = useParams();
  const { products, loading, error } = useProducts(collectionTag);
  const navigate = useNavigate();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  let category;
  switch (collectionTag) {
    case 'women':
      category = "Women's Clothing";
      break;
    case 'men':
      category = "Men's Clothing";
      break;
    case 'accessories':
      category = 'Accessories';
      break;
    case 'shoes':
      category = 'Shoes';
      break;
    default:
      category = 'All Products';
  }

  const handleCardClick = (productSlug) => {
    navigate(`/collections/${collectionTag}/products/${productSlug}`);
  };

  return (
    <>
      <h2 className="category">{category}</h2>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            onClick={() => handleCardClick(product.slug)}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
