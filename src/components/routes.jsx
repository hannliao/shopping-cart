import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Shop from './Shop';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'collections',
        children: [
          { index: true, element: <Shop /> },
          { path: ':collectionTag', element: <Shop /> },
          {
            path: ':collectionTag/products/:productSlug',
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
