/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const list = []
  backtrack(list, [], 0, 0, n)
  function backtrack(list, cur, open, close, max) {
    if (cur.length === max * 2) {
      list.push(cur.join(''))
      return
    }

    if (open < max) {
      cur.push('(')
      backtrack(list, cur, open + 1, close, max);
      cur.pop()
    }

    if (close < open) {
      cur.push(')');
      backtrack(list, cur, open, close + 1, max);
      cur.pop()
    }
  }
  return list
};

console.log(generateParenthesis(3))