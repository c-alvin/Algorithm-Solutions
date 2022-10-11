// eslint-disable-next-line no-unused-vars
var isPalindrome = function (x) {
  const testString = x.toString();
  let counter = 1;
  for (let i = 0; i < testString.length; i++) {
    if (testString[i] !== testString[testString.length - counter]) {
      return false;
    }
    counter++;
  }
  return true;
};
