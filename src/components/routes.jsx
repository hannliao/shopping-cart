import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Shop from './Shop';
import Women from './collections/Women';
import Men from './collections/Men';
import Accessories from './collections/Accessories';
import Shoes from './collections/Shoes';

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
          { path: 'women', element: <Women /> },
          { path: 'men', element: <Men /> },
          { path: 'accessories', element: <Accessories /> },
          { path: 'shoes', element: <Shoes /> },
        ],
      },
    ],
  },
  {
    path: 'default',
    element: <Home />,
  },
];

export default routes;
