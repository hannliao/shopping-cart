import '../styles/Card.css';

const Card = ({ imgSrc, title, price }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="" />
      <div className="info">
        <p>{title}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;
