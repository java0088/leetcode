import { createListNode, ListNode } from '../utils'
/**
 * 86. 分隔链表
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 */
var partition = function (head, x) {
  if (head === null || head.next === null) return head

  let dummy = new ListNode(0, head)
  let curr = dummy, prev = null
  while (curr.next !== null && curr.next.val < x) {
    curr = curr.next
  }
  if (curr.next !== null) {
    prev = curr
    while (curr && curr.next !== null) {
      if (curr.next.val < x) {
        let temp = curr.next
        curr.next = curr.next.next
        temp.next = prev.next
        prev.next = temp
        prev = prev.next
      } else {
        curr = curr.next
      }
    }
  }
  return dummy.next
};
const list1 = createListNode([1, 4, 3, 2, 5, 2])
const list2 = createListNode([2, 1])
const list3 = createListNode([1, 4, 3, 0, 2, 5, 2])

console.log(partition(list1, 3));
console.log(partition(list2, 2));
console.log(partition(list3, 3));
