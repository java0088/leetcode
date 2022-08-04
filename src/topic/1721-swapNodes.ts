import { ListNode, createListNode } from '../utils'
/**
 * 1721. 交换链表中的节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  // 如果head为空或者只有一个元素直接返回即可
  if (head === null || head.next === null) return head

  // 使用数组存放所有的节点
  let stack = [], curr = head
  while (curr !== null) {
    stack.push(curr)
    curr = curr.next
  }

  // 如果正数和倒数是同一个节点无需交换
  if (k - 1 === stack.length - k) return head

  // 交换位置
  let temp = stack[k - 1]
  stack[k - 1] = stack[stack.length - k]
  stack[stack.length - k] = temp

  let dummy = new ListNode(0)
  curr = dummy
  for (let i = 0; i < stack.length; i++) {
    stack[i].next = null
    curr.next = stack[i]
    curr = curr.next
  }
  return dummy.next
};

console.log(swapNodes(createListNode([1, 2, 3, 4, 5]), 2))
console.log(swapNodes(createListNode([7, 9, 6, 6, 7, 8, 3, 0, 9, 5]), 5))
console.log(swapNodes(createListNode([1]), 1))
console.log(swapNodes(createListNode([1, 2]), 1))
console.log(swapNodes(createListNode([1, 2, 3]), 2))