import { TreeNode } from '../../utils'

// 递归先序遍历
function preOrder(tree) {
    if (!tree) return

    console.log(tree.val)
    preOrder(tree.left)
    preOrder(tree.right)
}

// 递归中序遍历
function inOrder(tree) {
    if (!tree) return

    inOrder(tree.left)
    console.log(tree.val)
    inOrder(tree.right)
}

// 递归后序遍历
function afterOrder(tree) {
    if (!tree) return

    afterOrder(tree.left)
    afterOrder(tree.right)
    console.log(tree.val)
}

// 使用栈先序遍历
function preOrderWithStack(tree) {
    if (!tree) return

    let stack = [tree]

    while(stack.length !== 0) {
        const cur = stack.pop()
        console.log(cur.val)
        // 先判断是否有右孩子，有就进栈
        if (cur.right) stack.push(cur.right)

        // 在判断是否有做孩子，有左孩子进栈
        if (cur.left) stack.push(cur.left)
    }
}

// 使用栈中序遍历
function inOrderWithStack(tree) {
    if (!tree) return

    let stack = [tree]
    let cur = tree
    while(stack.length !== 0 || !cur) {
        if (cur && cur.left) { // 一直向左走，每次入栈
            cur = cur.left
            stack.push(cur)
        } else {
            // 第一次到这里n就是tree的最左边节点，也就是 22，因为22没有右节点，第二次会弹出2
            const n = stack.pop()
            console.log(n.val)
            // 如果 n 有右孩子，将cur指向n的右节点，此时cur是节点，就会走第一个条件，又会到这个右节点的最左边
            if (n.right) {
                cur = n.right
                stack.push(cur)
            }
        }
    }
}

// 使用栈后序遍历
function afterOrderWithStack(tree) {
    if (!tree) return

    // 使用两个栈，第一个栈依次遍历树，将每一个节点添加到第二个栈中，注意添加的顺序
    let stack = [tree]
    let stack2 = []
    while(stack.length !== 0) {
        // 每次弹出添加到第二个栈中
        const n = stack.pop()
        stack2.push(n)

        // 先左后右
        if (n.left) stack.push(n.left)
        if (n.right) stack.push(n.right)
    }

    // 依次弹窗第二个栈的节点
    while(stack2.length !== 0) {
        console.log(stack2.pop().val)
    }
}

// 层序遍历
function orderLevel(tree) {
    if (!tree) return 0
    
    let queue = [tree]
    while(queue.length !== 0) {
        const cur = queue.shift()

        console.log(cur.val)
        if (cur.left) {
            queue.push(cur.left)
        }
        if (cur.right) {
            queue.push(cur.right)
        }
    }
}

// 二叉树的最大层数
function getTreeMaxLevel(tree) {
    // 队列版
    // if (!tree) return 0
    // let queue = [{ level: 1, node: tree }]
    // let maxLevel = 0
    // while(queue.length !== 0) {
    //     const { level, node } = queue.shift()

    //     if (node.left) {
    //         queue.push({ node: node.left, level: level + 1 })
    //     }
    //     if (node.right) {
    //         queue.push({ node: node.right, level: level + 1 })
    //     }

    //     maxLevel = Math.max(level, maxLevel)
    // }

    // return maxLevel

    // 递归版

    function process(node) {
        if (!node) return 0

        const leftH = process(node.left)
        const rightH = process(node.right)

        const maxHeight = Math.max(leftH, rightH) + 1

        return maxHeight
    }

    return process(tree)
}

function isBalanceTree(tree) {
    if (!tree) return true
    
    function process(node) {
        if (!node) return { isBalance: true, height: 0 }

        const leftInfo = process(node.left)
        const rightInfo = process(node.right)

        const maxHeight = Math.max(leftInfo.height, rightInfo.height) + 1

        if (leftInfo.isBalance && rightInfo.isBalance && Math.abs(leftInfo.height - rightInfo.height) <= 1) {
            return { isBalance: true, height: maxHeight }
        } else {
            return { isBalance: false, height: maxHeight }
        }
    }
    return process(tree).isBalance
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(22, new TreeNode(66)), new TreeNode(222)), new TreeNode(3, new TreeNode(33), new TreeNode(333)))

// 递归版
// preOrder(tree) // 1, 2, 22, 222, 3, 33, 333
// inOrder(tree) // 22, 2, 222, 1, 33, 1, 333
// afterOrder(tree) // 22, 222, 2, 33, 333, 3, 1

// 非递归版
// preOrderWithStack(tree) // 1, 2, 22, 222, 3, 33, 333
// inOrderWithStack(tree) // 22, 2, 222, 1, 33, 1, 333
// afterOrderWithStack(tree) // 22, 222, 2, 33, 333, 3, 1

// console.log(orderLevel(tree))
// console.log(getTreeMaxLevel(tree))
console.log(isBalanceTree(tree))