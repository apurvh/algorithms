/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  /*
   * node: is original node
   * newNode: is the new copied node
   * cloned: map keeps track of the copied nodes and
   * their refs
   */

  if (!node) return node;
  if (node.neighbors.length === 0) return new Node(node.val, []);

  // map of node.val:node reference
  const cloned = new Map();

  // copy nodes of graph by traversing depth first recursively
  // keeping track of parent
  const dfsClone = (node, parent) => {
    // clone the node and set the connection with parent node
    const newNode = new Node(node.val, []);
    if (parent) {
      parent.neighbors.push(newNode);
    }
    // save the clone reference
    cloned.set(newNode.val, newNode);

    // setting neighbors
    // iterate over the original node's neighbors
    // if neighbors is already copied, then connect that neighbor
    // if neighbor does not exists, then create it
    for (let neighbor of node.neighbors) {
      if (cloned.has(neighbor.val)) {
        newNode.neighbors.push(cloned.get(neighbor.val));
      } else {
        dfsClone(neighbor, newNode);
      }
    }
  };

  dfsClone(node, null);

  return cloned.get(1);
};
