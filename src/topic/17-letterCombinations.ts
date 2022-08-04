/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let letterArr = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

  let map = []
  for (let i = 0; i < digits.length; i++) {
    const index = +digits[i] - 2
    map.push(letterArr[index])
  }

  return map
};

console.log(letterCombinations('23'))