import Card from './Card.jsx';
import useProducts from './useProducts';

const Shop = ({ filterList, category }) => {
  const { products, loading, error } = useProducts(filterList);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!category) {
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
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
