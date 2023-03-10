// eslint-disable-next-line no-unused-vars
var singleNumber = function (nums) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const prop = nums[i];
    if (hashMap[prop] !== undefined) {
      hashMap[prop]++;
    } else {
      hashMap[prop] = 1;
    }
  }

  for (const prop in hashMap) {
    if (hashMap[prop] === 1) {
      return prop;
    }
  }
};
