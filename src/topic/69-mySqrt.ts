/**
 * 69. x 的平方根 
 * @param {number} x
 * @return {number}
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x

  let left = 1, right = x / 2
  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2)
    if (mid > x / mid) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  return left
};
console.log(mySqrt(4), Math.floor(Math.pow(4, 0.5)))
console.log(mySqrt(8), Math.floor(Math.pow(8, 0.5)))
console.log(mySqrt(16), Math.floor(Math.pow(16, 0.5)))
console.log(mySqrt(22), Math.floor(Math.pow(22, 0.5)))
// console.log(mySqrt(8))