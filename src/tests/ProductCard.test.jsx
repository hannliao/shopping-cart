import { vi, describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

describe('product card', () => {
  const productProps = {
    imgSrc: '/images/slides.jpg',
    title: 'Slides',
    price: 25,
    onClick: vi.fn(),
  };

  it('renders correct product information for Slides', async () => {
    render(
      <BrowserRouter>
        <ProductCard {...productProps} />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Slides')).toBeInTheDocument();
    });
  });

  it('calls the onClick function when clicked', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <ProductCard {...productProps} />
      </BrowserRouter>
    );

    const img = screen.getByAltText('Slides');
    const card = img.closest('div.card-info');

    await user.click(card);

    expect(productProps.onClick).toHaveBeenCalled();
  });
});
