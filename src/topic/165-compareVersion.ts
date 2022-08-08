/**
 * 165. 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  while (v1.length !== 0 && v2.length !== 0) {
    let vn1 = v1.shift()
    let vn2 = v2.shift()
    if (vn1 !== vn2) {
      return +vn1 - +vn2
    }
  }
  let res = 0
  while (v1.length !== 0) {
    res = v1.shift()
    if (+res != 0) return +res
  }
  while (v2.length !== 0) {
    res = v2.shift()
    if (+res != 0) return res
  }
  return +res
};

console.log(compareVersion('1.01', '1.001'))
console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('0.1', '1.1'))
console.log(compareVersion('1.0.1', '1'))
console.log(compareVersion('0.1', '1.1'))
