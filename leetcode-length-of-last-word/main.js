// eslint-disable-next-line no-unused-vars
var lengthOfLastWord = function (s) {
  const newArray = s.split(' ');
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '') {
      newArray.splice(i, 1);
      i = -1;
    }
  }
  return newArray[newArray.length - 1].length;

};
