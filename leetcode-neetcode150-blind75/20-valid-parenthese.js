/*
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let prevLetter = null;
  const stack = [];

  const checkIfbracketCloses = (prevLetter, letter) => {
    if (prevLetter === '(' && letter === ')') return true;
    if (prevLetter === '[' && letter === ']') return true;
    if (prevLetter === '{' && letter === '}') return true;
    return false;
  };

  for (let letter of s) {
    stack.push(letter);
    if (checkIfbracketCloses(prevLetter, letter)) {
      stack.pop();
      stack.pop();
      prevLetter = stack[stack.length - 1];
    } else prevLetter = letter;
  }

  if (stack.length === 0) return true;
  else return false;
};
