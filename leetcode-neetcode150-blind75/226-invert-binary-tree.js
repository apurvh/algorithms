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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // checking if root exists, takes care of all edge cases
  if (root) {
    // storing nodes in temp
    const r = root.right;
    const l = root.left;

    // reversing branches
    root.left = r;
    root.right = l;

    // recursively doing it on all branches
    invertTree(root.left);
    invertTree(root.right);
  }

  return root;
};
