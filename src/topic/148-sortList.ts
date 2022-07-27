function ListNode(val?, next?) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  let list = new ListNode()
  if (head === null) return head

  let current = head

  while (current !== null) {
    insert(list, current.val)
    current = current.next
  }
  return list
  function insert(list, value) {
    let newNode = new ListNode(value)
    if (list.next === null) return list.next = newNode
    let curr = list
    while (curr.next && value > curr.next.val) {
      if (curr.next === null) {
        curr.next = newNode
        return
      }
      curr = curr.next
    }
    newNode.next = curr.next
    curr.next = newNode
  }
};

console.log(sortList(new ListNode(3, new ListNode(2, new ListNode(1, null)))))
console.log(sortList(new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))))))