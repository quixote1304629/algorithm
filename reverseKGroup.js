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
var unused_reverseKGroup = function (head, k) {
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

var reverseKGroup = function (head, k) {
  if (k === 1) return head;

  let prev = null;
  let curr = head;
  let i = 1;
  let next = null;

  let prevPoint = null;
  let point = null;

  while (i <= k) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    i++;
  }

  if (!curr) return prev;

  prevPoint = point;
  point = head;
  head = prev;
  prev = null;

  let backup = null;
  let backupCurr = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    if (i % k === 1) {
      prevPoint = point;
      point = curr;
      backup = backupCurr = { val: curr.val, next: null };
    } else {
      backupCurr = backupCurr.next = { val: curr.val, next: null };
    }
    if (i % k === 0) {
      prevPoint.next = prev;
      if (!next) break;
      prev = null;
      backup = backupCurr = null;
    }
    if (!next) {
      prevPoint.next = backup;
      break;
    }
    curr = next;
    i++;
  }
  return head;
};

const link = buildLink(11);
const result = reverseKGroup(link, 3);
const json = JSON.stringify(result);
console.log(json);
