/**
 * 在n个物品中挑选若干物品装入背包，最多能装多满？假设背包的大小为m，每个物品的大小为A[i]
 *
 * 输入: [3,4,8,5],  10
 * 输出: 9
 */

class Solution {
  /**
   * backPack
   *
   * @param m: An integer m denotes the size of a backpack
   * @param A: Given n items with size A[i]
   * @return: The maximum size
   */
  backPack(m, A) {
    const dp = new Array(m + 1).fill(0);
    for (let i = 0; i < A.length; i++) {
      for (let j = m; j >= A[i]; j--) {
        dp[j] = Math.max(dp[j - A[i]] + A[i], dp[j]);
      }
    }
    return dp[m];
  }
}
