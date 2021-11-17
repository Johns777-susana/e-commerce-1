import products from './products';

export const categoryBtns = [
  {
    id: 1,
    name: 'earpods',
    value: 'earpods',
    countInStock: products.filter((x) => x.category === 'earpods').length,
  },
  {
    id: 2,
    name: 'alexa',
    value: 'alexa',
    countInStock: products.filter((x) => x.category === 'alexa').length,
  },
  {
    id: 3,
    name: 'headphones',
    value: 'headphones',
    countInStock: products.filter((x) => x.category === 'headphones').length,
  },
  {
    id: 4,
    name: 'smartphone',
    value: 'smartphone',
    countInStock: products.filter((x) => x.category === 'smartphone').length,
  },
  {
    id: 5,
    name: 'xbox',
    value: 'xbox',
    countInStock: products.filter((x) => x.category === 'xbox').length,
  },
  {
    id: 6,
    name: 'camera',
    value: 'camera',
    countInStock: products.filter((x) => x.category === 'camera').length,
  },
  {
    id: 7,
    name: 'mouse',
    value: 'mouse',
    countInStock: products.filter((x) => x.category === 'mouse').length,
  },
];

export const brandBtns = [
  {
    id: 1,
    name: 'apple',
    value: 'apple',
    countInStock: products.filter((x) => x.brand === 'apple').length,
  },
  {
    id: 2,
    name: 'amazon',
    value: 'amazon',
    countInStock: products.filter((x) => x.brand === 'amazon').length,
  },
  {
    id: 3,
    name: 'boss',
    value: 'boss',
    countInStock: products.filter((x) => x.brand === 'boss').length,
  },
  {
    id: 4,
    name: 'nikon',
    value: 'nikon',
    countInStock: products.filter((x) => x.brand === 'nikon').length,
  },
  {
    id: 5,
    name: 'playstation',
    value: 'playstation',
    countInStock: products.filter((x) => x.brand === 'playstation').length,
  },
  {
    id: 6,
    name: 'canon',
    value: 'canon',
    countInStock: products.filter((x) => x.brand === 'canon').length,
  },
  {
    id: 7,
    name: 'samsung',
    value: 'samsung',
    countInStock: products.filter((x) => x.brand === 'samsung').length,
  },
  {
    id: 8,
    name: 'logitech',
    value: 'logitech',
    countInStock: products.filter((x) => x.brand === 'logitech').length,
  },
  {
    id: 9,
    name: 'sony',
    value: 'sony',
    countInStock: products.filter((x) => x.brand === 'sony').length,
  },
  {
    id: 10,
    name: 'razor',
    value: 'razor',
    countInStock: products.filter((x) => x.brand === 'razor').length,
  },
];

export default { categoryBtns, brandBtns };
