/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const lengthS = s.length;
  const lengthT = t.length;

  let i = 0;
  let j = 0;

  while (i < lengthS && j <= lengthT - lengthS + i - 1) {
    const c1 = s.charAt(i);
    while (j <= lengthT - lengthS + i ) {
      if (c1 === t.charAt(j)) {
        j++;
        break;
      }
      j++;
    }
    i++;
  }
  return i === lengthS && s.charAt(lengthS - 1) === t.charAt(j - 1);
};

isSubsequence("axc","ahbgdc")
