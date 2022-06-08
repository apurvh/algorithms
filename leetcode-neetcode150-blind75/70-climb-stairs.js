var climbStairs = function (n) {
  let one = 1,
    two = 1;

  for (let i = n; i > 0; i--) {
    let tempOne = one;
    one = two + one;
    two = tempOne;
  }

  return two;
};
