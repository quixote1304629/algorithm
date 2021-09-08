/**
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const ans = new ListNode("*");
  let tail = ans;

  let quotient = 0;
  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + quotient;
    quotient = Math.floor(sum / 10);

    const node = new ListNode(sum % 10);
    tail.next = node;
    tail = node;

    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }

  if (quotient > 0) {
    tail.next = new ListNode(quotient);
  }

  return ans.next;
};

function addTwoNumbers(lst1, lst2) {
  let resultLst = null,
    tail = resultLst,
    carry = 0;
  while (lst1 || lst2) {
    const result = (lst1 ? lst1.val : 0) + (lst2 ? lst2.val : 0) + carry;
    if (!resultLst) {
      tail = resultLst = new ListNode(result % 10);
    } else {
      tail.next = new ListNode(result % 10);
      tail = tail.next;
    }

    carry = Math.floor(result / 10);
    lst1 = lst1 ? lst1.next : lst1;
    lst2 = lst2 ? lst2.next : lst2;
  }

  if (carry) {
    tail.next = new ListNode(carry);
  }

  return resultLst;
}
