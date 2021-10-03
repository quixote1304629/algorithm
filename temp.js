/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
  const node = new ListNode('*')
  node.next = head
  let p = node
  let prev = node
  let curr = head
  while(curr) {
      if(curr.val === prev.val) {
          prev = curr
          curr = curr.next
      } else {
          p.next = curr
          const next = curr.next
          if(next && curr.val !== next.val) {
              p = curr
          }

          prev = curr
          curr = next
      }
  }
  return node.next
};