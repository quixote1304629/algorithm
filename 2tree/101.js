/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 给定一个二叉树，检查它是否是镜像对称的。
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function isMirror(node1, node2) {
    if (node1 && node2) {
      if (node1.val === node2.val) {
        return (
          isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
        );
      } else {
        return false;
      }
    } else if (!node1 && !node2) {
      return true;
    } else {
      return false;
    }
  }

  return isMirror(root.left, root.right);
};
