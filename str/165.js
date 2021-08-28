/**
 * https://leetcode-cn.com/problems/compare-version-numbers/
 * 给你两个版本号 version1 和 version2 ，请你比较它们。
 * 版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。
 * 比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
  let num1 = version1.split(".");
  let num2 = version2.split(".");
  let left = right = 0;
  while(left < num1.length || right < num2.length){
      let n1 = left < num1.length ? parseInt(num1[left]) : 0;
      let n2 = right < num2.length ? parseInt(num2[right]) : 0;
      if(n1 < n2){
          return -1;

      }else if(n1 > n2){
          return 1;

      }else{
          left++;
          right++;
      }

  }
  return 0;

};

const res = compareVersion("0.1", "1.1");
console.log(res);
