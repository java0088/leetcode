/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */
var longestPalindrome = function (s) {
  for (let i = 1; i < s.length; i++) {

  }
  function getMax(i) {
    let j = i + 1
    while (i > 1 && j < s.length) {
      if (s[j] === s[i]) {
        j++
      } else {

      }
    }
  }
};

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('ac'))