/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // map nums[index]:index
  const prevMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const diff = target - val;

    if (prevMap.has(diff)) return [prevMap.get(diff), i];
    prevMap.set(val, i);
  }
};
