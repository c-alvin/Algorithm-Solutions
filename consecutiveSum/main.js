// eslint-disable-next-line no-unused-vars
function solution(inputArray, k) {
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  let s0 = sum;
  let max = s0;
  for (let i = 1; i <= inputArray.length - k; i++) {
    s0 = s0 - inputArray[i - 1] + inputArray[i + k - 1];

    if (s0 > max) {
      max = s0;
    }
  }
  return max;
}
