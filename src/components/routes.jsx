import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Shop from './Shop';
import Product from './Product';

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
            element: <Product />,
          },
        ],
      },
    ],
  },
];

export default routes;
