// eslint-disable-next-line no-unused-vars
var checkIfPangram = function (sentence) {
  const hash = {};
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    const prop = sentence[i];
    if (hash[prop] !== undefined) {
      hash[prop]++;
    } else {
      hash[prop] = 1;
    }
  }

  for (const key in hash) {
    if (hash[key] !== undefined) {
      count++;
    }
  }
  if (count === 26) {
    return true;
  } else {
    return false;
  }
};
