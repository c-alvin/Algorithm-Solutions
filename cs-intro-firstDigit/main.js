// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  let num = 0;
  const replaced = inputString.replace(/\D/g, '');
  num = replaced[0];
  return num;
}
