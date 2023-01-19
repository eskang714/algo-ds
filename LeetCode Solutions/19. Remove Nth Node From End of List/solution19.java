/**
* Definition for singly-linked list.
* public class ListNode {
* int val;
* ListNode next;
* ListNode() {}
* ListNode(int val) { this.val = val; }
* ListNode(int val, ListNode next) { this.val = val; this.next = next; }
* }
*/



class Solution {
	public ListNode removeNthFromEnd(ListNode head, int n) {
		ListNode root = new ListNode(-1, head), tail = root;
		while (n > 1) {
			head = head.next;
			n--;
		}
	
		while (head.next != null) {
			head = head.next;
			tail = tail.next;
		}
	
		tail.next = tail.next.next;
		return root.next;
	}
}