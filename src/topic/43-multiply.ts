/**
 * 43. 字符串相乘
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。
 */
var multiply = function (num1, num2) {
  let result = ''
  let px = 1
  for (let i = num1.length - 1; i >= 0; i--) {
    result = bigintAdd(result, (+num1[i] * +num2 * px) + '')
    px = px * 10
  }

  function bigintAdd(s, t) {
    let maxLength = Math.max(s.length, t.length);
    s = s.padStart(maxLength, 0);
    t = t.padStart(maxLength, 0);
    let bit = 0;
    let f = 0; //进位
    let sum = "";
    for (let i = maxLength - 1; i >= 0; i--) {
      bit = parseInt(s[i]) + parseInt(t[i]) + f;
      f = Math.floor(bit / 10);
      sum = bit % 10 + sum;
    }
    if (f == 1) {
      sum = "1" + sum;
    }
    return sum;
  }
  return result
};
console.log(multiply('2', '3'))
console.log(multiply('123', '456'))
console.log(multiply('123456789', '987654321'))
debugger
console.log(multiply('498828660196', '840477629533'))

