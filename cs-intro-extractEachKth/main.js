// eslint-disable-next-line no-unused-vars
function solution(inputArray, k) {
  let counter = 1;

  if (k === 1) {
    inputArray = [];
    return inputArray;
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (counter === k) {
      inputArray.splice(i, 1);
      counter = 1;
    }

    counter++;

  }
  return inputArray;
}
