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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isTreeSame = (p, q) => {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    return isTreeSame(p.left, q.left) && isTreeSame(p.right, q.right);
  };

  // traverse tree and compare at each point
  let curr = root;
  let stack = [];
  while (curr) {
    if (isTreeSame(curr, subRoot)) return true;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
    curr = stack.pop();
  }
  return false;

  /* Using recursion
    if(isTreeSame(root,subRoot)) return true
    if(!subRoot) return true
    if(!root) return false
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    */
};
