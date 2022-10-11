// eslint-disable-next-line no-unused-vars
var reverse = function (x) {
  const newArray = [];
  const status = x < 0
    ? -1
    : 1;
  const absNumber = Math.abs(x);
  const newString = absNumber.toString();
  for (let i = newString.length - 1; i >= 0; i--) {
    newArray.push(newString[i]);
  }
  const newInt = Number(newArray.join('')) * status;
  if (newInt > 2147483648 || newInt < -2147483648) {
    return 0;
  }
  return newInt;
};
