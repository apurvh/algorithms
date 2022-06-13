/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  /**
   * if we got the numbers with signs + or -
   * we could just add all the elements and we would be left
   * with the result
   * XOR operation does just that but without signs
   * foex. 42*42 = 0
   */

  let output = 0;
  for (const val of nums) {
    output = output ^ val;
  }
  return output;
};
