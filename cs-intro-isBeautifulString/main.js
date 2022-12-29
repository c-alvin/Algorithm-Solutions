// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const hash = {};

  for (let i = 0; i < inputString.length; i++) {
    const prop = inputString[i];
    if (hash[prop] !== undefined) {
      hash[prop]++;
    } else {
      hash[prop] = 1;
    }
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (hash[alphabet[i]] < hash[alphabet[i + 1]]) {
      return false;
    }
  }
  return true;

}
