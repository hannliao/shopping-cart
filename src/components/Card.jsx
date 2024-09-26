import '../styles/Card.css';

const Card = ({ imgSrc, title, price, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt={title} />
      <div className="info">
        <div className="title">{title}</div>
        <p>${price}</p>
      </div>

      <button className="add">Add to bag</button>
    </div>
  );
};

export default Card;
