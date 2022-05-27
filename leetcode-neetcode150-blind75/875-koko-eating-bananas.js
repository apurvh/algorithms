/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // helper function to calculate time (hrs) to eat all the bananas
  // based on a speed (banana/hr)
  const timeToEat = (speed) => {
    let timeToEat = 0;
    for (const pile of piles) {
      const time = Math.ceil(pile / speed);
      timeToEat += time;
    }
    return timeToEat;
  };

  let l = 1;
  let r = Math.max(...piles); // max speed that koko can eat
  let res = r;

  // using binary search to find the optimum time
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const timeToEat_m = timeToEat(m);

    if (timeToEat_m <= h) {
      if (res > m) res = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return res;
};
