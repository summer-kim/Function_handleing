const log = console.log;
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
log(...test);
