import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h1>ERROR</h1>
      <Link to="/" className="link">
        Back to home
      </Link>
    </>
  );
};

export default ErrorPage;
