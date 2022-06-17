/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  // using two pointers technique
  // stop when pointers cross
  while (l < r) {
    let currSum = numbers[l] + numbers[r];
    if (currSum > target) r--;
    else if (currSum < target) l++;
    else return [l + 1, r + 1];
  }
};
