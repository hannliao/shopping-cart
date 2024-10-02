import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useProducts from './components/useProducts';
import './styles/App.css';

export const ShopContext = createContext({
  cartItems: [],
  cartCount: 0,
  products: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const products = useProducts();
  const addToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        products,
        addToCart,
      }}
    >
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}
