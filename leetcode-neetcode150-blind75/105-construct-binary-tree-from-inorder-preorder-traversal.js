/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const build = (preorder, inorder) => {
    if (!preorder || !inorder) return null;
    if (preorder.length === 0 || inorder.length === 0) return null;
    // console.log('> ', preorder, inorder)

    const root = new TreeNode(preorder[0]);

    // find which are left and right tree node in preorder
    // using post orders property
    const mid = inorder.indexOf(preorder[0]);

    root.left = build(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = build(
      preorder.slice(mid + 1, preorder.length),
      inorder.slice(mid + 1, inorder.length)
    );

    return root;
  };

  return build(preorder, inorder);
};
