import { ListNode, createListNode } from '../utils'
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var oddEvenList = function(head) {
    if (head === null) {
        return head;
    }
    let evenHead = head.next;
    let odd = head, even = evenHead;
    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};


console.log(oddEvenList(createListNode([1,2,3,4,5])))
console.log(oddEvenList(createListNode([2,1,3,5,6,4,7])))