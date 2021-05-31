const { buildLink } = require('./utils.js')


/**
 * leetcode-92 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let i = 1;
  let pointLeft = null;
  let pointRight = null;
  let prev = null;
  let cur = head;
  while (cur && i <= right) {
    const next = cur.next;

    if (i === left - 1) {
      pointLeft = cur;
    }

    if (i === left) {
      pointRight = cur;
    }

    if (i >= left) {
      cur.next = prev;
      prev = cur;
    }

    if (i === right) {
      pointRight.next = next;
      break;
    }

    cur = next;
    i++;
  }

  if (pointLeft) {
    pointLeft.next = prev;
    return head;
  }
  return prev;
};


const link = buildLink(7);
const result = reverseBetween(link, 3, 6);
const json = JSON.stringify(result)

console.log(json);
