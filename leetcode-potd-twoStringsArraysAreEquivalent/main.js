// eslint-disable-next-line no-unused-vars
var arrayStringsAreEqual = function (word1, word2) {
  const firstWord = word1.join('');
  const secondWord = word2.join('');
  if (firstWord === secondWord) {
    return true;
  }
  return false;
};
