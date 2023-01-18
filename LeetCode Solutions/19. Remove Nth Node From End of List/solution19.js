/**
* Definition for singly-linked list.
* function ListNode(val, next) {
* this.val = (val===undefined ? 0 : val)
* this.next = (next===undefined ? null : next)
* }
*/

/**
* @param {ListNode} head
* @param {number} n
* @return {ListNode}
*/

var removeNthFromEnd = function(head, n) {
	let root = new ListNode(-1, head), tail = root
	while (n > 1) {
		head = head.next
		n--
	}
	while (head.next) {
		tail = tail.next
		head = head.next
	}
	tail.next = tail.next.next
	return root.next
};