/*
https://leetcode.com/problems/merge-two-sorted-lists/description/

21. Merge Two Sorted Lists

Easy

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next)) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }

  * const listAOne = ListNode(1, undefined)
  * const listAThree = ListNode(3)
  * const ListASix = ListNode(6)

  listAOne.next = listAThree
  listThree.next = listASix
  listAThree.next.val  6


 */

/**
 * Time complexity: O(N) linear time - just a single loop
 * Space complexity: O(2N) linear space x2 - in the worst case, input + equal size output (doubles the memory of the input size)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(); // create empty intial node
    let tail = dummy;

    while (list1 && list2) { // Time O(N + M)
        if (list2.val > list1.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1) tail.next = list1;
    if (list2) tail.next = list2;

    return dummy.next;
}

/**
 * Time complexity: O(N) linear time - just a single loop
 * Space complexity: O(N + M) linear space x2 - in the worst case, input + equal size output (doubles the memory of the input size)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return null;
    }

    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let pointerA = list1;
    let pointerB = list2;
    let pointerC = null;
    let headList3;

    while (pointerA && pointerB) {
        if (pointerA.val < pointerB.val) {
            if (!pointerC) { // define the head
                headList3 = new ListNode(pointerA.val);
                pointerC = headList3;
            } else {
                pointerC.next = new ListNode(pointerA.val);
                pointerC = pointerC.next;
            }

            pointerA = pointerA.next;
        } else { // pointerB.val equal or greater than pointerA
            if (!pointerC) {
                headList3 = new ListNode(pointerB.val);
                pointerC = headList3;
            } else {
                pointerC.next = new ListNode(pointerB.val);
                pointerC = pointerC.next;
            }

            pointerB = pointerB.next;
        }
    }

    if (pointerA === null) {
        // vs copying remaining nodes to memory, just point to remaining nodes
        pointerC.next = pointerB;
    }

    if (pointerB === null) {
        pointerC.next = pointerA;
    }

    return headList3;

};

// ???
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * 
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const isBaseCase1 = list1 === null;
    if (isBaseCase1) return list2;

    const isBaseCase2 = list2 === null;
    if (isBaseCase2) return list1;

    const isL2Greater = list1.val <= list2.val;
    if (isL2Greater) {
        list1.next = mergeTwoLists(list1.next, list2); // Time O(N + M) | Space O(N + M)

        return list1;
    }

    const isL2Less = list2.val <= list1.val;
    if (isL2Less) {
        list2.next = mergeTwoLists(list1, list2.next); // Time O(N + M) | Space O(N + M)

        return list2;
    }

}

// ???
/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * Time O(N + M) | Space O(N + M)
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let sentinel = tail = new ListNode(); // let sentinel = new ListNode(); let tail = new ListNode();

    while (list1 && list2) { // Time O(N + M)
        const isL2Greater = list1.val <= list2.val;
        const isL2Less = list2.val < list1.val;

        if (isL2Greater) {
            tail.next = list1;
            list1 = list1.next;
        }

        if (isL2Less) {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
}



// TODO
// Marco's challenge: try again but with adding no additional memory usage
// i.e. Space complexity: O(N), not O(2N)
// w/o using new ListNode()

