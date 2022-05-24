/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /*
   * Using a dummy head helps in dealing with edge case easier, refer-
   * https://github.com/neetcode-gh/leetcode/blob/main/19-Remove-Nth-node-from-end-of-List.py
   */
  if (head.next === null) return null;
  let f = head;
  let s = null; // lags n+1 behind f

  // used to count how far ahead f is
  // and then at n+1 start s
  let flag = 0;
  while (true) {
    // start s
    flag++;
    if (flag === n) {
      s = head;
    } else if (flag > n) {
      s = s.next;
    }
    f = f.next;

    // if f is at end
    // then remove s's next node
    // 2 edge cases:
    // 1 - when you are removing first node
    // 2 - removing last node
    if (f.next === null) {
      // s is null when you want to remove first node
      if (s === null) {
        return head.next;
      } else {
        // if the element to be removed is last one
        if (s.next.next === null) {
          s.next = null;
        } else {
          s.next = s.next.next;
        }
      }
      break; // done removing
    }
  }
  return head;
};
