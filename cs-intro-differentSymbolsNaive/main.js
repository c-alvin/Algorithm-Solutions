// eslint-disable-next-line no-unused-vars
function solution(s) {
  const charHash = {};
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const prop = s[i];
    if (charHash[prop] !== undefined) {
      charHash[prop]++;
    } else {
      counter++;
      charHash[prop] = 1;
    }
  }

  return counter;
}
