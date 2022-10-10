// eslint-disable-next-line no-unused-vars
var twoSum = function (nums, target) {

  // create our map
  const complimentMap = {};

  // loop our array and for each element, add the number and its index to the map
  for (let i = 0; i < nums.length; i++) {
    // calculate the compliment of the current number
    const compliment = target - nums[i];

    // check if the calculated compliment already exists in the map
    if (complimentMap[compliment] !== undefined) {
      // the compliment is already in the map, so return the indices
      return [complimentMap[compliment], i];
    } else {
      // compliment does not already exist in the map, so add the current number to the map
      complimentMap[nums[i]] = i;
    }
  }
};

// initial approach
// for(let i = 0; i < nums.length; i++) {
//         for (let k = 0; k < nums.length; k++) {
//             if(i !== k && (nums[i]) + nums[k] === target) {
//               return [i,k];
