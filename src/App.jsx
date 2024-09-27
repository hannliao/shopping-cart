import { Outlet } from 'react-router-dom';
import { useState, createContext } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useProducts from './components/useProducts';
import './styles/App.css';

export const ShopContext = createContext({
  cartItems: [],
  products: [],
  addToCart: () => {},
});

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const products = useProducts();
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}
