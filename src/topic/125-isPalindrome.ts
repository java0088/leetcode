/**
 * 125. 验证回文串
 * @param {string} s
 * @return {boolean}
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 */
var isPalindrome = function (s) {
  let reg = /[a-zA-Z0-9]+/
  let pl = 0, pr = s.length - 1
  while (pl <= pr) {
    while (!reg.test(s[pl]) && pl < pr) pl++
    while (!reg.test(s[pr]) && pl < pr) pr--
    if (s[pl].toLowerCase() !== s[pr].toLowerCase()) {
      return false
    }

    pl++
    pr--
  }

  return true
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(' '))