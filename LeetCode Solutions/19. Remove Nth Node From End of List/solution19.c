/**
* Definition for singly-linked list.
* struct ListNode {
* int val;
* struct ListNode *next;
* };
*/

struct ListNode* removeNthFromEnd(struct ListNode* head, int n){
	struct ListNode* root = (struct ListNode*) malloc(sizeof(struct ListNode));
	root->val = 0;
	root->next = head;
	struct ListNode* tail = root;
	while (n > 1) {
		head = head->next;
		n--;
	}
	while (head -> next != NULL) {
		head = head -> next;
		tail = tail -> next;
	}
	tail -> next = tail -> next -> next;
	return root -> next;
}