var isSameTree = function (p, q) {
  if (p && q) {
    if (p.val === q.val) {
      return isSameTree(p.left, q.left) && sSameTree(p.right, q.right);
    } else {
      return false;
    }
  } else if (!p && !q) {
    return true;
  } else {
    return false;
  }
};
