
function TreeNode(val, left?, right?) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * 102. 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */
var levelOrder = function (root) {
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
  return result
};

let tree = new TreeNode(1, new TreeNode(2, new TreeNode(22), new TreeNode(222)), new TreeNode(3, new TreeNode(33), new TreeNode(333)))

console.log(levelOrder(tree))