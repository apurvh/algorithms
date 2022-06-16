/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  const dfs = (i, j, matrix, prevHeight) => {
    if (i < 0 || j < 0 || i === heights.length || j === heights[0].length)
      return;
    if (matrix[i][j] === -1) return;
    if (heights[i][j] < prevHeight) return;

    matrix[i][j] = -1;

    dfs(i + 1, j, matrix, heights[i][j]);
    dfs(i - 1, j, matrix, heights[i][j]);
    dfs(i, j + 1, matrix, heights[i][j]);
    dfs(i, j - 1, matrix, heights[i][j]);
  };

  // Pacific
  // deep copy  to track visited / can be just a m*n matrix with filled 0s
  const pacific = heights.map(function (arr) {
    return arr.slice();
  });
  // run top row
  for (let i = 0; i < heights[0].length; i++) {
    dfs(0, i, pacific, heights[0][i]);
  }
  // left column
  for (let i = 0; i < heights.length; i++) {
    dfs(i, 0, pacific, heights[i][0]);
  }

  // Atlantic
  // deep copy to track visited
  const atlantic = heights.map(function (arr) {
    return arr.slice();
  });
  // bottom
  for (let j = 0; j < heights[0].length; j++) {
    dfs(heights.length - 1, j, atlantic, heights[heights.length - 1][j]);
  }
  // right
  for (let i = 0; i < heights.length; i++) {
    dfs(i, heights[0].length - 1, atlantic, heights[i][heights[0].length - 1]);
  }

  // Get common
  const output = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      if (pacific[i][j] === -1 && atlantic[i][j] === -1) {
        output.push([i, j]);
      }
    }
  }

  return output;
};
