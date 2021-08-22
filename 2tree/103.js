/**
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root, deep = 0, result = []) {
  if (!root) return result;
  if (!result[deep]) {
    result[deep] = [];
  }
  if (deep % 2) {
    result[deep].unshift(root.val);
  } else {
    result[deep].push(root.val);
  }
  zigzagLevelOrder(root.left, deep + 1, result);
  zigzagLevelOrder(root.right, deep + 1, result);
  return result;
};
