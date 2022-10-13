// eslint-disable-next-line no-unused-vars
var plusOne = function (digits) {
  let value = digits.join('');
  value = BigInt(value) + BigInt(1);
  const newArray = value.toString().split('').map(value => parseInt(value));
  return newArray;
};
