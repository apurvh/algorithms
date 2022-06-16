/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];

  const output = [];

  //insert
  if (intervals[0][0] > newInterval[0]) {
    intervals = [newInterval, ...intervals];
  } else if (intervals[intervals.length - 1][0] <= newInterval[0]) {
    intervals = [...intervals, newInterval];
  } else {
    for (let i = 0; i < intervals.length; i++) {
      if (
        intervals[i][0] <= newInterval[0] &&
        intervals[i + 1][0] > newInterval[0]
      ) {
        intervals = [
          ...intervals.slice(0, i + 1),
          newInterval,
          ...intervals.slice(i + 1, intervals.length),
        ];
        break;
      }
    }
  }

  // console.log(intervals)

  //merge
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
