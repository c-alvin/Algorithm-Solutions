// eslint-disable-next-line no-unused-vars
function plusMinus(arr) {
  // Write your code here
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    }
    if (arr[i] < 0) {
      negativeCount++;
    }
    if (arr[i] === 0) {
      zeroCount++;
    }
  }

  negativeCount = negativeCount / arr.length;
  positiveCount = positiveCount / arr.length;
  zeroCount = zeroCount / arr.length;

  return [negativeCount, positiveCount, zeroCount];
}
