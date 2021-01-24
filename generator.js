const log = console.log;

//Generator

function* infinite(i = 0) {
  while (1) yield i++;
}
function* limit(l, iter) {
  for (let a of iter) {
    yield a;
    if (a === l) return;
  }
}
function* odd(m, n) {
  for (let a of limit(m, infinite(n))) log(a);
}
const test = odd(5, 0);
//log(...test);

// Map, Filter function
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};

const products = [
  { name: '반팔티', price: 15000 },
  { name: '긴팔티', price: 20000 },
  { name: '핸드폰케이스', price: 15000 },
  { name: '후드티', price: 30000 },
  { name: '바지', price: 25000 },
];
//log(map((p) => p.price, products));
//log(filter((p) => p.price > 15000, products));

const mapped = new Map();
mapped.set('a', 10);
mapped.set('b', 20);
//log(new Map(map(([a, b]) => [a, b * b], mapped)));
log(
  filter(
    (i) => i % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })()
  )
);
