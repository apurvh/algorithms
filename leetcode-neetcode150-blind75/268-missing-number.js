/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // XOR of all nums
  let res;
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }

  // XOR with 1..n
  for (let i = 0; i <= nums.length; i++) {
    res = i ^ res;
  }
  return res;
};
