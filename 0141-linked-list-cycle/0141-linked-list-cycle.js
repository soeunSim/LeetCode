/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const saveVal = new Set();
    let current = head;

    while (current) {
        if (saveVal.has(current)) {
            return true;
        }
        saveVal.add(current);
        current = current.next;
    }
    return false;
};