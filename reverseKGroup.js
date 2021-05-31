const { buildLink } = require("./utils.js");

/**
 * leecode-25 K 个一组翻转链表
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let prev = null;
  let curr = head;
  let i = 1;

  let prevPoint = null;
  let point = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;

    if (i % k === 1) {
      prevPoint = point;
      point = curr;
    }

    if (i % k === 0) {
      if (i === k) {
        head = prev;
      } else {
        prevPoint.next = prev;
      }
      prev = null;
    }

    curr = next;
    i++;
  }

  return head;
};

const link = buildLink(10);
const result = reverseKGroup(link, 4);
const json = JSON.stringify(result);
console.log(json);
