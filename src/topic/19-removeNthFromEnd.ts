import { createListNode, ListNode } from '../utils'
/**
 * 19. 删除链表的倒数第 N 个结点
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 方式一：使用数组
 *  将链表上所有节点存放到数组上
 *  使用索引的方式删除倒数第n哥节点
 *  获取到倒数第n个节点的前一个结点，如果为空说明要删除的节点是第一个节点，返回当前节点的下一个节点即可
 * 
 * 方式二：快慢指针
 *  创建一个dummy链表节点作为传入连接的空头，定义first和second指针节点
 *  先让快节点走n次，然后快慢节点依次后移，如果快节点走到最后，那么慢节点就是要删除节点的前一个节点
 */
var removeNthFromEnd2 = function (head, n) {
  // 如果head为空直接返回
  if (head === null) return
  // 如果只有一个节点并且要删除的也是这个节点返回null
  if (!head.next && n === 1) return null
  let curr = head, stack = []
  // 将所有节点放入数组中
  while (curr !== null) {
    stack.push(curr)
    curr = curr.next
  }

  // 获取到倒数第n个节点的前一个结点
  let prev = stack[stack.length - n - 1]
  // 获取当前节点
  curr = stack[stack.length - n]
  // 如果为空说明要删除的节点是第一个节点，返回当前节点的下一个节点即可
  if (!prev) return curr.next
  // 到这里按正常逻辑删除即可
  prev.next = prev.next.next
  return head
};

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let first = head
  let second = dummy

  let index = 0
  while (index < n) {
    first = first.next
    index++
  }
  while (first) {
    first = first.next
    second = second.next
  }

  second.next = second.next.next
  return dummy.next
};

const list1 = createListNode([1, 2, 3, 4, 5])
const list2 = createListNode([1])
const list3 = createListNode([1, 2])

console.log(removeNthFromEnd(list1, 1))
console.log(removeNthFromEnd(list2, 1))
console.log(removeNthFromEnd(list3, 2))
