/**
 * https://www.nowcoder.com/practice/b56799ebfd684fb394bd315e89324fb4?tpId=117&&tqId=37816&&companyId=665&rp=1&ru=/company/home/code/665&qru=/ta/job-code-high/question-ranking
 *
 *
 * 给定一个数组arr，返回arr的最长无重复元素子数组的长度，无重复指的是所有数字都不相同。
 * 子数组是连续的，比如[1,3,5,7,9]的子数组有[1,3]，[3,5,7]等等，但是[1,3,7]不是子数组
 */

function maxLength(arr) {
  const length = arr.length;
  let result = 1;
  let obj = { [arr[0]]: 0 };
  let i = 0;
  let j = 1;
  while (j < length) {
    const oldIndex = obj[arr[j]];
    obj[arr[j]] = j;
    if (oldIndex === undefined || oldIndex < i) {
      j++;
      continue;
    }
    result = Math.max(j - i, result);
    i = oldIndex + 1;
    j++;
  }
  result = Math.max(j - i, result);
  return result;
}
