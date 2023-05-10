// eslint-disable-next-line no-unused-vars
function solution(arr) {
  let minValue = 0;
  let maxValue = 0;

  const sortedArray = arr.sort();

  for (let i = 0; i < sortedArray.length; i++) {
    if (i < sortedArray.length - 1) {
      minValue += sortedArray[i];
    }
    if (i > 0) {
      maxValue += sortedArray[i];
    }
  }

  console.log(minValue, maxValue);
}
