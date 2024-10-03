import { useState } from 'react';
import '../styles/AddToCartButton.css';

const AddToCartButton = ({ addToCart }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    addToCart();
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <button
      className={`add ${isAdded ? 'added' : ''}`}
      onClick={handleClick}
      disabled={isAdded}
    >
      {isAdded ? 'Added' : 'Add to cart'}
    </button>
  );
};

export default AddToCartButton;
