/** 构建单向链表 */
function buildLink(n, valKey = "val", nextKey = "next") {
  let head = { [valKey]: 1, [nextKey]: null };
  let cur = head;
  for (let i = 2; i <= n; i++) {
    const node = { [valKey]: i, [nextKey]: null };
    cur.next = node;
    cur = node;
  }
  return head;
}

function buildLink2(vals = []) {
  if (!vals || !vals.length) return null;
  let head = { val: vals[0], next: null };
  let cur = head;
  for (let i = 1; i < vals.length; i++) {
    const node = { val: vals[i], next: null };
    cur.next = node;
    cur = node;
  }
  return head;
}

module.exports = {
  buildLink,
  buildLink2,
};
