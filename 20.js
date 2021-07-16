/** 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1.左括号必须用相同类型的右括号闭合。
 * 2.左括号必须以正确的顺序闭合。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid0 = function (s) {
  const length = s.length;
  if (length % 2) return false;

  const replace = (v) => {
    if (!v) return v;
    console.log(v)
    const s2 = v.replaceAll(/(\{\})|(\(\))|(\[\])/g, "");
    if (v === s2) return v;
    return replace(s2);
  };

  const result = replace(s)

  return !result
};

/** 最优 */
var isValid = function(s) {
  if (s.length % 2 === 1) return false
  const stack = []
  const arr = s.split('')
  const dict = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (const i of arr) {
      if (dict[i]) {
          stack.push(i)
      } else {
          const top = stack[stack.length - 1]
          if (i === dict[top]) {
              stack.pop()
          } else {
              return false
          }
      }
  }
  return !stack.length
};

const res = isValid("([]{");
console.log(res)
