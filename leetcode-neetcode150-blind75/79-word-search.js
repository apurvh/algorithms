/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  // Two strategies to deal with duplicates
  // 1. using set - add and remove position ids from set
  // 2. replace char at i,j with # and then reassign after dfs complete
  /*
    let set = new Set()
    const getPosId = (i,j) =>{
        return (i * board[0].length + j)
    }
    */
  const dfs = (i, j, index) => {
    if (index === word.length) return true;
    // cases to terminate DFS
    // 1. out of bounds
    // 2. revisiting already visited
    // 3. words are different
    if (i > board.length - 1 || i < 0) return false;
    if (j > board[0].length - 1 || j < 0) return false;
    // if(set.has(getPosId(i,j))) return false
    if (board[i][j] === '#') return false;
    if (board[i][j] !== word[index]) return false;

    // using set to track which pos are already visited
    // set.add(getPosId(i,j))
    const char = board[i][j];
    board[i][j] = '#';

    const res =
      dfs(i + 1, j, index + 1, set) ||
      dfs(i - 1, j, index + 1, set) ||
      dfs(i, j + 1, index + 1, set) ||
      dfs(i, j - 1, index + 1, set);

    // set.delete(getPosId(i,j))
    board[i][j] = char;
    return res;
  };

  // check board for first letter matches
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const val = board[i][j];
      if (val === word[0]) {
        if (dfs(i, j, 0)) return true;
      }
    }
  }
  return false;
};
