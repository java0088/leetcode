
function TreeNode(val, left?, right?) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * 107. 二叉树的层序遍历 II
 * @param {TreeNode} root
 * @return {number[][]}
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */
var levelOrderBottom = function (root) {
  if (root === null) return []
  let result = []
  let stack = [{ tree: root, level: 0 }]
  let arr = []
  let currentLevel = 0
  while (stack.length !== 0) {
    const curr = stack.shift()
    if (curr.level === currentLevel) {
      arr.push(curr.tree.val)
    } else {
      currentLevel = curr.level
      result.push(arr)
      arr = [curr.tree.val]
    }

    if (curr.tree.left !== null) stack.push({ tree: curr.tree.left, level: currentLevel + 1 })
    if (curr.tree.right !== null) stack.push({ tree: curr.tree.right, level: currentLevel + 1 })
  }
  result.push(arr)
  return result.reverse()
};

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(22), new TreeNode(222)), new TreeNode(3, new TreeNode(33), new TreeNode(333)))

console.log(levelOrderBottom(tree))