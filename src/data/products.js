const products = [
  {
    _id: 1,
    name: 'Apple AirPods (2nd Generation)',
    image: '/images/airpods.jpg',
    price: 20,
    desc: 'Unlike traditional, circular earbuds, the design of the EarPods is defined by the geometry of the ear. ... The EarPods also include a built-in remote that lets you adjust the volume, control the playback of music and video, and answer or end calls with a pinch of the cord.',
    category: 'earpods',
    rating: 2.5,
    numReviews: 15,
    countInStock: 19,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 2,
    name: 'Amazon Echo White (1st Generation)',
    image: '/images/alexa.jpg',
    price: 299,
    desc: 'Alexa is a voice-controlled virtual assistant. She can play audio, control your smart home, answer questions and engage your favorite services to keep you organized, informed, safe, connected and entertained. As a product of Amazon, she is also your personal shopper',
    category: 'alexa',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 3,
    name: 'boss quiet comfort 35 silver - bluetooth',
    image: '/images/boss-headphone.png',
    price: 165,
    desc: 'Bose headphones so great is that their crystal-clear sound quality. Enjoy the fine details your music has on these headphones from Bose. Some products, such as the Bose Quietcomfort 35 II, offer noise-cancelling capabilities.',
    category: 'headphones',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 4,
    name: 'Nikon D7500 20.9MP DSLR Camera with AF-S DX',
    image: '/images/camera.jpg',
    price: 699,
    desc: 'The Nikon Coolpix series are digital compact cameras produced in many variants: Superzoom, bridge, travel-zoom, miniature compact and waterproof/rugged cameras.',
    category: 'camera',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 5,
    name: 'Canon EOS (Electro-Optical System)',
    image: '/images/camera2.jpg',
    price: 850,
    desc: 'Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc.',
    category: 'camera',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 6,
    name: 'Xbox 512GB SSD Console - Wireless Controller',
    image: '/images/console.jpg',
    price: 260,
    desc: 'Great console with flexibility and best gaming experience',
    category: 'xbox',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 7,
    name: 'Apple iPhone 12 Pro Max, 256GB, Graphite',
    image: '/images/iphone12.jpg',
    price: 1199,
    desc: 'All the new iPhone 12 models get both versions of 5G in the US and only sub-6GHz around the world. Apple built the device frame with custom 5G antennas and has enabled more 5G bands than any other smartphone.',
    category: 'smart-phones',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 8,
    name: 'Xbox Series S With Wireless Controller',
    image: '/images/xbox.png',
    price: 600,
    desc: 'Explore the world of Xbox with Xbox One S. Play thousands of games and enjoy built-in 4K Ultra HD and 4K video streaming on the Xbox One S console.',
    category: 'xbox',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 9,
    name: 'Apple iPhone X, 64GB, Silver',
    image: '/images/iphoneX.jpg',
    price: 899,
    desc: 'iPhone X is the future of the smartphone in a gorgeous all-glass design with a beautiful 5.8-inch Super Retina display. ... The device is the display on iPhone X, featuring the first OLED screen that rises to the standards of iPhone.',
    category: 'smart-phones',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 10,
    name: 'Logitech Pro Gaming Mouse',
    image: '/images/mouse.jpg',
    price: 299,
    desc: 'There are three types of Logitech wireless mice. There are 2.4 GHz mice, Bluetooth mice, and unifying mice that you can choose as per your convenience. The 2.4 GHz mouse and unifying mouse comes with a receiver that you need to connect to your computer to use the wireless mouse.',
    category: 'mouse',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 11,
    name: 'Samsung Note 20 Pro SERIES',
    image: '/images/samsung-note20.jpg',
    price: 1160,
    desc: 'The phone comes with a 6.70-inch touchscreen display with a resolution of 1080x2400 pixels and an aspect ratio of 20:9. Samsung Galaxy Note 20 is powered by a 2.4GHz octa-core Samsung Exynos 990 processor that features 4 cores clocked at 2.4GHz and 4 cores clocked at 1.8GHz.',
    category: 'smart-phones',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
  {
    _id: 12,
    name: 'Samsung Galaxy S21 Series',
    image: '/images/samsung-s21.jpg',
    price: 1400,
    desc: 'The Galaxy S21 Ultra comes in a sleeker design and offers faster performance from Qualcomm Snapdragon 888 chip. And, unlike the regular Galaxy S21, you do not have to make nearly as many trade-offs. You get a better main 108MP camera, a glass back (instead of plastic), more RAM and a higher-res display.',
    category: 'smart-phones',
    rating: 8,
    numReviews: 15,
    countInStock: 15,
    qty: 1,
    shippingCost: 10,
    tax: 10,
  },
];

export default products;
