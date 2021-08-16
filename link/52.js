/**
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * 输入两个链表，找出它们的第一个公共节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  let flag1 = true
  let flag2 = true

  while (p1 && p2) {
    if (p1 === p2 && p1 !== null)  return p1

    const next1 = p1.next
    if(next1) {
      p1 = next1
    } else {
      if(flag1) {
        p1 = headB
        flag1 = false
      } else {
        p1 = null
      }
    }

    const next2 = p2.next
    if(next2) {
      p2 = next2
    } else {
      if(flag2) {
        p2 = headA
        flag2 = false
      } else {
        p2 = null
      }
    }
  }

  return null
};
