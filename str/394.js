/**
 * https://leetcode-cn.com/problems/decode-string/submissions/
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 输入：s = "r3[a2[c]]"
 * 输出："raccaccacc"
 */

/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  const strList = s.split('')
  const numList = []
  const stack = []
  let result = ''
  let num = 0
  for(let i = 0; i < strList.length; i++) {
      const c = strList[i]
      if(c === '[') {
          numList.push(num)
          num = 0
          stack.push(result)
          result = ''
      } else if (c === ']') {
          const temp = result.repeat(numList.pop())
          result = stack.pop() + temp
      } else if (c >= '0' && c <= '9') {
          num = num * 10 + Number(c)
      } else {
          result += c
      }
  }
  return result
};