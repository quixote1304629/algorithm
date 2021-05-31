/** 构建单向链表 */
function buildLink(n, valKey = 'val', nextKey = 'next') {
  let head = { [valKey]: 1, [nextKey]: null };
  let cur = head;
  for (let i = 2; i <= n; i++) {
    const node = { [valKey]: i, [nextKey]: null };
    cur.next = node;
    cur = node;
  }
  return head
}

module.exports = {
  buildLink
}