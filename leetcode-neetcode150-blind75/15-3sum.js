/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // const output = {} // using keys to deduplicate arr
  const output = [];

  // numerical sort
  const arr = nums.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)

  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    // to avoid duplicates for 1st val of triplet

    // two pointers to find required pair
    let l = i + 1;
    let r = arr.length - 1;

    while (l < r) {
      // console.log(arr[i],arr[l],arr[r])
      // l++
      if (arr[i] + arr[l] + arr[r] < 0) {
        l++;
      }
      // r++
      else if (arr[i] + arr[l] + arr[r] > 0) {
        r--;
      } else {
        // output[arr[i] +' '+ arr[l] +' '+ arr[r]] = [arr[i],arr[l],arr[r]]
        output.push([arr[i], arr[l], arr[r]]);
        l++;
        // -2 -2 0 0 2 2 -> in such cases we want to keep shifting the l
        // this avoids duplicate of 2nd val of triplet
        // 3rd value is taken automatically
        while (arr[l] === arr[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  // return Object.values(output)
  return output;
};
