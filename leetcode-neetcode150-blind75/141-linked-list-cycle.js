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
var hasCycle = function (head) {
  // visualise:
  // fast and slow pointers are like min and hour hand
  // they eventually cross
  let s = head;
  let f = head;
  while (true) {
    // ensure s exists, ie. deal with empty linked list []
    if (!s) break;
    s = s.next;

    // ensure f and f.next exists, else we have reached end
    if (!f || !f.next) break;
    f = f.next.next;

    // if the pointers meet, then there is a cycle
    if (s === f) return true;
  }
  return false;
};
