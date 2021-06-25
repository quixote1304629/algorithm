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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  let node = root;
  while (node) {
    if (node.val === val) return node;
    if (node.val > val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return null;
};

var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
