/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let ptrL = 0;
  let ptrR = numbers.length - 1;

  // using two pointers technique
  // stop when pointers cross
  while (ptrL < ptrR) {
    // if sum is greater than target, shift pointer towards lower values
    while (numbers[ptrL] + numbers[ptrR] > target) {
      ptrR--;
    }

    // if sum is less than target, shift pointer towards greater values
    while (numbers[ptrL] + numbers[ptrR] < target) {
      ptrL++;
    }

    // return if sum is equal to target
    if (numbers[ptrR] + numbers[ptrL] === target) return [ptrL + 1, ptrR + 1];
  }
};
