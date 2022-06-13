/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0;

  /* using bit right shift
    while(n){
        res += n % 2
        n = n >>> 1  // 3 '>' for unsigned right shift
    }
    */

  // dropping LSB
  while (n) {
    n = n & (n - 1);
    res++;
  }

  return res;
};
