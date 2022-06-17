const canPersonAttendMeetings = (meetings) => {
  let res = true;
  let prevEnd = meetings[0][1]; // tracks end time of prev meeting
  for (let i = 1; i < meetings.length; i++) {
    const curr = meetings[i];
    // check if curr and prev meetings overlap
    if (prevEnd > curr[0]) {
      // meetings overlap
      return false;
    } else {
      prevEnd = curr[1];
    }
  }
  return res;
};

// test canPersonAttendMeetings function
const meetings = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(canPersonAttendMeetings(meetings));

const meetings2 = [
  [5, 8],
  [9, 15],
];
console.log(canPersonAttendMeetings(meetings2));
