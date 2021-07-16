/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  // 标识在queue队列中，每一层末尾的索引位置
  const marks = [0];
  let count = 0;
  let i = 0;
  while (i < queue.length) {
    const curr = queue[i];
    if (!curr.left && !curr.right) {
      break;
    }
    if (curr.left) {
      queue.push(curr.left);
      count++;
    }
    if (curr.right) {
      queue.push(curr.right);
      count++;
    }
    const lastMark = marks[marks.length - 1];
    if (i === lastMark) {
      marks.push(lastMark + count);
      count = 0;
    }
    i++;
  }
  return marks.length;
};

var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  const queue = [[root, 1]];
  let i = 0;
  while (i < queue.length) {
    const curr = queue[i];
    if (!curr[0].left && !curr[0].right) {
      return curr[1];
    }
    if (curr[0].left) queue.push([curr[0].left, curr[1] + 1]);
    if (curr[0].right) queue.push([curr[0].right, curr[1] + 1]);
    i++;
  }
};
