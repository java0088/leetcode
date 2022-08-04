import { createListNode, ListNode } from '../utils'
/**
 * 82. 删除排序链表中的重复元素 II
 * @param {ListNode} head
 * @return {ListNode}
 * 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  let dummy = new ListNode(0, head)
  let curr = dummy
  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) {
      let x = curr.next.val
      while (curr.next !== null && curr.next.val === x) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }
  return dummy.next
};

console.log(deleteDuplicates(createListNode([1, 2, 3, 3, 4, 4, 5])))