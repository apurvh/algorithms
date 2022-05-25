/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  /**
   * Important to understand why initiating pointers at ends
   * and then coming towards center helps you find container with
   * most water
   */

  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    if (area > res) res = area;

    if (height[l] < height[r]) l++;
    else r--;
  }

  return res;
};
