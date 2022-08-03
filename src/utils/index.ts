export function ListNode(val?, next?) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

export function createListNode(arr: any[]) {
  if (arr.length === 0) return null
  let head = new ListNode(arr[0])
  let curr = head
  for (let i = 1; i < arr.length; i++) {
    curr.next = new ListNode(arr[i])
    curr = curr.next
  }

  return head
}