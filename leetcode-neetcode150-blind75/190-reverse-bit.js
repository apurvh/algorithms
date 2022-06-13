/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0; //

  for (let i = 0; i < 32; i++) {
    res = res | (((n >> i) & 1) << (31 - i));
  }

  return res;
};
