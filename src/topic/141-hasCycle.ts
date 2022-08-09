import { ListNode, createListNode } from '../utils'

/**
 * 141. 环形链表
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 使用快慢指针
 *  - 定义一个快指针和一个慢指针，快指针每次走两步、慢指针每次走一步
 *  - 如果存在环形快慢指针必然相遇
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let dummy = new ListNode(0, head)
  let first = dummy
  let second = head.next.next

  while (second !== null && second.next !== null) {
    if (first === second) return true
    first = first.next
    second = second.next.next
  }

  return false
};
let list = new ListNode(3)
let list2 = new ListNode(2)
let list3 = new ListNode(0)
let list4 = new ListNode(-4)
list.next = list2
list2.next = list3
list3.next = list4
list4.next = list2

let list5 = new ListNode(1)
let list6 = new ListNode(2)
list5.next = list6
list6.next = list5

console.log(hasCycle(list))
console.log(hasCycle(list5))