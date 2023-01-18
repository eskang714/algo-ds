<?php 
  /**
  * Definition for a singly-linked list.
  * class ListNode {
  *   public $val = 0;
  *   public $next = null;
  *   function __construct($val = 0, $next = null) {
  *     $this->val = $val;
  *     $this->next = $next;
  *   }
  * }
  */
  class Solution {
  /**
  * @param ListNode $head
  * @param Integer $n
  * @return ListNode
  */
    function removeNthFromEnd($head, $n) {
      $root = new ListNode(0, $head); $tail = $root;
      
      while ($n > 1) {$head = $head -> next; $n--;}
      while ($head->next != NULL) {
        $head = $head -> next;
        $tail = $tail -> next;
      }
      
      $tail -> next = $tail -> next -> next;
      
      return $root -> next;
    }
  }
?>