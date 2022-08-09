/**
 * 5. 最长回文子串
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */
var longestPalindrome = function (s) {
  let max = 0
  let endIndex = 0, startIndex = 0
  for (let i = 0; i < s.length; i++) {
    let { end, start } = getMax(i)
    if (end - start > max) {
      max = end - start
      endIndex = end
      startIndex = start
    }
  }
  return s.substring(startIndex, endIndex + 1)
  function getMax(i) {
    let start = i, end = s.length - 1
    let j = end
    while (j >= i) {
      if (s[i] === s[j]) {
        i++
        j--
      } else {
        i = start
        end = end - 1
        j = end
      }
    }
    return { end, start }
  }
};

console.log(longestPalindrome('babad'))
console.log(longestPalindrome('cbbd'))
console.log(longestPalindrome('ccc'))
console.log(longestPalindrome('ac'))
console.log(longestPalindrome('bacabab'))
console.log(longestPalindrome('aacabdkacaa'))