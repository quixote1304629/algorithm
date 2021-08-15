/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 给定一个二叉树，找出其最大深度。
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  const stack = [[root, 1]];
  let i = 0;
  while (i < stack.length) {
    const [curr, dep] = stack[i];
    if (curr.left) stack.push([curr.left, dep + 1]);
    if (curr.right) stack.push([curr.right, dep + 1]);
    i++;
  }
  return stack[stack.length - 1][1];
};

var maxDepth = function (root) {
  if (!root) return 0;
  const lMax = maxDepth(root.left);
  const rMax = maxDepth(root.right);
  return lMax > rMax ? lMax + 1 : rMax + 1;
};
