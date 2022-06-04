/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let output = [];

  const recursion = (subset, i, j) => {
    // check total sum of subsets so far
    let sum = 0;
    for (let s = 0; s < subset.length; s++) {
      sum += subset[s];
    }
    // if sum is equal to target, push it to output
    if (sum === target) output.push(subset);

    // call further recursion calls only if total sum does not
    // exceed target
    if (sum < target) {
      // we are iterating over all candidates one by one
      // and pushing that as a possible subset
      // k starts at j to avoid duplicates

      for (let k = j; k < candidates.length; k++) {
        recursion([...subset, candidates[k]], i + 1, k);
      }
    }
  };

  recursion([], -1, 0);
  return output;
};
