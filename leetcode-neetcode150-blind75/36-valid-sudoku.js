/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // checking duplicates with hashmap
  const cols = {};
  const rows = {};
  const boxes = {};

  // initiate hashmaps for rows and columns
  for (let n = 0; n < board.length; n++) {
    cols[n] = new Set();
    rows[n] = new Set();
  }
  // initiate hashmap for 3 x 3 boxes
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const boxId = 3 * ~~(i / 3) + ~~(j / 3);
      boxes[boxId] = new Set();
    }
  }

  // check if valid sudoku
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const curr = board[i][j];
      const boxId = 3 * ~~(i / 3) + ~~(j / 3);

      // . signifies no value so skip
      if (curr === '.') continue;

      // check if duplicate
      if (rows[i].has(curr)) return false;
      if (cols[j].has(curr)) return false;
      if (boxes[boxId].has(curr)) return false;

      // add to sets
      rows[i].add(curr);
      cols[j].add(curr);
      boxes[boxId].add(curr);
    }
  }
  return true;
};
