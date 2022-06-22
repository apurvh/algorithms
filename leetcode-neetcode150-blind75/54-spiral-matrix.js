/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const output = [];
  let l = 0,
    r = matrix[0].length;
  let t = 0,
    b = matrix.length;

  while (true) {
    // scroll left to right
    for (let i = l; i < r; i++) {
      output.push(matrix[t][i]);
    }
    t++;
    if (t >= b) break;

    // scroll to bottom
    for (let i = t; i < b; i++) {
      output.push(matrix[i][r - 1]);
    }
    r--;
    if (r <= l) break;

    // scroll left
    for (let i = r - 1; i >= l; i--) {
      output.push(matrix[b - 1][i]);
    }
    b--;
    if (b <= t) break;

    // scroll top
    for (let i = b - 1; i >= l + 1; i--) {
      output.push(matrix[i][l]);
    }
    l++;
    if (l >= r) break;
  }
  return output;
};
