// eslint-disable-next-line no-unused-vars
function solution(deposit, rate, threshold) {
  let counter = 0;
  while (deposit < threshold) {
    deposit = deposit * (1 + (rate / 100));
    counter++;
  }
  return counter;
}
