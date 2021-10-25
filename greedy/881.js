/**
 * https://leetcode-cn.com/problems/boats-to-save-people/
 * 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
 * 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
 * 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
 */

/**
 * 1 <= people.length <= 50000
 * 1 <= people[i] <= limit <= 30000
 */

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let ans = 0;
  people.sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  while (i < j) {
    // 因为有先决条件: 1 <= people[i] <= limit
    // if (people[j] > limit) {
    //   return new Error("xxxx");
    // }
    if (people[j] === limit || people[i] + people[j] > limit) {
      ans++;
      j--;
    } else {
      ans++;
      i++;
      j--;
    }
  }

  if (i === j) {
    ans++;
  }

  return ans;
};
