/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let output = -Infinity;
  let currSum = 0;

  // if sum is < 0, start over
  for (const val of nums) {
    if (currSum < 0) currSum = 0;
    currSum += val;
    output = Math.max(currSum, output);
  }
  return output;
};
