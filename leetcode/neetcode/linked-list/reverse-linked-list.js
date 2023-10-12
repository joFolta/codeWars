/**
https://leetcode.com/problems/reverse-linked-list/

206. Reverse Linked List

Easy

Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Recursion
 * Time O(N) | Space O(N)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const isBaseCase = !head?.next;
  if (isBaseCase) return head;

  return dfs(head); /* Time O(N) | Space O(N) */
};

/* Depth-First Traversal: recursive algorithm primarily used to search all the vertices of a graph or tree data structure. */
const dfs = (curr) => {
  const prev = reverseList(curr.next); /* Time O(N) | Space O(N) */

  curr.next.next = curr;
  curr.next = null;

  return prev;
};

/**
 * Recursion simpler
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const reverse = (curr, prev) => {
    if (curr === null) {
      return prev; /* head of the reversed list to finally return */
    } else {
      /* save "next" before we break the pointer below */
      const next = curr.next;
      curr.next = prev; /* WHERE THE MAGIC HAPPENS: point it backwards */
      return reverse(next, curr);
    }
  };

  return reverse(head, null);
};

/**
 * Time O(N) | Space O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  /* just declaring variables initally here */
  /* i.e. let prev = null, let curr = head, let next = null */
  let [prev, curr, next] = [null, head, null];

  while (curr) {
    /* Time O(N) */
    next = curr.next; /* save "next" before we break the pointer below */
    curr.next = prev; /* WHERE THE MAGIC HAPPENS: point it backwards */
    /* eventually the last "prev" will be the head of the reversed list */

    prev = curr; /* shift prev forward */
    curr = next; /* shift curr forward with the saved "next*/
  }

  /* prev is the head */
  return prev;
};
