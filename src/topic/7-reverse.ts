function reverse(x) {
  if (x < 10 && x > -10) return x
  let isMinus = x < 0
  x = isMinus ? Math.abs(x) : x
  let result = parseInt(x.toString().split('').reverse().join(''))
  result = isMinus ? -result : result
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0
  return result
}

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(-120))
console.log(reverse(0))