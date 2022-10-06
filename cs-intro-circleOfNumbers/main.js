// eslint-disable-next-line no-unused-vars
function solution(n, firstNumber) {
  const opposite = n / 2 + firstNumber;
  if (opposite >= n) {
    return opposite - n;
  } else {
    return opposite;
  }
}
