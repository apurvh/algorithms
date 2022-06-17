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
  // edge case
  if (!root) return null;

  const temp = root.left;

  // invert the nodes
  root.left = root.right;
  root.right = temp;

  // recursively do the inversion for..
  // left and right child nodes
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
