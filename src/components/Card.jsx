import { Link } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ imgSrc, title, price, slug }) => {
  return (
    <div className="card">
      <Link to={slug}>
        <img src={imgSrc} alt={title} />
      </Link>

      <div className="info">
        <div className="title">{title}</div>
        <p>${price}</p>
      </div>

      <button className="add">Add to bag</button>
    </div>
  );
};

export default Card;
