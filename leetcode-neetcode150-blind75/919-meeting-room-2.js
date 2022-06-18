const minRooms = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let maxRooms = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    // check if overlapping,
    let n = i;
    let currRooms = 0;
    while (prevEnd > intervals[n][0]) {
      currRooms++;
      if (n < intervals.length - 1) n++;
      else break;
    }
    maxRooms = Math.max(maxRooms, currRooms);

    prevEnd = intervals[i][1];
  }

  // console.log(intervals)
  // console.log(output)
  return maxRooms;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minRooms(intervals));
