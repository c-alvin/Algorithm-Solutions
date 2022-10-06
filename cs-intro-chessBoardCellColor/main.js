// eslint-disable-next-line no-unused-vars
function solution(cell1, cell2) {
  let value1 = 0;
  let value2 = 0;
  const numbers = '12345678';
  const letters = 'ABCDEFGH';

  for (let i = 0; i < letters.length; i++) {
    if (cell1[0] === letters[i]) {
      value1 += i;
    }
    if (cell1[1] === numbers[i]) {
      value1 += i;
    }
  }

  for (let i = 0; i < letters.length; i++) {
    if (cell2[0] === letters[i]) {
      value2 += i;
    }
    if (cell2[1] === numbers[i]) {
      value2 += i;
    }
  }

  if (value1 % 2 === 0 && value2 % 2 === 0) {
    return true;
  } else if (value1 % 2 !== 0 && value2 % 2 !== 0) {
    return true;
  } else {
    return false;
  }

}
