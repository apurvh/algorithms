/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // filling with 0's satisfies the condition of no future day
  const output = new Array(temperatures.length).fill(0);
  const stack = []; // [[temp, index].. ] keep track of index

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0) {
      // keep going till current temp greater than stack's last temp
      // as this satisfies the condition so remove it and assign index
      if (temperatures[i] > stack[stack.length - 1][0]) {
        const index = stack.pop()[1];
        output[index] = i - index;
      }
      // if does not satisfy break the loop
      else {
        break;
      }
    }

    // keep pushing the temp in monotonically decreasing stack
    stack.push([temperatures[i], i]);
  }
  return output;
};
