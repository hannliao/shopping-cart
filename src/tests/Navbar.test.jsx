import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('navbar', () => {
  it('renders navbar', () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(container).toMatchSnapshot();
  });

  it('logo links to home page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /basic basics/i })).toHaveAttribute(
      'href',
      '/'
    );
  });

  it('shop all links to all products page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /shop all/i })).toHaveAttribute(
      'href',
      '/collections/all-products'
    );
  });

  it('women links to womens clothing page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /women/i })).toHaveAttribute(
      'href',
      '/collections/women'
    );
  });

  it('men links to mens clothing page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /Men/ })).toHaveAttribute(
      'href',
      '/collections/men'
    );
  });

  it('accessories links to accessories page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /accessories/i })).toHaveAttribute(
      'href',
      '/collections/accessories'
    );
  });

  it('shoes links to shoes page', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByRole('link', { name: /shoes/i })).toHaveAttribute(
      'href',
      '/collections/shoes'
    );
  });
});
