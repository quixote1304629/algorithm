/**
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if(!root) return true
  if (!root.left && !root.right) return true;

  function equal(lNode, rNode) {
    if (!lNode && !rNode) return true;
    if (lNode && rNode) {
      if (lNode.val !== rNode.val) return false;
      return equal(lNode.left, rNode.right) && equal(lNode.right, rNode.left);
    }
    return false;
  }

  if (root.left && root.right) return equal(root.left, root.right);

  return false;
};

const data = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
    },
    right: {
      val: 4,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 3,
    },
  },
};

const res = isSymmetric(data);
console.log(res)


var isSymmetric2 = function (root) {
  // r1 和 r2 分别是左子树的根节点和右子树的根节点
  function isMirror(r1, r2) {
    // 如果都为null 对称
    if (!r1 && !r2) return true;
    // 如果有一个不为null 则不对称
    if (!r1 || !r2) return false;
    // 1. 判断左子树根节点个右子树根节点的值 2. 判断r1.left和r2.right 3. 判断r1.right和r2.left
    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
  }
  // 妙啊
  return isMirror(root, root);
};