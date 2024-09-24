import Shop from '../Shop';

const Accessories = () => {
  const accessories = ['Frontpack', 'Black Sunnies'];

  return <Shop filterList={accessories} category="Accessories" />;
};

export default Accessories;
