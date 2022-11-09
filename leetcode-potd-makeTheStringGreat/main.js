// eslint-disable-next-line no-unused-vars
var makeGood = function (s) {
  const chars = s.split('');
  if (s.length < 2) {
    return s;
  }

  for (let i = 0; i < chars.length - 1; i++) {
    if ((chars[i] === chars[i].toLowerCase() && chars[i + 1] === chars[i].toUpperCase()) || (
      chars[i] === chars[i].toUpperCase() && chars[i + 1] === chars[i].toLowerCase())) {
      chars.splice(i, 2);
      i = -1;
    }
  }
  return chars.join('');
};
