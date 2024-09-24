import { useState, useEffect } from 'react';
import getProducts from './api.js';

const useProducts = (filterList) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts();
        if (filterList) {
          setProducts(
            fetchedProducts.filter((product) =>
              filterList.includes(product.title)
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
  }, [filterList]);

  return { products, loading, error };
};

export default useProducts;
