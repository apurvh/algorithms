/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const houseRobberLinear = (nums) => {
    if (nums.length < 3) {
      return Math.max(...nums);
    }

    if (nums.length === 3) {
      return Math.max(nums[0] + nums[2], nums[1]);
    }

    // Bottoms up approach => knowing max that we can rob till index 2
    // helps us calculate max we can rob at index 0
    // as we cant rob consecutive houses, we get the following relation
    for (let i = nums.length - 3; i >= 0; i--) {
      nums[i] += Math.max(nums[i + 2], nums[i + 3] || 0);
    }

    // console.log(nums)
    // return Math.max(nums[0], nums[1])
    return Math.max(nums[0], nums[1]);
  };

  return Math.max(
    nums[0],
    houseRobberLinear(nums.slice(0, nums.length - 1)),
    houseRobberLinear(nums.slice(1, nums.length))
  );
};
