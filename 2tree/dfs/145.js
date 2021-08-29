/**
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * 145. 二叉树的后序遍历
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

var postorderTraversal = function (root) {
  const queue = [];
  const result = [];
  let prev = null;
  let curr = root;
  while (queue.length || curr) {
    while (curr) {
      queue.push(curr);
      curr = curr.left;
    }

    curr = queue.pop();
    if (!curr.right || prev === curr.right) {
      result.push(curr.val);
      prev = curr;
      curr = null;
    } else {
      queue.push(curr);
      curr = curr.right;
    }
  }
  return result;
};

var postorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const curr = queue.pop();
    if (curr instanceof TreeNode) {
      queue.push(curr.val, curr.right, curr.left);
    } else if (typeof curr === "number") {
      result.push(curr);
    }
  }
  return result;
};

var postorderTraversal = function (root, result = []) {
  if (!root) return result;
  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.val);
  return result;
};
