/**
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 * 题解: https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/
 * 约瑟夫环
 */

/**
 * n = 5, m= 3
 * 可以理解为: 每次减少一位后， 剩下的元素位置都往前移m位. 原先位置[0, m-2] 的元素就追到末尾位置
 * 0 1 2 3 4 
 * 3 4 0 1
 * 1 3 4
 * 1 3
 * 3
 * 
 * 
 * 
 */


/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let pos = 0;
  let i = 2;
  while (i <= n) {
    pos = (pos + m) % i;
    i++;
  }
  return pos;
};

