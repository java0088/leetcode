/**
 * 59. 螺旋矩阵 II
 * @param {number} n
 * @return {number[][]}
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */
var generateMatrix = function (n) {
  let index = 1
  let matrix = new Array(n).fill(0).map(() => [])
  let row = [], col = []
  help(0, 0)
  function help(i, j) {
    if (row[i] && col[j]) return
    if (i < 0 || j < 0 || i >= n || j >= n) return
    row[i] = true
    col[i] = true
    matrix[i][j] = index++
    help(i, j + 1)
    help(i + 1, j)
  }
  return matrix
};



console.log(generateMatrix(3))
console.log(generateMatrix(1))
