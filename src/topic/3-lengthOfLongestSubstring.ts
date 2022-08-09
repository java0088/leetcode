/**
 * 3. 无重复字符的最长子串
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let map = new Map(), index = 0
    for (let j = i; j < s.length; j++) {
      if (map.has(s[j])) {
        max = Math.max(max, index)
        break
      } else {
        index++
        map.set(s[j], j)
      }
    }

    max = Math.max(max, index)
  }
  return max
};


console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('au'))