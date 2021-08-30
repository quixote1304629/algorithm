/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * 230. 二叉搜索树中第K小的元素
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0;
  /**
   * 中序遍历
   * @return TreeNode 找到的节点
   */
  function dfs(node) {
    if (!node) return null;
    const leftRes = dfs(node.left);
    if (leftRes) return leftRes;
    count++;
    if (count === k) return node;
    const RightRes = dfs(node.right);
    if (RightRes) return RightRes;
    return null
  }

  return dfs(root).val;
};
