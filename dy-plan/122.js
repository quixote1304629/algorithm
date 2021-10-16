/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 *  买卖股票的最佳时机 II
 * 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let ans = 0
  let i = 0
  let j = 1
  while (j < prices.length) {
      if(prices[j-1] < prices[j]) {
          j++
      } else {
          ans += (prices[j-1] - prices[i])
          i = j
          j++
      }
  }
  ans += (prices[j-1] - prices[i])
  return ans
};


 var maxProfit = function(prices) {
  let ans = 0
  let i = 1
  while (i < prices.length) {
      if(prices[i-1] < prices[i]) {
        ans += (prices[i] - prices[i-1])
      }
      i++

  }
  return ans
};