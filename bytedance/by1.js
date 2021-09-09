/**
 * 找出nums[]中，比左边都大，比右边都小的元素
 * @param {}} nums 
 * @returns 
 */

function find(nums = []) {
  const result = [];
  const length = nums.length;
  if (length < 2) return result;
  // maxLefts[i]: nums中索引i左侧最大的元素， 不包含i
  let maxLefts = [-Infinity];
  // minRights[j]: nums中索引j右侧左侧最大的元素， 不包含j
  let minRights = [Infinity];
  let i = 1;
  let j = length - 2;
  while (i < length && j >= 0) {
    maxLefts[maxLefts.length] = Math.max(
      maxLefts[maxLefts.length - 1],
      nums[i - 1]
    );
    minRights.unshift(Math.min(minRights[0], nums[j + 1]));
    i++;
    j--;
  }

  for (let k = 1; k < length - 1; k++) {
    if (nums[k] > maxLefts[k] && nums[k] < minRights[k]) {
      result.push(k);
    }
  }

  console.log(maxLefts);
  console.log(minRights);
  return result;
}

const data = [2, 3, 1, 8, 9, 20,12, 15];
const res = find(data);
console.log(res);
