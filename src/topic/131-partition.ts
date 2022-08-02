/**
 * 131. 分割回文串
 * @param {string} s
 * @return {string[][]}
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 * 回文串 是正着读和反着读都一样的字符串。
 */
var partition = function (s) {
  if (s.length === 0) return []
  if (s.length === 1) return [[s]]

  let result = []

  return result
};

console.log(partition('aab'))
console.log(partition('a'))