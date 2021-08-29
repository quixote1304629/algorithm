/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (!head) return null;
  let fast = head;
  let slow = null;
  let count = 1;
  while (fast && count < k) {
    fast = fast.next;
    count++;
  }
  if(!fast) return null
  slow = head
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow
};
