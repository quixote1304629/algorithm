/**
 * 二叉搜索树的第k个结点
 * 给定一棵结点数为 n 二叉搜索树，请找出其中的第 k 小的TreeNode结点。
 *
 * 二叉搜索树： 左节点val < 父节点val < 右节点val
 */

// 中序遍历时搜索

function KthNode(pRoot, k) {
  let count = 0;
  function dfs(node) {
    if (!node) return null;
    const lRes = dfs(node.left);
    if (lRes) return lRes;

    count++;
    if (count === k) {
      return node;
    }

    const rRes = dfs(node.right);
    if (rRes) return rRes;
  }
  return dfs(pRoot);
}
