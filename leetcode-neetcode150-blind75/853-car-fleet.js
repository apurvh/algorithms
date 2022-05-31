/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  // store position:speed map, to be used after sorting
  let map = new Map();
  position.map((item, index) => {
    map.set(item, speed[index]);
  });

  // numerical sort
  position.sort(function (a, b) {
    return a - b;
  });

  // calculate time to reach for each car
  const timeToReach = [];

  position.map((positionOfCar, index) => {
    const time = (target - positionOfCar) / map.get(positionOfCar);
    timeToReach.push(time);
  });

  // console.log(timeToReach)

  // find number of fleets
  const fleets = [timeToReach[timeToReach.length - 1]];
  for (let i = timeToReach.length - 2; i >= 0; i--) {
    // remove the car if the car ahead is slower
    if (timeToReach[i] > fleets[fleets.length - 1]) {
      fleets.push(timeToReach[i]);
    } else {
      // do nothing
    }
  }

  // console.log(fleets)
  return fleets.length;
};
