import { createListNode, ListNode } from '../utils'
/**
 * 61. 旋转链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 */
var rotateRight = function (head, k) {
  if (k == 0 || head == null || head.next == null) {
    return head;
  }
  let curr = head
  let index = 1
  while (curr.next !== null) {
    curr = curr.next
    index++
  }

  let add = index - k % index
  if (add === index) return head
  curr.next = head

  while (add-- > 0) {
    curr = curr.next
  }
  head = curr.next
  curr.next = null
  return head
};


console.log(rotateRight(createListNode([1, 2]), 1))
console.log(rotateRight(createListNode([0, 1, 2]), 4))
