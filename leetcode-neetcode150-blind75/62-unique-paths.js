/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // initiate grid
  let grid = [];
  for (let i = 0; i < m; i++) {
    grid.push(new Array(n).fill(0));
  }
  // console.log(grid)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // if either on top most or right most set values to 1
      if (i == 0 || j == 0) grid[i][j] = 1;
      else {
        // all the cells to other than top, set the val acc to relation
        grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
      }
    }
  }

  // console.log(grid)

  return grid[m - 1][n - 1];
};
