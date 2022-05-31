/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let curr = '';
  let output = [];

  /**
   * Draw a tree with possible choices for ( & )
   *    (
   *   / \
   *  (   )
   *
   * notice, count of '(' < n and count of ')' < count of '('
   * do a dfs on tree and collect the results
   */

  const dfs = (curr, openN, closeN) => {
    // All open and close brackets are used up
    // so add to output
    if (openN === n && closeN === n) {
      output.push(curr);
    }

    // stop if open brackets exceed n
    if (openN < n) {
      dfs(curr + '(', openN + 1, closeN);
    }

    // stop if close brackets exceed open brackets
    if (closeN < openN) {
      dfs(curr + ')', openN, closeN + 1);
    }
  };

  dfs(curr, 0, 0);

  return output;

  /* // brute force
let output = [''];

for (let i = 0; i < 2 * n; i++) {

  const outputCopy = [...output];
  output = [];
  
  outputCopy.map((item, index) => {
  
    // count open brackets
    const openN = item.split('').filter((ch) => ch === '(').length;
    const closeN = item.split('').filter((ch) => ch === ')').length;

    if (openN < n) {
      output.push(item + '(');
    }
    if (openN > closeN) {
      output.push(item + ')');
    }
    
  });
}

return output;
*/
};
