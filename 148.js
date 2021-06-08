const { buildLink2 } = require("./utils");

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
var sortList = function (head) {
  if (!head.next) return head;

  let cur = head.next;
  head.next = null;
  let result = head;

  while (cur) {
    const next = cur.next;

    let prev2 = null;
    let cur2 = result;
    while (true) {
      if (!cur2) {
        cur.next = null
        prev2.next = cur;
        break;
      }
      const next2 = cur2.next;
      if (cur.val <= cur2.val) {
        cur.next = cur2;
        if (prev2) {
          prev2.next = cur;
        } else {
          result = cur;
        }
        break;
      }
      prev2 = cur2;
      cur2 = next2;
    }

    cur = next;
  }

  return result;
};

const link = buildLink2([-1, 5, 3]);
const sort = sortList(link);
console.log(sort);
