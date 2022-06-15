/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let l = 0,
    r = matrix.length - 1;

  while (l < r) {
    // rotate square ring
    for (let i = 0; i < r - l; i++) {
      const ptrTL = matrix[l][l + i];
      const ptrTR = matrix[l + i][r];
      const ptrBL = matrix[r - i][l];
      const ptrBR = matrix[r][r - i];

      matrix[l][l + i] = ptrBL;
      matrix[l + i][r] = ptrTL;
      matrix[r][r - i] = ptrTR;
      matrix[r - i][l] = ptrBR;
    }

    // shrink ring
    r -= 1;
    l += 1;
  }
};
