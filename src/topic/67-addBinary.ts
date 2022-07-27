/**
 * 67. 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 */
var addBinary = function(a, b) {
  let result = []
  let d = 0
  let i = a.length - 1
  let j = b.length - 1

  while(i >= 0 || j >= 0) {
    let n1 = i < 0 ? 0 : +a[i]
    let n2 = j < 0 ? 0 : +b[j]
    const res = n1 + n2 + d
    result.unshift(res % 2)
    d = Math.floor(res / 2)
    i--
    j--
  }
  result.unshift(d === 1 ? d : '')

  return result.join('')
};

console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
