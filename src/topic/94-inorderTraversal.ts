
function TreeNode(val, left?, right?) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * 94. 二叉树的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 */
var inorderTraversal = function (root) {
  if (root === null) return []
  let result = []
  order(root)
  function order(tree) {
    if (tree.left) order(tree.left)

    result.push(tree.val)

    if (tree.right) order(tree.right)
  }

  return result
};
