/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  /* Recursively
    let n = 0
    let res
    const dfsInOrder = root =>{
        console.log('call', root.val, n)
        if(root.left) dfsInOrder(root.left)
        n++
        // console.log(n)
        if(n===k){
            res =  root.val
        }
        if(root.right) dfsInOrder(root.right)
    }
    
    dfsInOrder(root)
    return res
    */

  /* iteratively */
  let cur = root;
  let n = 0;
  const stack = [];
  while (cur || stack) {
    // keep going left till no more left
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    n += 1;
    if (n === k) {
      return cur.val;
    }
    cur = cur.right;
  }
};
