// eslint-disable-next-line no-unused-vars
var topKFrequent = function (words, k) {
  const hashString = {};

  for (let i = 0; i < words.length; i++) {
    const prop = words[i];
    if (hashString[prop] !== undefined) {
      hashString[prop]++;
    } else {
      hashString[prop] = 1;
    }
  }

  const strings = Object.keys(hashString).sort((a, b) =>
    hashString[a] === hashString[b] ? (a < b ? -1 : 1) : hashString[a] > hashString[b] ? -1 : 1
  );

  return strings.slice(0, k);
};
