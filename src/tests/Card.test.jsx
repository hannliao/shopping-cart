import { vi, describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card';

// vi.mock('../components/useProducts', () => ({
//   __esModule: true,
//   default: jest.fn(() => ({
//     products: [
//       {
//         id: 1,
//         imgSrc:
//           'https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358',
//         title: 'Slides',
//         price: '$25',
//       },
//     ],
//     loading: false,
//     error: null,
//   })),
// }));

// describe('card', () => {
//   it('renders product image after loading', async () => {
//     render(
//       <BrowserRouter>
//         <Card />
//       </BrowserRouter>
//     );

//     await waitFor(() => {
//       expect(screen.getByText('Slides')).toBeInTheDocument();
//     });
//   });

// it('links to product detail page', () => {
//   render(
//     <BrowserRouter>
//       <Shop />
//     </BrowserRouter>
//   );
//   expect(screen.getByAltText('img', { name: Slides })).toHaveAttribute(
//     'href',
//     '/collections/shoes/products/slides'
//   );
// });
// });
