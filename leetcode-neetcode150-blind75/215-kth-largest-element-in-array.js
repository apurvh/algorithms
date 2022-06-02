/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  k = nums.length - k;

  const quickSelect = (l, r) => {
    let pivot = nums[r];
    let p = l;

    // in place partition
    for (let i = l; i < r; i++) {
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p += 1;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];
    // partition complete

    if (k < p) return quickSelect(l, p - 1);
    else if (k > p) return quickSelect(p + 1, r);
    else {
      return nums[p];
    }
  };

  return quickSelect(0, nums.length - 1);
};
