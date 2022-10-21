// eslint-disable-next-line no-unused-vars
var containsNearbyDuplicate = function (nums, k) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const prop = nums[i];
    if (hash[prop] !== undefined) {
      hash[prop].match++;
      if (Math.abs(hash[prop].difference - i) < hash[prop].difference || hash[prop].match === 2) {
        hash[prop].difference = Math.abs(hash[prop].difference - i);
      }
    } else {
      hash[prop] = { match: 1, difference: i };
    }
  }

  for (const key in hash) {
    if (hash[key].match > 1) {
      if (hash[key].difference <= k) {
        return true;
      }
    }
  }
  return false;
};
