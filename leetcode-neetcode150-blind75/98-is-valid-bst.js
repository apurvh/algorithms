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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const valid = (node, left, right) => {
    if (!node) return true; // null condition
    if (!(node.val < right && node.val > left)) return false; // failing condition
    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  };
  return valid(root, -1 * Infinity, Infinity);
};
