/**
 * 66. 加一
 * @param {number[]} digits
 * @return {number[]}
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */

var plusOne = function (digits) {
  let d = 0
  let i = digits.length - 1
  while (i >= 0) {
    d = Math.floor((digits[i] + 1) / 10)
    digits[i] = (digits[i] + 1) % 10
    if (d === 0) return digits
    i--
  }

  if (i < 0 && d === 1) {
    digits.unshift(1)
  }
  return digits
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([0]))
console.log(plusOne([9, 9, 9, 9]))
console.log(plusOne([8, 9, 9, 9]))