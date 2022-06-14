/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const MAX = 2 ** 31 - 1;
  const MIN = (-2) ** 31;

  let num = 0;
  while (x) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    // working with num not in range
    if (num > Math.trunc(MAX / 10)) return 0;
    if (num === Math.trunc(MAX / 10) && digit > 7) return 0;
    if (num < Math.trunc(MIN / 10)) return 0;
    if (num === Math.trunc(MIN / 10) && digit > 8) return 0;

    num = num * 10 + digit;
  }
  return num;
};
