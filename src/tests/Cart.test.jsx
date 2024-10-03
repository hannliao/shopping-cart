import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ShopContext } from '../App';
import Cart from '../components/Cart';

describe('cart', () => {
  let cartItems = [
    { title: 'Slides', price: 25, qty: 2 },
    { title: 'Frontpack', price: 200, qty: 1 },
  ];
  let cartCount = cartItems.reduce((sum, cartItem) => sum + cartItem.qty, 0);
  const setCartCount = vi.fn();
  const setCartItems = vi.fn();

  it('renders correct quantity', () => {
    const { rerender } = render(
      <ShopContext.Provider
        value={{
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
        }}
      >
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </ShopContext.Provider>
    );

    expect(setCartCount).toHaveBeenCalledWith(3);

    cartItems = [...cartItems, { title: 'Hoodie', price: 90, qty: 1 }];
    cartCount = cartItems.reduce((sum, cartItem) => sum + cartItem.qty, 0);

    rerender(
      <ShopContext.Provider
        value={{
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
        }}
      >
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </ShopContext.Provider>
    );

    expect(setCartCount).toHaveBeenCalledWith(4);
    const qty = screen.getByText('Subtotal (4 items)');
    expect(qty).toBeInTheDocument();
  });

  it('renders correct subtotal', () => {
    const setCartCount = vi.fn();
    const setCartItems = vi.fn();

    render(
      <ShopContext.Provider
        value={{
          cartItems,
          setCartItems,
          cartCount,
          setCartCount,
        }}
      >
        <BrowserRouter>
          <Cart />
        </BrowserRouter>
      </ShopContext.Provider>
    );

    const subtotal = screen.getByText('$340');
    expect(subtotal).toBeInTheDocument();
  });
});
