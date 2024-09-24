import Shop from '../Shop';

const Women = () => {
  const women = [
    "Women's Crewneck",
    "Women's T-shirt",
    'Half Zip',
    'Leggings',
    'Light Puffer',
    'Shorts',
  ];

  return <Shop filterList={women} category="Women's Clothing" />;
};

export default Women;
