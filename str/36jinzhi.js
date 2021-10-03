function num2char(num) {
  if (num >= 0 && num <= 9) {
    return num + '';
  } else if (num < 36) {
    return String.fromCharCode(num + 87)
  } else {
    throw new Error('num2char error: ' + num)
  }
}

function char2num(c) {
  if (c >= '0' && c <= '9') {
    return Number(c);
  } else if (c >= 'a' && c <= 'z') {
    return c.charCodeAt() - 87
  } else {
    throw new Error('char2num error: ' + c)
  }
}


function add36jinzhi(s1, s2) {
  if(s1.length < s2.length) {
    [s1, s2] = [s2, s1]
  }

  const resList = []

  const list1 = s1.split('');
  const list2 = s2.split('');

  let quotient = 0

  while (list1.length && list2.length) {
    const c1 = list1.pop()
    const c2 = list2.pop()

    const sum = char2num(c1) + char2num(c2) + quotient

    quotient = Math.floor(sum / 36)
    const remainder = Math.floor(sum % 36)

    resList.push(num2char(remainder))
  }

  while(list1.length) {
    const c1 = list1.pop()

    const sum = char2num(c1) + quotient
    quotient = Math.floor(sum / 36)
    const remainder = Math.floor(sum % 36)

    resList.push(num2char(remainder))
  }

  return resList.reverse().join('')

}

const res = add36jinzhi('jas3h82hsaza', 'ishfhazias345')
console.log(res) // jbs7ks7kskh4g 