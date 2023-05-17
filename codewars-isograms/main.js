// eslint-disable-next-line no-unused-vars
function isIsogram(str) {
  const hashMap = {};
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const prop = lowerCaseStr[i];
    if (hashMap[prop] !== undefined) {
      hashMap[prop]++;
      return false;
    } else {
      hashMap[prop] = 1;
    }
  }
  return true;
}
