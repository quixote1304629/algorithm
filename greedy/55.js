/**
 * https://leetcode-cn.com/problems/jump-game/
 * 跳跃游戏
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  // 能到达最远索引位置
  let j = 0;
  // 当前遍历位置
  let i = 0;
  while (i <= j && i < nums.length) {
    j = Math.max(i + nums[i], j);
    i++;
  }
  return j >= nums.length - 1;
};
