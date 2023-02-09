// eslint-disable-next-line no-unused-vars
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  // horizontal scan
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === undefined) {
        return '';
      }
    }

  }
  return prefix;

};
