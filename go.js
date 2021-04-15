import { log, map, filter, reduce } from './generator.js';
const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];
//First Expression
log(
  reduce(
    (total, price) => total + price,
    filter(
      (price) => price > 15000,
      map((product) => product.price, products)
    )
  )
);
const go = (...args) => reduce((a, f) => f(a), args);

go(
  0,
  (a) => a + 1,
  (a) => a + 10,
  (a) => a + 100,
  log
);
const add = (a, b) => a + b;
