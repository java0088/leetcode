/**
 * 145. 二叉树的后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 * 给你一棵二叉树的根节点 root ，返回其节点值的 后序遍历 。
 */
var postorderTraversal = function (root) {
  if (root === null) return []
  let arr = []
  order(root)
  function order(tree) {
    if (tree.left) order(tree.left)
    if (tree.right) order(tree.right)
    arr.push(tree.val)
  }
  return arr
};