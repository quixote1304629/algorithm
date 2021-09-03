/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/submissions/
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 */

 var reverseBetween = function (head, left, right) {
  let i = 1;
  let prev = null;
  let curr = head;
  while (i < left) {
    prev = curr;
    curr = curr.next;
    i++;
  }

  let reserve = null;
  let curr2 = curr;
  while (i <= right) {
    const next = curr2.next;
    curr2.next = reserve;
    reserve = curr2;
    curr2 = next;
    i++;
  }

  curr.next = curr2;
  if (prev) {
    prev.next = reserve;
    return head;
  } else {
    return reserve;
  }
};
