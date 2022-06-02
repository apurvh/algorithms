/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];

  // prefix
  let multiplePre = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== undefined) multiplePre *= nums[i - 1];
    result[i] = multiplePre;
  }
  // console.log(result)

  // postfix
  let multiplePost = 1;
  for (let i = nums.length - 1; i > -1; i--) {
    if (nums[i + 1] !== undefined) multiplePost *= nums[i + 1];
    result[i] *= multiplePost;
  }
  // console.log(result)

  return result;
};
