/**
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * 429. N 叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  // 当前层结果
  let sub = [];
  // 当前层最后一个元素索引
  let levelEnd = 0;
  let i = 0;
  while (i < queue.length) {
    const curr = queue[i];
    sub.push(curr.val);
    if (curr.children) {
      queue.push(...curr.children);
    }
    if (i === levelEnd) {
      result.push(sub);
      levelEnd = queue.length - 1;
      sub = [];
    }
    i++;
  }
  return result;
};
