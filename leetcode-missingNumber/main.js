// eslint-disable-next-line no-unused-vars
var missingNumber = function (nums) {
  // make a hashmap
  // itereate through array and see if it exists

  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const prop = nums[i];
    if (hashMap[prop] !== undefined) {
      hashMap[prop]++;
    } else {
      hashMap[prop] = 1;
    }
  }
  for (let i = 0; i <= nums.length; i++) {
    if (hashMap[i] === undefined) {
      return i;
    }
  }
};
