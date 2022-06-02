/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let result = 0;
  const stack = [];

  const calculate = (val1, val2, operator) => {
    val1 = Number(val1);
    val2 = Number(val2);

    switch (operator) {
      case '+':
        return val1 + val2;
      case '-':
        return val1 - val2;
      case '/':
        return ~~(val1 / val2);
      case '*':
        return val1 * val2;
    }
  };

  const isOperator = (s) => {
    if (s === '+') return true;
    if (s === '-') return true;
    if (s === '/') return true;
    if (s === '*') return true;
    return false;
  };

  tokens.map((item, index) => {
    if (isOperator(item)) {
      const val2 = stack.pop();
      const val1 = stack.pop();
      result = calculate(val1, val2, item);
      stack.push(result);
    } else {
      stack.push(item);
    }
  });

  return stack.pop();
};
