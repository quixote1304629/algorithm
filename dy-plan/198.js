/**
 * https://leetcode-cn.com/problems/house-robber/
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(nums[0], nums[1]);
  const dp = new Array(length + 1).fill(0);
  dp[1] = nums[0];
  dp[2] = nums[1];
  let ans = Math.max(dp[1], dp[2]);
  for (let i = 3; i <= length; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i - 1];
    ans = Math.max(dp[i], ans);
  }
  return ans;
};

var rob = function (nums) {
  const length = nums.length;
  if (length === 0) return 0;
  if (length === 1) return nums[0];
  if (length === 2) return Math.max(nums[0], nums[1]);
  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);
  for (let i = 2; i < length; i++) {
    const temp = curr;
    curr = Math.max(prev + nums[i], curr);
    prev = temp;
    // console.log(i, ",", prev, ",", curr);
  }
  return curr;
};

const data = [2, 7, 9, 3, 1];
const res = rob(data);
console.log(res);
