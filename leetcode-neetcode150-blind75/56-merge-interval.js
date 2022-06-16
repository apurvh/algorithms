/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 1) return intervals;

  // sort
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  // console.log(intervals)

  /*
    // iterate over i = 0..n, check if i, i+1 can be merged
    for(let i=0; i<intervals.length-1; i++){
        while(intervals[i][1] >= intervals[i+1][0]){
            intervals =  [...intervals.slice(0, i), [intervals[i][0], Math.max(intervals[i][1], intervals[i+1][1])], ...intervals.slice(i+2,intervals.length) || []]
            if(!intervals[i+1]) break
        }
    }
    return intervals
    */

  const res = [intervals[0]];

  for (let curr of intervals) {
    prev = res[res.length - 1];
    if (prev[1] >= curr[0]) {
      prev[1] = Math.max(curr[1], prev[1]);
    } else {
      res.push(curr);
    }
  }
  return res;
};
