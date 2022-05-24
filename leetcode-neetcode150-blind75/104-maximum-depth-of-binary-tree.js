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
 * @return {number}
 */
var maxDepth = function (root) {
  /* Recursive solution
    const depthCounter = root =>{
        if(!root) return null
        return 1 + Math.max(depthCounter(root.left), depthCounter(root.right))
    }
    return depthCounter(root)
    */

  /* dfs recursive solution (preorder) 
    if(!root) return 0
    
    let curr = [root, 1]
    let stack = [] // key trick: store node + depth
    let res = curr[1]
    while(curr){
        
        const node = curr[0]
        const depth = curr[1]
        if(res<depth) res = depth
        
        if(node.right) stack.push([node.right, depth+1])
        if(node.left) stack.push([node.left, depth+1])
        
        curr = stack.pop()
    }
    return res
    */

  /* BFS solution */
  if (!root) return 0;
  let curr = [root, 1]; // key trick: store node + depth in stack
  let queue = [];
  let res = 0;
  while (curr) {
    //
    const node = curr[0];
    const depth = curr[1];
    if (res < depth) res = depth;

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);

    curr = queue.shift();
  }
  return res;
};
