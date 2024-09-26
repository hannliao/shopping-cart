import Card from './Card.jsx';
import useProducts from './useProducts';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const { collectionTag } = useParams();
  const { products, loading, error } = useProducts(collectionTag);

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

  return (
    <>
      <h2>{category}</h2>
      <div className="products">
        {products.map((product) => (
          <Card
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
