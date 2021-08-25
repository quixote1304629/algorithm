/**
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const result = [];
  function dfs(node, deep) {
    if (!node) return;
    if (result[deep] === undefined) {
      result[deep] = root.val;
    }
    dfs(node.right, deep + 1);
    dfs(node.left, deep + 1);
  }
  dfs(root, 0);
  return result
};
