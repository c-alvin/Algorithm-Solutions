// eslint-disable-next-line no-unused-vars
var lengthOfLongestSubstring = function (s) {
  const subStringHash = {};
  let currentSub = 0;
  let actualLongest = 0;

  if (s.length < 2) {
    return s.length;
  }

  for (let i = 0; i < s.length; i++) {
    const prop = s[i];
    if (subStringHash[prop] === undefined) {
      currentSub += 1;
    } else {
      currentSub = Math.min(i - subStringHash[prop], currentSub + 1);
    }

    actualLongest = Math.max(actualLongest, currentSub);
    subStringHash[prop] = i;
  }

  return actualLongest;

};
