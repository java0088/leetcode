import { createListNode } from "../../utils";

const list = createListNode([5, 6, 1])

// 个数为奇数返回中间的，为偶数返回中间左边的
function midOrEvenLeftMid(head) {
  if (!head || !head.next || !head.next.next) return head

  let slow = head.next
  let fast = head.next.next

  while (fast.next && fast.next.next) {

    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function midOrEventRightMid(head) {
  if (!head || !head.next) return head

  if (!head.next.next) return head.next

  let slow = head.next
  let fast = head.next.next
  while (fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (!fast) {
      break
    }
  }

  // 如果时偶数返回slow的下一个
  return slow
}

console.log(midOrEventRightMid(list))