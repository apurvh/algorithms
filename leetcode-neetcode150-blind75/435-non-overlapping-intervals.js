/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let count = 0;
  let prevEnd = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];

    // check if overlapping,
    if (prevEnd > curr[0]) {
      // set prevEnd to the smallest of overlapping intervals
      if (prevEnd > curr[1]) {
        prevEnd = curr[1];
      } else {
        // do nothing
      }
      count++;
    }
    // else just add
    else {
      prevEnd = curr[1];
    }
  }

  // console.log(intervals)
  // console.log(output)
  return count;
};
