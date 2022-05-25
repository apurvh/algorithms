/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0;
  let r = 0;
  let res = 0;
  const map = {};
  while (r < s.length) {
    // add right char every loop
    map[s[r]] = (map[s[r]] || 0) + 1;

    // move left pointer when k+1 new chars
    const maxLen = Math.max(...Object.values(map)); // O(26) time to get max
    if (r - l + 1 - maxLen > k) {
      // dont forget to remove the left most item
      map[s[l]] = map[s[l]] - 1;
      l++;
    }

    // update longest seq
    if (r - l + 1 > res) res = r - l + 1;

    r++;
  }
  return res;
};
