/**
* Definition for singly-linked list.
* type ListNode struct {
* Val int
* Next *ListNode
* }
*/

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	root := &ListNode{-1, head}
	tail := root
	
	for (n > 1) {head = head.Next; n--}
	for (head.Next != nil) {head, tail = head.Next, tail.Next}
	
	tail.Next = tail.Next.Next
	
	return root.Next
}