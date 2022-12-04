// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  let prefix = '';
  for (let i = 0; i < inputString.length; i++) {
    if (parseInt(inputString[i]) || parseInt(inputString[i]) === 0) {
      prefix += inputString[i];
    } else {
      break;
    }
  }
  return prefix;
}
