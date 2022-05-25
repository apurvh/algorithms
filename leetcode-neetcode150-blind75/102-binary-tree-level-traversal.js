/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  /**
   * using BFS to traverse the tree
   * keeping track of depth with [node, depth]
   * creating map of {depth:[nodes]}
   * collecting values of map and returning them
   */

  let cur = [root, 1];
  const queue = []; // enqueue: Array.prototype.push(), dequeue: Array.prototype.shift()
  const map = {
    1: [root.val],
  };
  while (cur) {
    const node = cur[0];
    const depth = cur[1];

    if (node.left) {
      queue.push([node.left, depth + 1]);
      map[depth + 1] = [...(map[depth + 1] || []), node.left.val];
    }

    if (node.right) {
      queue.push([node.right, depth + 1]);
      map[depth + 1] = [...(map[depth + 1] || []), node.right.val];
    }
    cur = queue.shift();
  }
  return Object.values(map);
};
