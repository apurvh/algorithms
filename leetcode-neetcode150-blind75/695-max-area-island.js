/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let output = 0;
  let currentIslands = 0;
  // 0 0 0
  // 0 1 0
  // 0 0 0

  // map the area of island given a point
  const mapIsland = (i, j) => {
    // out of bounds
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
    // cell is 0
    if (grid[i][j] === 0) return;

    // declare visited
    grid[i][j] = 0;
    currentIslands++;

    // call in four directions
    mapIsland(i + 1, j);
    mapIsland(i - 1, j);
    mapIsland(i, j + 1);
    mapIsland(i, j - 1);
  };

  // iterate over island and map when land is found
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        currentIslands = 0;
        mapIsland(i, j);
        output = Math.max(output, currentIslands);
      }
    }
  }

  return output;
};
