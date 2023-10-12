/*
https://leetcode.com/problems/linked-list-cycle/

141. Linked List Cycle

Easy

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 

Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
 

Follow up: Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head, seen = new Set()) {
  while (head) {
    /* Time O(N) */
    /* not saving value (b/c the list is allowed to have duplicate values, but we are saving to the Set the node itself (JS object) */
    if (seen.has(head)) return true;

    seen.add(head); /* Space O(N) */
    head = head.next;
  }

  return false;
};

/**
 * 🐢Tortoise and 🐇Hare algorithm
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let [slow, fast] = [head, head]; // both pointers start at head

  /* when the last node of the list points to null, we know that it is not a infinitely looped list (cycled list), thus we can return false */
  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next; /* slow traverse only by +1 */
    fast = fast.next.next; /* fast traverse by +2 */

    /* triple equal, the exact same node in memory has been reached by both. This is only possible if the fast traverse cycled back.  */
    const hasCycle = slow === fast;
    if (hasCycle) return true;
  }

  return false;
};
