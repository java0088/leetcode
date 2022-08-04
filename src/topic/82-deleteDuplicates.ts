import { ListNode, createListNode } from '../utils'
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (head === null || head.next === null) return head
  let dummy = new ListNode(0, head)
  let curr = dummy

  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val === curr.next.next.val) {
      let val = curr.next.val
      while (curr.next !== null && curr.next.val === val) {
        curr.next = curr.next.next
      }
    } else {
      curr = curr.next
    }
  }
  return dummy.next
};

console.log(deleteDuplicates(createListNode([1, 2, 3, 3, 4, 4, 5])))
console.log(deleteDuplicates(createListNode([1, 1, 1, 2, 3])))
