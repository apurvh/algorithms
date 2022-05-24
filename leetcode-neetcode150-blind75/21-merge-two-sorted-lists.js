/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null && list2 === null) return null;

  let a = list1;
  let b = list2;

  // creating a temp node as a head of new list
  // then appending nodes to this
  const newH = new ListNode(null, null);
  let tail = newH;

  const add = (node) => {
    tail.next = node;
    tail = tail.next;
  };

  while (true) {
    // merging b is complete
    if (b === null) {
      add(a);
      break;
    }
    // merging a is complete
    if (a === null) {
      add(b);
      break;
    }
    // depending on min value add to the new list,
    // and goto next
    if (a.val < b.val) {
      add(a);
      a = a.next;
    } else {
      add(b);
      b = b.next;
    }
  }
  return newH.next;
};
