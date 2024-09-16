import getProducts from './api.js';
import Card from './Card.jsx';

const products = await getProducts();

const Shop = () => {
  return (
    <>
      <h2>Products</h2>
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
