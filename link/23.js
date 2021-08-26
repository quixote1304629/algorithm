/**
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length <= 1) return lists[0] || null;
  const newList = [];
  for (let i = 0; i < lists.length; i = i + 2) {
    newList.push(mergeTwo(lists[i], lists[i + 1]));
  }
  return mergeKLists(newList);
};
function mergeTwo(l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  let result = new ListNode(),
    cur = result;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  if (!l1) cur.next = l2;
  if (!l2) cur.next = l1;
  return result.next || null;
}

var mergeKLists = function (lists) {
  if (lists.length == 0) return null;
  let arr = [];
  let dummyHead = new ListNode(0);
  lists.forEach((list) => {
    let cur = list;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
  });
  arr.sort((a, b) => a - b);
  let cur = dummyHead;
  arr.forEach((val) => {
    let node = new ListNode(val);
    cur.next = node;
    cur = cur.next;
  });
  return dummyHead.next;
};
