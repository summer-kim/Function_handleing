//if length of factors is one, immediately run the function
//else holds the factors
const curry = (f) => (a, ...factors) =>
  factors.length ? f(a, ...factors) : (...factors) => f(a, ...factors);

const mapCurry;
const fillterCurry;
const reduceCurry;
