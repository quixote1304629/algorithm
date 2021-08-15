/**
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
* 给定一个二叉树，找出其最小深度。
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

var minDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]];
  let i = 0;
  while (i < stack.length) {
    const [curr, dep] = stack[i];
    if (!curr.left && !curr.right) return dep;
    if (curr.left) stack.push([curr.left, dep + 1]);
    if (curr.right) stack.push([curr.right, dep + 1]);
    i++;
  }
};
