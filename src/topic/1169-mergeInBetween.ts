import { ListNode, createListNode } from '../utils'
/**
 * 1669. 合并两个链表
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  if (list1 === null) return list2
  let index = 0
  let dummy = new ListNode(0, list1)
  let curr = dummy

  while (curr !== null) {
    if (index === a) {
      while (curr.next !== null && index <= b) {
        curr.next = curr.next.next
        index++
      }
      let last = list2
      while (last.next !== null) last = last.next
      let temp = curr.next
      curr.next = list2
      last.next = temp
    }
    curr = curr.next
    index++
  }
  return list1
};
const list1 = createListNode([0, 1, 2, 3, 4, 5])
const list2 = createListNode([1000000, 1000001, 1000002])
console.log(mergeInBetween(list1, 3, 4, list2))
console.log(mergeInBetween(createListNode([0, 1, 2, 3, 4, 5, 6]), 2, 5, createListNode([1000000, 1000001, 1000002, 1000003, 1000004])))