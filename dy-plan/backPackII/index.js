/**
 * 有 n 个物品和一个大小为 m 的背包. 给定数组 A 表示每个物品的大小和数组 V 表示每个物品的价值. 问最多能装入背包的总价值是多大?
 */


class Solution {
  /**
   * backPackII
   *
   * @param m: An integer m denotes the size of a backpack
   * @param A: Given n items with size A[i]
   * @param V: Given n items with value V[i]
   * @return: The maximum value
   */
  backPackII(m, A, V) {
    const dp = new Array(m + 1).fill(0)
    for (let i = 0; i < A.length; i++) {
      for (let j = m; j >= A[i]; j--) {
        dp[j] = Math.max(dp[j - A[i]] + V[i], dp[j]);
      }
    }
    return dp[m];
  }
}

const solution = new Solution();

const res = solution.backPackII(10, [2, 3, 5, 7], [1, 5, 2, 4]);
console.log(res);
