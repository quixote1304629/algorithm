/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if(num1 === '0' || num2 === '0') return '0'
  const length1 = num1.length
  const length2 = num2.length
  const list = new Array(length1 + length2).fill(0)
  for(let i = length1 - 1; i >= 0; i--) {
      const n1 = num1.charAt(i)
      for(let j = length2 - 1; j >= 0; j--) {
          const n2 = num2.charAt(j)
          const mult = n1 * n2 + list[i+j+1]
          list[i + j + 1] = mult % 10;
          list[i + j] += Math.floor(mult / 10);
          // console.log(list.join())
      }
  }
  if(list[0] === 0) {
      return list.slice(1).join('')
  } else {
      return list.join('')
  }
};


multiply('123', '456')