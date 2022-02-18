var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    total: 34.00,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveryDate: 'August 8, 2020',
    item: 'Javascript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    returnWindow: 'September 7, 2020',
    baseCost: 31.55
  },
  {
    orderPlaced: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveryDate: 'July 20, 2020',
    item: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    returnWindow: 'August 19, 2020',
    baseCost: 41.33
  },
  {
    orderPlaced: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveryDate: 'July 7, 2020',
    item: 'Gamecube Controller Adapter. Super Smash BRos Switch Gamecube adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    author: 'Gamecube',
    returnWindow: 'August 5, 2020',
    baseCost: 15.98
  },
  {
    orderPlaced: 'July 3, 2020',
    total: 138.93,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveryDate: 'July 5, 2020',
    item: ['GameCube Controller-Super Smash Bros. Edition(Nintendo Switch)', 'The Art of Sql'],
    author: ['Gamecube', 'Faroult, Stephanie'],
    returnWindow: 'August 4, 2020',
    baseCost: [94.95, 33.99]
  }
];

// tests //
console.log('Return window closed on: ', orderHistory[0].returnWindow);
console.log('Ship to: ', orderHistory[1].shipTo);
console.log('Order #: ', orderHistory[2].orderNumber);
console.log('Cost for item: ', orderHistory[3].baseCost[1]);
