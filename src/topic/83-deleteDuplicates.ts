function ListNode(val?, next?) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * 83. 删除排序链表中的重复元素
 * @param {ListNode} head
 * @return {ListNode}
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 */
var deleteDuplicates = function (head) {
  if (head === null) return head
  let curr = head

  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }

  return head
};
const list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))
const list2 = new ListNode(1, new ListNode(1, new ListNode(1)))
console.log(deleteDuplicates(list))
console.log(deleteDuplicates(list2))