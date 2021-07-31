/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 *
 * 输入: [3,9,20,null,null,15,7],
 * 输出: [[3],[9,20],[15,7]]
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (!root) return result;
  const stack = [[root, 0]];
  let i = 0;
  while (i < stack.length) {
    const [node, j] = stack[i];
    if (result[j]) {
      result[j].push(node.val);
    } else {
      result[j] = [node.val];
    }
    node.left && stack.push([node.left, j + 1]);
    node.right && stack.push([node.right, j + 1]);
    i++;
  }
  return result;
};

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = [];
  if (root === null) return result;
  const stack = [root];
  let i = 0;
  let j = 0;
  while (i < stack.length) {
    let temp = [];
    const size = stack.length;
    while (j < size) {
      let node = stack[j];
      temp.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
      j++;
      i++;
    }
    result.push(temp);
  }
  return result;
};

var levelOrder = function (root) {
  const result = [];
  if (root === null) return result;
  const stack = [root];
  let j = 0;
  let arr = [];
  let size = 1;
  while (j < size) {
    let node = stack[j];
    arr.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
    j++;
    if (j === size) {
      result.push(arr);
      if (j < stack.length) {
        arr = [];
        size = stack.length;
      }
    }
  }
  return result;
};

const data = {
  val: 3,
  left: { val: 9 },
  right: {
    val: 20,
    left: { val: 15 },
    right: { val: 7 },
  },
};
const res = levelOrder(data);
console.log(res);
