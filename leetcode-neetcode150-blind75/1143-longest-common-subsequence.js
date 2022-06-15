/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const grid = [];
  // initiate text1 +1 x text2+1
  for (let i = 0; i < text1.length + 1; i++) {
    grid.push(new Array(text2.length + 1).fill(0));
  }
  // console.log(grid)

  // dp solution
  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      // if letters same
      if (text1[i] === text2[j]) {
        grid[i][j] = 1 + grid[i + 1][j + 1];
      }
      // if letters diff
      if (text1[i] !== text2[j]) {
        grid[i][j] = Math.max(grid[i + 1][j], grid[i][j + 1]);
      }
    }
  }

  // console.log(grid)
  return grid[0][0];
};
