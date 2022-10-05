// eslint-disable-next-line no-unused-vars
function solution(inputString) {
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const newString = [];

  for (let i = 0; i < inputString.length; i++) {
    for (let k = 0; k < alphabetArray.length; k++) {
      if (inputString[i] === alphabetArray[k]) {
        if (inputString[i] === 'z') {
          newString.push(alphabetArray[0]);
        } else {
          newString.push(alphabetArray[k + 1]);
        }
      }
    }
  }
  const testString = newString.join('');
  return testString;
}
