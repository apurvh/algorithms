/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let output = 0;

  // ---aba-- => odd palindromic substring
  // ---abba--- => even palindromic substring

  for (let i = 0; i < s.length; i++) {
    // count odd substring
    let l = i,
      r = i;
    while (s[l] === s[r] && l >= 0 && r < s.length) {
      // s[l to r] is a substring
      output++;

      // expand the current string
      l--;
      r++;
    }

    // count even substrings
    (l = i), (r = i + 1);
    while (s[l] === s[r] && l >= 0 && r < s.length) {
      output++;
      l--;
      r++;
    }
  }

  return output;
};
