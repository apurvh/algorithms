/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let output = '';
  let size = 0;

  for (i = 0; i < s.length; i++) {
    // odd
    let l = i,
      r = i;
    while (s[l] === s[r] && l >= 0 && r < s.length) {
      if (r - l + 1 > size) {
        output = s.slice(l, r + 1); // use ptrs to reduce memory
        size = r - l + 1;
      }
      l--;
      r++;
    }

    // even
    (l = i), (r = i + 1);
    while (s[l] === s[r] && l >= 0 && r < s.length) {
      if (r - l + 1 > size) {
        output = s.slice(l, r + 1);
        size = r - l + 1;
      }
      l--;
      r++;
    }
  }

  return output;
};
