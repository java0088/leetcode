/**
 * 10. 正则表达式匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 */
var isMatch = function (s, p) {
  let cs = '', isSymbol = false
  for (let i = 0; i < p.length; i++) {
    let c = p[i]
    if (c !== '*' && c !== '.') {
      cs += c
    } else {
      isSymbol = true
      if (c === '*') {
        cs = ''
      } else {
        cs += ''
      }
    }
  }
  return isSymbol ? s.indexOf(cs) !== -1 : s === cs
};

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', 'a*'))
console.log(isMatch('ab', '.*'))
console.log(isMatch('ab', '.'))
console.log(isMatch('mississippi', 'mis*is*p*.'))