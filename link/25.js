/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let result = l1;
  let prev1 = null;
  let curr1 = l1;
  let curr2 = l2;
  while (curr1 && curr2) {
    if (curr2.val <= curr1.val) {
      const next2 = curr2.next;
      curr2.next = curr1;
      if (prev1) {
        prev1.next = curr2;
      } else {
        result = curr2;
      }
      prev1 = curr2;
      curr2 = next2;
    } else {
      const next1 = curr1.next;
      if (next1) {
        prev1 = curr1;
        curr1 = next1;
      } else {
        curr1.next = curr2;
        return result;
      }
    }
  }
  return result;
};


var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }

};

var mergeTwoLists = function(l1, l2) {
  
}