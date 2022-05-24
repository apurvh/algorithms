/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  /*
   * create a hashmap where:
   * key:sorted string
   * val:Array of strs
   */
  const map = {};

  const createKey = (str) => {
    let key;

    // key = str.split('').sort().join('') // takes O(nlogn)

    // letter count takes O(n) time (ideally)
    let letterCount = new Array(26).fill(0);
    for (let s of str) {
      letterCount[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }
    key = letterCount;
    return key.toString();
  };

  for (let i = 0; i < strs.length; i++) {
    const key = createKey(strs[i]);
    const str = strs[i];

    if (map[key] == undefined) map[key] = [str];
    else map[key].push(str);
  }

  return Object.values(map);
};
