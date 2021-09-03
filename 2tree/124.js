/**
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。
 * 路径和 是路径中各节点值的总和。
 * 返回最大路径和
 */
var maxPathSum = function (root) {
  let ans = -Infinity;
  function dfs(node, sub = 0) {
    if (!node) return sub;
    const nextSub = sub + node.val;
    const leftMax = dfs(node.left, nextSub);
    const rightMax = dfs(node.right, nextSub);
    const subAns = Math.max(leftMax, rightMax);
    ans = Math.max(ans, subAns - node.val);
    return subAns;
  }
  dfs(root);
  return ans;
};
