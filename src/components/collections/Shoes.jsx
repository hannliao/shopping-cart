import Shop from '../Shop';

const Shoes = () => {
  const shoes = [
    'Slides',
    'Canvas Sneakers',
    'White Leather Sneakers',
    'Gray Leather Sneakers',
    'Gray Runners',
  ];
  return <Shop filterList={shoes} category="Shoes" />;
};

export default Shoes;
