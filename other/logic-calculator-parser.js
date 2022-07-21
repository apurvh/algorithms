/**
 * Using Javascript, convert the following array:
[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]
to:
"a < b OR (c == d AND e != f)"
Please make your response as elegant and legible as possible
 * 
 */

// assuming that input will follow the underline recursiv-ish pattern
// more test cases might change this assumption
const input = [
  'OR',
  ['<', 'a', 'b'],
  ['AND', ['==', 'c', 'd'], ['!=', 'e', 'f']],
];

const recursiveParser = (input) => {
  // base case for recursion
  if (typeof input[input.length - 1] === 'string') {
    return `${input[1]} ${input[0]} ${input[2]}`;
  }

  const [operator, ...operatees] = input;
  return `(${recursiveParser(operatees[0])} ${operator} ${recursiveParser(
    operatees[1]
  )})`;
};

const output = recursiveParser(input).slice(1, -1);
console.log(output);
