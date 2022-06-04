/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let output = false;

  const getPosId = (i, j) => {
    return i * board[0].length + j;
  };

  const dfs = (i, j, index, set) => {
    const boardPos = board[i][j];
    if (boardPos !== word[index]) return;

    // using set to track which pos are already visited
    set.add(getPosId(i, j));

    if (boardPos === word[index] && index === word.length - 1) {
      output = true;
      return;
    }

    if (boardPos === word[index]) {
      // const forward = [i, j+1]
      if (j + 1 < board[0].length && !set.has(getPosId(i, j + 1))) {
        dfs(i, j + 1, index + 1, new Set(set));
      }

      // const backward = [i, j-1]
      if (j - 1 >= 0 && !set.has(getPosId(i, j - 1))) {
        dfs(i, j - 1, index + 1, new Set(set));
      }

      // const down = [i+1, j]
      if (i + 1 < board.length && !set.has(getPosId(i + 1, j))) {
        dfs(i + 1, j, index + 1, new Set(set));
      }

      // const up = [i-1, j]
      if (i - 1 >= 0 && !set.has(getPosId(i - 1, j))) {
        dfs(i - 1, j, index + 1, set);
      }
    }
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const val = board[i][j];
      if (val === word[0]) {
        dfs(i, j, 0, new Set());
      }
    }
  }

  return output;
};
