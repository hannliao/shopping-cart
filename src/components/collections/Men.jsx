import Shop from '../Shop';

const Men = () => {
  const men = [
    'Sweatpants',
    "Men's T-shirt",
    'Hoodie',
    "Men's Crewneck",
    'Puffer',
    'Puffer Jacket',
    'Workout Shirt',
  ];

  return <Shop filterList={men} category="Men's Clothing" />;
};

export default Men;
