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

var unuse_reverseKGroup = function (head, k) {
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

var reverseKGroup = function (head, k) {
  if (!head || k <= 1) return head;

  let temp = head;
  for (let i = 0; i < k; i++) {
    if (!temp) return head;
    temp = temp.next;
  }

  let prev = null;
  let curr = head;
  let j = 0;
  while (j < k && curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    j++;
  }
  // console.log(prev, j, curr);
  head.next = reverseKGroup(curr, k);
  return prev;
};

var reverseKGroup = function (head, k) {
  if (!head || k <= 1) return head;

  let backup = { val: "", next: null };
  let backupCurr = backup;

  let prev = null;
  let curr = head;
  let j = 0;
  while (j < k && curr) {
    const newNode = { val: curr.val, next: null };
    backupCurr.next = newNode;
    backupCurr = newNode;

    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    j++;
  }
  if (j < k) return backup.next;
  backup = null
  backupCurr= null
  head.next = reverseKGroup(curr, k);
  return prev;
};

const link = buildLink(5);
const result = reverseKGroup(link, 2);
const json = JSON.stringify(result);
console.log(json);
