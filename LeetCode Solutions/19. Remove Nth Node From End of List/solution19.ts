/**
* Definition for singly-linked list.
* class ListNode {
* val: number
* next: ListNode | null
* constructor(val?: number, next?: ListNode | null) {
* this.val = (val===undefined ? 0 : val)
* this.next = (next===undefined ? null : next)
* }
* }
*/
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let root = new ListNode(-1, head), tail = root
	
	while (n > 1) {
		head = head.next
		n--
	}
	
	while (head.next != null) {
		head = head.next
		tail = tail.next
	}
	
	tail.next = tail.next.next
	
	return root.next
};