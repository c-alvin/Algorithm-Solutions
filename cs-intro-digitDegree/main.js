// eslint-disable-next-line no-unused-vars
function solution(n) {
  let c = 0;
  while (n.toString().length > 1) {
    n = n.toString().split('').reduce((x, y) => Number(x) + Number(y));
    c++;
  }
  return c;
}
