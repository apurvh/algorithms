/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [];

  // initialising following is not required
  let curr = [];
  let i = 0;

  const dfs = (curr, i) => {
    // reached end of tree
    if (i === nums.length) {
      output.push(curr);
    }

    // dont call further recursion calls
    // if out of bounds
    if (i < nums.length) {
      dfs([...curr], i + 1);
      dfs([...curr, nums[i]], i + 1);
    }
  };

  dfs([], 0);

  return output;
};
