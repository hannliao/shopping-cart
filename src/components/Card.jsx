import '../styles/Card.css';

const Card = ({ imgSrc, title, price }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="" />
      <div className="info">
        <div className="title">{title}</div>
        <p>${price}</p>
      </div>

      <button className="add">Add to bag</button>
    </div>
  );
};

export default Card;
