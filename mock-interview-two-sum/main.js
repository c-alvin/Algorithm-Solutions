// eslint-disable-next-line no-unused-vars
var twoSum = function (nums, target) {
  //     const newArray = [];

  //     for(let i = 0; i < nums.length; i++) {
  //         for(let k = i + 1; k < nums.length; k++) {
  //             if(nums[i] + nums[k] === target) {
  //                 newArray.push(i);
  //                 newArray.push(k);
  //             }
  //         }
  //     }
  //     return newArray;

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
