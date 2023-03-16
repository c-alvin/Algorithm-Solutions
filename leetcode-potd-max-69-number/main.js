// eslint-disable-next-line no-unused-vars
var findDuplicate = function (nums) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const prop = nums[i];
    if (hash[prop] !== undefined) {
      return prop;
    } else {
      hash[prop] = 1;
    }
  }
};
