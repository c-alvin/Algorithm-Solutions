// eslint-disable-next-line no-unused-vars
var twoSum = function (nums, target) {

  const hash = {};
  // hash[2] = i or 0 in this case

  for (let i = 0; i < nums.length; i++) {
    const prop = nums[i];

    if (hash[target - prop] !== undefined) {
      return [hash[target - prop], i];
    } else {
      hash[prop] = i;
    }
  }
};

// initial approach
// for(let i = 0; i < nums.length; i++) {
//         for (let k = 0; k < nums.length; k++) {
//             if(i !== k && (nums[i]) + nums[k] === target) {
//               return [i,k];
