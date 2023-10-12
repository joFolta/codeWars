/*
https://leetcode.com/problems/reorder-list/

143. Reorder List

Medium

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const mid = getMid(head); /* Time O(N) */
  const reversedFromMid = reverse(mid); /* Time O(N) */

  reorder(head, reversedFromMid); /* Time O(N) */
};

/* tortoise and hare algorithm */
const getMid = (head) => {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    /* Time O(N) */
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
  // if length is even, l2 will be shorter
};

const reverse = (head) => {
  let [prev, curr, next] = [null, head, null]; /* Time O(N) */

  while (curr) {
    next = curr.next; /* save next to memory before shifting it below */
    curr.next = prev; /* reverse the pointer */

    prev = curr; /* shift prev forward */
    curr = next; /* shift curr forward */
  }

  return prev;
};

const reorder = (l1, l2) => {
  let [first, next, second] = [l1, null, l2];

  while (second.next) {
    /* stop when either list reaches null. Using second b/c "if length is even, l2 will be shorter" */
    /* Time O(N) */
    next = first.next; /* save next */
    first.next = second; /* point to second's node */
    first = next; /* shift first forward */

    next = second.next; /* save next */
    second.next = first; /* point to first's node */
    second = next;
  }
};
