import App from '../App';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Shop from './Shop';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/shop', element: <Shop /> },
    ],
  },
  {
    path: 'default',
    element: <Home />,
  },
];

export default routes;
