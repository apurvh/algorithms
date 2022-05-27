/**
 *
 * @param {string} val
 * @param {boolean} isLast
 */
function TrieNode(val, isLast) {
  this.val = val; // not required
  this.isLast = isLast;
  this.children = {}; // map: letter:node
}

var Trie = function () {
  this.root = new TrieNode(null, false);
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    // console.log(i)
    // word[i] does not exists in trie
    if (!(word[i] in cur.children)) {
      // check if last
      let isLast;
      if (i === word.length - 1) isLast = true;
      else isLast = false;

      // create node with word[i]
      const node = new TrieNode(word[i], isLast);

      // add to trie
      cur.children[word[i]] = node;
      cur = node;
    }
    // word[i] exists
    else {
      cur = cur.children[word[i]];

      // if all letters of word already exists, then mark the
      // last letter
      if (i === word.length - 1) {
        cur.isLast = true;
      }
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let cur = this.root;
  for (let i = 0; i < word.length; i++) {
    // word[i] does not exists in trie
    if (!(word[i] in cur.children)) {
      return false;
    }
    // word[i] exists
    else {
      cur = cur.children[word[i]];
    }
  }
  // search word's last letter should have isLast:true
  if (cur.isLast) return true;
  else return false;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let cur = this.root;
  for (let i = 0; i < prefix.length; i++) {
    // prefix[i] does not exists in trie
    if (!(prefix[i] in cur.children)) {
      return false;
    }
    // prefix[i] exists
    else {
      cur = cur.children[prefix[i]];
    }
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
