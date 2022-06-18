/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // using hashmaps to solve in O(n)
  // let nums = [1,1,1,2,2,3]
  // create countMap = {1:3, 2:2, 3:1}
  // then create a freq map with index=freq, integers of same freq grouped in array
  // freqMap = [[], [3], [2], [1], [], [], []]
  // then count top k element

  const countMap = new Map();
  const freqMap = new Array(nums.length + 1).fill([]);

  // create countMap
  for (let i = 0; i < nums.length; i++) {
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1);
  }

  // create freqMap
  for (let [integer, count] of countMap) {
    freqMap[count] = [...freqMap[count], integer];
  }
  // console.log(countMap)
  // console.log(freqMap)

  // get top k element from freqMap
  let result = [];
  for (let i = freqMap.length - 1; i >= 0; i--) {
    if (freqMap[i].length === 0) continue;
    if (k === 0) break;
    for (const integer of freqMap[i]) {
      if (k > 0) {
        result.push(integer);
        k--;
      }
    }
  }
  return result;
};
