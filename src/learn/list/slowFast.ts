import { createListNode, ListNode } from "../../utils";

const list = createListNode([5, 6, 1, 9, 6])

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

function midOrEvenRightMid(head) {
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

// console.log(midOrEvenRightMid(list))

// 使用set，先遍历链表1将所有节点添加到set中，然后遍历链表2，每次判断set中是否存在当前遍历节点，如果存在说明相交否则不相交
function crossNodeWithSet(head1, head2) {
  if (!head1 || !head2) return

  let cur = head1
  let set = new Set()
  while (cur) {
    set.add(cur)
    cur = cur.next
  }

  cur = head2

  while (cur) {
    if (set.has(cur)) return cur
    cur = cur.next
  }

  return null
}

function crossNode1(head1, head2) {
  if (!head1 || !head2) return
  if (head1 === head2) return head1

  let head1Loop = isLoopList(head1)
  let head2Loop = isLoopList(head2)
  if (!head1Loop && !head2Loop) {
    console.log('两个链表都没有环')

    let n = 0
    let end1 = head1
    let end2 = head2
    let cur = head1
    while (cur.next) {
      n++
      cur = cur.next
    }
    end1 = cur

    cur = head2

    while (cur.next) {
      n--
      cur = cur.next
    }
    end2 = cur

    if (end1 !== end2) {
      return null
    }

    let longHead = n > 0 ? head1 : head2
    let shotCur = n > 0 ? head2 : head1

    n = Math.abs(n)
    cur = longHead
    while (n !== 0) {
      cur = cur.next
      n--
    }

    while (shotCur && cur) {
      if (shotCur === cur) return shotCur

      shotCur = shotCur.next
      cur = cur.next
    }

    return cur
  }

  return null
}

function isLoopList(head) {
  if (!head || !head.next || head.next.next === head) return head

  let slow = head.next
  let fast = head.next.next

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      fast = head
      break
    }
  }
  while (fast && fast !== slow) {
    slow = slow.next
    fast = fast.next
  }

  return fast
}

// let head1 = new ListNode(1)

// let node12 = new ListNode(2)

// let node13 = new ListNode(3)

// let node14 = new ListNode(4)
// head1.next = node12
// node12.next = node13
// node13.next = node14
// node14.next = node12

// console.log(isLoopList(head1))

// ===================== 测试两个链表是否相交 =====================

let head1 = new ListNode(1)
let head2 = new ListNode(11)

let node12 = new ListNode(2)
let node22 = new ListNode(22)

let node13 = new ListNode(3)
let node23 = new ListNode(33)

let node14 = new ListNode(4)
let node16 = new ListNode(6)
let node17 = new ListNode(7)

head1.next = node12
node12.next = node13
node13.next = node16

node16.next = node17
node17.next = node14

head2.next = node22
node22.next = node23
node23.next = node14

node14.next = new ListNode(5)

// console.log(crossNodeWithSet(head1, head2))
console.log(crossNode1(head1, head2))