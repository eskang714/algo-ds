# Definition for singly-linked list.
# class ListNode:
# def __init__(self, val=0, next=None):
# self.val = val
# self.next = next

class Solution:
	def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
	root = ListNode(-1, head); tail = root
	while n > 1:
		head = head.next
		n-=1
	while head.next:
		head = head.next
		tail = tail.next
	tail.next = tail.next.next
	return root.next