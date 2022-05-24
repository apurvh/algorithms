/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  //log the linked list
  let print = (head) => {
    let ptr = head;
    let msg = '* ';
    while (ptr !== null) {
      msg += '> ' + ptr.val;
      ptr = ptr.next;
    }
    console.log(msg);
  };

  let originalH = head;
  let currentH = head;
  while (originalH.next !== null) {
    let newH = originalH.next;
    originalH.next = originalH.next.next;
    newH.next = currentH;
    currentH = newH;
  }

  print(currentH);
  return currentH;
};
