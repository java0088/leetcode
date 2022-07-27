/**
 * 22. 括号生成
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const arr = new Array(n).fill(0).map(() => ['(', ')'])


  return arr
};

console.log(generateParenthesis(3))