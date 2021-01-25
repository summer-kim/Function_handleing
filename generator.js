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

const mapped = new Map();
mapped.set('a', 10);
mapped.set('b', 20);
//log(new Map(map(([a, b]) => [a, b * b], mapped)));
/*
log(
  filter(
    (i) => i % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })() //Generator 자체는 iter가 아니다. 실행시켜서 iter를 return 시켜야함
  )
);
*/

//Reduce
const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value; //first value is be a acc
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};
//log(reduce((a, b) => a + b, 0, [1, 2, 3, 4, 5]));
//log(reduce((a, b) => a + b, [1, 2, 3, 4, 5]));

export { log, map, filter, reduce };
