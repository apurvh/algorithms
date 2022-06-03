/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // checking duplicates with hashmap
  const cols = {};
  const rows = {};
  const grid3x3 = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const boardVal = board[i][j];
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);

      if (boardVal === '.') continue;

      // if hashmap already contains the value
      if (
        (rows[i] || []).includes(boardVal) ||
        (cols[j] || []).includes(boardVal) ||
        (grid3x3[boxNum] || []).includes(boardVal)
      )
        return false;

      // if hashmap does not contain the value
      rows[i] = [...(rows[i] || []), boardVal];
      cols[j] = [...(cols[j] || []), boardVal];
      grid3x3[boxNum] = [...(grid3x3[boxNum] || []), boardVal];
    }
  }
  return true;
};
