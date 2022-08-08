/**
 * 144. 二叉树的前序遍历
 * @param {TreeNode} root
 * @return {number[]}
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
var preorderTraversal = function (root) {
  if (root === null) return []
  let arr = []
  order(root)
  function order(tree) {
    arr.push(tree.val)
    if (tree.left) order(tree.left)
    if (tree.right) order(tree.right)
  }
  return arr
};