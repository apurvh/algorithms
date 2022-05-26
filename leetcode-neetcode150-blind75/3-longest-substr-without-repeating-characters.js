/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 1;

  let long = 0;
  const set = new Set();

  // keep going till r reaches rightmost
  while (r < s.length) {
    // check if letter exists in set
    // if not, then include the right letter
    // expanding the substring
    if (!set.has(s[r])) {
      set.add(s[r]);
      r++;
      if (long < set.size) long = set.size;
    }
    // if yes, removing the letter and shriking the string
    else {
      set.delete(s[l]);
      l++;
    }
  }
  return long;
};
