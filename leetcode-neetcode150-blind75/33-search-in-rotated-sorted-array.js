/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  /**
   * TODO: fix the bug
   */
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) return mid;
    // console.log('start', l, r, mid, nums[mid], target)
    if (target < nums[mid] && target > nums[0]) {
      r = mid - 1;
    } else if (target < nums[mid] && target < nums[0]) {
      l = mid + 1;
    } else if (target > nums[mid] && target < nums[nums.length - 1]) {
      l = mid + 1;
    } else if (target > nums[mid] && target > nums[nums.length - 1]) {
      r = mid - 1;
    }
  }
  return -1;
};

search([4, 5, 6, 7, 8, 1, 2, 3], 8);
