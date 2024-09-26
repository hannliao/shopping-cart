import { useState, useEffect } from 'react';
import getProducts from './api.js';
import collections from './collections.js';

const useProducts = (collectionTag) => {
  let collection;
  switch (collectionTag) {
    case 'women':
      collection = collections.women;
      break;
    case 'men':
      collection = collections.men;
      break;
    case 'accessories':
      collection = collections.accessories;
      break;
    case 'shoes':
      collection = collections.shoes;
      break;
    default:
      collection = null;
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        if (collection) {
          setProducts(
            fetchedProducts.filter((product) =>
              collection.includes(product.title)
            )
          );
        } else {
          setProducts(fetchedProducts);
        }
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [collection]);

  return { products, loading, error };
};

export default useProducts;
