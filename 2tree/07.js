/**
 * https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
 * 重建二叉树
 * 输入某二叉树的前序遍历和中序遍历的结果，请构建该二叉树并返回其根节点。
 */

var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const node = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  const leftVin = inorder.slice(0, index);
  const rightVin = inorder.slice(index + 1);
  const leftPre = preorder.slice(1, index + 1);
  const rightPre = preorder.slice(index + 1);
  node.left = buildTree(leftPre, leftVin);
  node.right = buildTree(rightPre, rightVin);
  return node;
};

// 最优版本
var map = {};
var buildTree = function (preorder, inorder) {
  let len = inorder.length;
  for (let i = 0; i < len; i++) map[inorder[i]] = i;
  if (len === 0) return null;
  else return dfs(preorder, inorder, 0, len - 1, 0, len - 1);
};
var dfs = function (p, i, pl, pr, il, ir) {
  let res = new TreeNode(p[pl]);
  let k = map[p[pl]];
  if (k > il) res.left = dfs(p, i, pl + 1, k - il + pl, il, k - 1);
  if (k < ir) res.right = dfs(p, i, k - il + pl + 1, pr, k + 1, ir);
  return res;
};
