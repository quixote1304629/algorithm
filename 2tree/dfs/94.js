/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 94. 二叉树的中序遍历
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

// queue中同时存在 TreeNode、number、null
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const curr = queue.pop();
    if (curr instanceof TreeNode) {
      queue.push(curr.right, curr.val, curr.left);
    } else if (typeof curr === "number") {
      result.push(curr);
    }
  }
  return result;
};

/** 常规循环 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [];
  let p = root;
  while (queue.length || p) {
    while (p) {
      queue.push(p);
      p = p.left;
    }
    const curr = queue.pop();
    result.push(curr.val);
    p = curr.right;
  }
  return result;
};

var inorderTraversal = function (root, result = []) {
  if (!root) return result;
  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);
  return result;
};
